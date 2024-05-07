let PRESETS = null

document.addEventListener("DOMContentLoaded", () => {
	document.body.classList.toggle(
		"nightMode",
		window.matchMedia("(prefers-color-scheme: dark)").matches
	)
})

function countLines(str) {
	return (str.match(/\r|\r\n|\n/g) || "").length + 1
}

async function multiFetch(urls) {
	files = [...urls].map(async file => ({
		file,
		content: (
			await fetch(`./Cards/${file}`).then(res => res.text())
		).replaceAll(
			/<script src="[^"]+"><\/script>|<link rel="stylesheet" href="[^"]+\.css">/gu,
			""
		),
	}))

	return (await Promise.all(files)).reduce(
		(a, element) => ({ ...a, [element.file]: element.content }),
		{}
	)
}

async function fetchCardTemplates() {
	PRESETS = await fetch("./Cards/Presets.json").then(data => data.json())
	var cards = await fetch("./Cards/Cards.json").then(data => data.json())

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

	return cards
}

let cards = null
let fields = {}

fetchCardTemplates().then(data => {
	cards = data

	fields = JSON.parse(localStorage.getItem("JPCards") ?? "{}")

	Object.values(cards).forEach(cardType => {
		if (!fields.hasOwnProperty(cardType.preset))
			fields[cardType.preset] = {}

		cardType.fields.forEach(
			field =>
				(fields[cardType.preset][field] =
					fields[cardType.preset][field] ??
					PRESETS[cardType.preset][field] ??
					"")
		)
	})

	document.querySelector("demo-area")?.updateType()
	document.querySelector("demo-fields")?.update()
	document.querySelector("demo-type")?.update()
})

if (!customElements.get("jpcard-tooltip"))
	customElements.define(
		"jpcard-tooltip",
		class JPCardTooltip extends HTMLElement {
			static observedAttributes = ["initialized"]

			connectedCallback() {
				this.parentElement.onmouseover = () => {
					this.showTip()
				}

				this.parentElement.onmouseout = () => {
					this.hideTip()
				}

				this.parentElement.ontouchstart = () => {
					this.showTip()
				}

				this.parentElement.ontouchend = () => {
					this.hideTip()
				}
			}

			disconnectedCallback() {
				this.parentElement.onmouseover = null
				this.parentElement.onmouseout = null
				this.parentElement.ontouchstart = null
				this.parentElement.ontouchend = null

				this.hideTip()
			}

			showTip() {
				if (this.tipElement) document.body.removeChild(this.tipElement)

				this.tipElement = make({
					tagName: "dialog",
					parent: document.body,
					class: ["JPCards", "jpcard-tooltip"],
					childNodes: [...this.childNodes].map(node =>
						node.cloneNode(true)
					),
				})

				const parentBounds = this.parentElement.getBoundingClientRect()
				const bodyBounds = document.body.getBoundingClientRect()
				const contentBounds = this.tipElement.getBoundingClientRect()

				if (contentBounds.height < parentBounds.y)
					this.tipElement.style.top = `calc(${
						parentBounds.top - contentBounds.height
					}px - 0.25rem)`
				else
					this.tipElement.style.top = `calc(${parentBounds.bottom}px + 0.25rem)`

				let midle =
					parentBounds.x +
					(parentBounds.width - contentBounds.width) / 2
				midle = Math.max(midle, 0)
				midle = Math.min(midle, bodyBounds.width - contentBounds.width)

				this.tipElement.style.left = `${midle}px`
			}

			hideTip() {
				if (this.tipElement) document.body.removeChild(this.tipElement)
				this.tipElement = null
			}
		}
	)

customElements.define(
	"demo-area",
	class extends HTMLElement {
		static observedAttributes = ["cardtype", "side"]

		connectedCallback() {
			this.updateType()
		}

		attributeChangedCallback(name, oldValue, newValue) {
			if (name === "cardtype") this.updateType()
			else if (name === "side") this.updateFields()
		}

		updateType() {
			if (!cards) return
			if (!this.hasAttribute("cardtype")) return

			this.cardType = cards[this.getAttribute("cardtype")]
			this.fields = fields[this.cardType.preset]

			this.updateFields()
			document.querySelector("demo-fields")?.update()

			document.body.className = document.body.classList.contains(
				"nightMode"
			)
				? "JPCards nightMode"
				: "JPCards"

			document.body.classList.add(
				...[...document.getElementById("card").classList].filter(
					t => t !== "hideFurigana"
				)
			)
		}

		updateFields() {
			if (!cards) return
			if (!this.cardType) return
			if (!this.fields) return
			if (!this.hasAttribute("side")) return

			localStorage.setItem("JPCards", JSON.stringify(fields))

			try {
				let fields = Object.entries(this.fields).reduce(
					(acc, [key, val]) => {
						acc[key] = val
						return acc
					},
					{
						furigana: () => (text, render) =>
							parseFurigana(render(text)),
						kana: () => (text, render) => parseKana(render(text)),
						kanji: () => (text, render) => parseKanji(render(text)),
					}
				)

				let template = this.cardType[this.getAttribute("side")]
					.replaceAll(
						/\{\{([^\{\}:\n]+):([^\{\}:\n]+)\}\}/gu,
						"{{#$1}}{{{$2}}}{{/$1}}"
					)
					.replaceAll(/(?<!\{)\{\{(\w.*?)\}\}(?!\})/gu, "{{{$1}}}")

				this.innerHTML = Mustache.render(template, fields)
					.replaceAll(/\[sound:([^\[\]]+)\]/gmu, (_, match) =>
						parseAudio(match)
					)
					.replaceAll("&lt;", "<")
					.replaceAll("&gt;", ">")

				this.querySelectorAll("script").forEach(script => {
					eval(script.innerHTML)
				})
			} catch (e) {
				console.error(e)

				const message = e.message
					.replaceAll("<", "&lt;")
					.replaceAll(">", "&gt;")
					.replaceAll("\n", "<br>")

				demoArea.innerHTML = `
				<article id="card" class="orange">
							<header><h1>Error</h1></header>
							<main><code>${message}</code></main>
				</article>`
			}

			autofocus = false
		}
	}
)

customElements.define(
	"demo-fields",
	class extends HTMLElement {
		connectedCallback() {
			this.update()
		}

		update() {
			if (!cards) return

			const demoArea = document.querySelector("demo-area")
			if (!demoArea) return

			this.innerHTML = ""
			Object.entries(demoArea.fields).forEach(([name, value]) => {
				make({
					tagName: "label",
					parent: this,
					htmlFor: name,
					innerHTML: name + ": ",
				})
				make({
					tagName: "textarea",
					parent: this,
					id: name,
					rows: countLines(value) + 1,
					innerHTML: value,
					onkeyup: e => {
						demoArea.fields[name] = e.target.value
						demoArea.updateFields()
					},
				})
			})
		}
	}
)

customElements.define(
	"demo-type",
	class extends HTMLElement {
		connectedCallback() {
			this.update()
		}

		update() {
			if (!cards) return

			const demoArea = document.querySelector("demo-area")
			if (!demoArea) return

			this.innerHTML = ""

			make({
				tagName: "label",
				parent: this,
				htmlFor: "card-type",
				innerHTML: "Card type: ",
			})

			make({
				tagName: "select",
				parent: this,
				id: "card-type",
				value: demoArea.getAttribute("cardtype"),
				onchange: e => {
					demoArea.setAttribute("cardtype", e.target.value)
				},

				childNodes: Object.keys(cards).map(type => ({
					tagName: "option",
					innerHTML: type,
					value: type,
				})),
			})
		}
	}
)

function toggleSettings() {
	document.body.classList.toggle("display-settings")
}

function clearFields() {
	const demoArea = document.querySelector("demo-area")
	if (!demoArea) return

	Object.keys(demoArea.fields).forEach(field => (demoArea.fields[field] = ""))

	demoArea.updateFields()
	document.querySelector("demo-fields")?.update()
}

function demoFields() {
	const demoArea = document.querySelector("demo-area")
	if (!demoArea) return

	Object.keys(demoArea.fields).forEach(
		field =>
			(demoArea.fields[field] =
				PRESETS[demoArea.cardType.preset][field] ?? "")
	)

	demoArea.updateFields()
	document.querySelector("demo-fields")?.update()
}

function toggleSide(e) {
	const demoArea = document.querySelector("demo-area")
	if (!demoArea) return

	demoArea.setAttribute(
		"side",
		demoArea.getAttribute("side") === "front" ? "back" : "front"
	)

	e.target.innerHTML =
		demoArea.getAttribute("side") === "front" ? "Show Back" : "Show Front"
}

function pycmd(command) {
	console.log(`Received pycmd "${command}"`)

	if (command === "ans") {
		document.querySelector("demo-area")?.setAttribute("side", "back")
		return true
	}

	if (
		command === "ease1" ||
		command === "ease2" ||
		command === "ease3" ||
		command === "ease4"
	) {
		document.querySelector("demo-area")?.setAttribute("side", "front")
		return true
	}

	return false
}

function parseAudio(source) {
	return `<a class="replay-button soundLink" href="#" onclick="return false;">
	<svg class="playImage" viewBox="0 0 64 64" version="1.1">
		<circle cx="32" cy="32" r="29">
		</circle>
		<path d="M56.502,32.301l-37.502,20.101l0.329,-40.804l37.173,20.703Z"></path><
	/svg>
</a>`
}
