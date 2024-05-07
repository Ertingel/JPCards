async function invoke(action, version, params = {}) {
	const response = await fetch("http://127.0.0.1:8765", {
		method: "POST",

		headers: {
			"Content-Type": "application/json",
		},

		body: JSON.stringify({
			action,
			version,
			params,
		}),
	}).then(res => res.json())

	if (Object.getOwnPropertyNames(response).length != 2) {
		throw "response has an unexpected number of fields"
	}
	if (!response.hasOwnProperty("error")) {
		throw "response is missing required error field"
	}
	if (!response.hasOwnProperty("result")) {
		throw "response is missing required result field"
	}
	if (response.error) {
		throw response.error
	}

	return response.result
}

const fs = require("node:fs")

async function multiFetch(urls) {
	files = [...urls].map(async file => ({
		file,
		content: await fs.readFileSync(`./Cards/${file}`, "utf8"),
	}))

	return (await Promise.all(files)).reduce(
		(a, element) => ({ ...a, [element.file]: element.content }),
		{}
	)
}

async function fetchCardTemplates() {
	var cards = JSON.parse(await fs.readFileSync("./Cards/Cards.json", "utf8"))

	var { VARIANTS, ...cards } = cards

	let files = new Set()
	Object.values(cards).forEach(card => {
		files.add(card.front)
		files.add(card.back)

		card.fields = card.fields.sort()
	})

	files = await multiFetch(files)

	for (const type of Object.keys(cards)) {
		cards[type].front = files[cards[type].front]
		cards[type].back = files[cards[type].back]
	}

	return { VARIANTS, ...cards }
}

function parseModels(VARIANTS, cards) {
	const baseCards = Object.entries(cards).reduce((acc, [name, data]) => {
		acc.push({
			modelName: "JPCards: " + name,
			inOrderFields: data.fields,
			css: "",
			isCloze: false,
			cardTemplates: [
				{
					Name: name,
					Front: data.front,
					Back: data.back,
				},
			],
			preset: data.preset,
		})
		return acc
	}, [])

	const variantCards = Object.entries(VARIANTS).reduce(
		(acc, [name, data]) => {
			let fields = []
			let preset = null

			const templates = Object.entries(data).reduce(
				(acc2, [name2, data2]) => {
					const file = cards[data2]
					if (!file)
						throw new Error(`Could not find template "${data2}"!`)

					fields = file.fields

					acc2.push({
						Name: name2,
						Front: file.front,
						Back: file.back,
					})

					preset = file.preset
					return acc2
				},
				[]
			)

			acc.push({
				modelName: "JPCards: " + name,
				inOrderFields: fields,
				css: "",
				isCloze: false,
				cardTemplates: templates,
				preset,
			})
			return acc
		},
		[]
	)

	return [...baseCards, ...variantCards]
}

async function createModels(models) {
	const listed = await invoke("modelNames", 6, {})

	models.forEach(model => {
		if (listed.includes(model.modelName))
			invoke("updateModelTemplates", 6, {
				model: {
					name: model.modelName,
					templates: model.cardTemplates.reduce((acc, data) => {
						acc[data.Name] = {
							Front: data.Front,
							Back: data.Back,
						}
						return acc
					}, {}),
				},
			})
		else invoke("createModel", 6, model)
	})
}

async function copyMediaFiles() {
	const files = await fs.readdirSync("./Media")

	//const listed = await invoke("getMediaFilesNames", 6, { pattern: "_*" })

	files
		.filter(file => /^[^ \._][^ \.]*(?:\.css|\.js)$/u.test(file))
		.forEach(async file => {
			let data = await fs.readFileSync(`./Media/${file}`, "utf8")

			if (file.endsWith(".css"))
				data = data.replaceAll(/\/\*# sourceMappingURL=.*\*\//gu, "")

			invoke("storeMediaFile", 6, {
				filename: "_" + file,
				data: Buffer.from(data).toString("base64"),
			})

			/* fs.copyFileSync(`./Media/${file}`, `./build/media/_${file}`) */
		})
}

async function createExampleNotes(models) {
	var presets = JSON.parse(
		await fs.readFileSync("./Cards/Presets.json", "utf8")
	)

	//models.forEach(model => console.log(model.modelName, model.preset))

	const presetTypes = models.reduce((acc, model) => {
		if (!(model.preset in acc)) acc[model.preset] = []

		acc[model.preset].push(model)

		return acc
	}, {})

	let notes = []

	for (const [preset, list] of Object.entries(presetTypes)) {
		list.forEach((model, index) => {
			//console.log(presets, preset)
			const [sortField, SortValue] = Object.entries(presets[preset])[0]
			//console.log(sortField, SortValue)

			notes.push({
				deckName: "JPCards",
				modelName: model.modelName,
				fields: {
					...presets[preset],
					[sortField]:
						list.length <= 1
							? SortValue
							: SortValue +
							  String(index + 1)
									.replaceAll("0", "０")
									.replaceAll("1", "１")
									.replaceAll("2", "２")
									.replaceAll("3", "３")
									.replaceAll("4", "４")
									.replaceAll("5", "５")
									.replaceAll("6", "６")
									.replaceAll("7", "７")
									.replaceAll("8", "８")
									.replaceAll("9", "９"),
				},
				tags: ["JPCards"],
			})
		})
	}

	await invoke("createDeck", 6, {
		deck: "JPCards",
	})

	const note_ids = await invoke("addNotes", 6, {
		notes,
	})

	const card_ids = await notes.reduce(async (acc, { fields }) => {
		const [field, value] = Object.entries(fields)[0]

		return [
			...(await acc),
			...(await invoke("findCards", 6, {
				query: '"' + field + ":" + value + '"',
			})),
		]
	}, [])

	await invoke("suspend", 6, {
		cards: card_ids,
	})
}

async function main() {
	const { VARIANTS, ...cards } = await fetchCardTemplates()
	const models = parseModels(VARIANTS, cards)
	await createModels(models)
	await copyMediaFiles()
	await createExampleNotes(models)
}

main()
