var TAGS = {
	Buddh: ["gray", "Buddhism"],
	Christn: ["gray", "Christianity"],
	MA: ["gray", "Martial arts"],
	Nidan: ["orange", "Nidan verb (archaic)"],
	P: ["green", "Popular term"],
	Shinto: ["gray", "Shinto"],
	X: ["gray", "Rude or X-rated term (not displayed in educational software)"],
	abbr: ["gray", "Abbreviation"],
	"adj-f": ["orange", "Noun or verb acting prenominally"],
	"adj-i": ["yellow", "Adjective (keiyoushi)"],
	"adj-ix": ["yellow", "Adjective (keiyoushi) - よい/いい class"],
	"adj-kari": ["yellow", "'かり' adjective (archaic)"],
	"adj-ku": ["yellow", "'く' adjective (archaic)"],
	"adj-na": ["yellow", "Adjectival nouns or quasi-adjectives (keiyodoshi)"],
	"adj-nari": ["yellow", "Archaic/formal form of な-adjective"],
	"adj-no": [
		"purple",
		"Nouns which may take the genitive case particle 'no'",
	],
	"adj-pn": ["yellow", "Pre-noun adjectival (rentaishi)"],
	"adj-shiku": ["yellow", "'しく' adjective (archaic)"],
	"adj-t": ["yellow", "'たる' adjective"],
	"adj-い": ["yellow", "Adjective (keiyoushi)"],
	"adj-かり": ["yellow", "'かり' adjective (archaic)"],
	"adj-く": ["yellow", "'く' adjective (archaic)"],
	"adj-しく": ["yellow", "'しく' adjective (archaic)"],
	"adj-たる": ["yellow", "'たる' adjective"],
	"adj-な": ["yellow", "Adjectival nouns or quasi-adjectives (keiyodoshi)"],
	"adj-なり": ["yellow", "Archaic/formal form of な-adjective"],
	"adj-の": [
		"purple",
		"Nouns which may take the genitive case particle 'no'",
	],
	adjective: ["yellow", "Adjective"],
	adv: ["orange-yellow", "Adverb (fukushi)"],
	"adv-to": ["orange-yellow", "Adverb taking the 'と' particle"],
	"adv-と": ["orange-yellow", "Adverb taking the 'と' particle"],
	adverb: ["orange-yellow", "Adverb"],
	agric: ["gray", "Agriculture"],
	anat: ["gray", "Anatomy"],
	arch: ["green", "Archaism"],
	archeol: ["gray", "Archeology"],
	archit: ["gray", "Architecture, building"],
	art: ["gray", "Art, aesthetics"],
	astron: ["gray", "Astronomy"],
	ateji: ["gray", "Ateji (phonetic) reading"],
	audvid: ["gray", "Audio-visual"],
	aux: ["blue", "Auxiliary"],
	"aux-adj": ["yellow", "Auxiliary adjective"],
	"aux-v": ["orange", "Auxiliary verb"],
	aviat: ["gray", "Aviation"],
	baseb: ["gray", "Baseball"],
	biochem: ["gray", "Biochemistry"],
	biol: ["gray", "Biology"],
	bot: ["gray", "Botany"],
	bus: ["gray", "Business"],
	char: ["gray", "Character"],
	chem: ["gray", "Chemistry"],
	chn: ["gray", "Children's language"],
	col: ["gray", "Colloquialism"],
	comp: ["gray", "Computing"],
	company: ["red", "Company name"],
	conj: ["blue", "Conjunction"],
	cop: ["blue", "Copula"],
	creat: ["gray", "Creature"],
	cryst: ["gray", "Crystallography"],
	ctr: ["blue", "Counter"],
	dated: ["green", "Dated term"],
	dei: ["gray", "Deity"],
	derog: ["gray", "Derogatory"],
	dialect: ["pink", "Dialect"],
	ecol: ["gray", "Ecology"],
	econ: ["gray", "Economics"],
	elec: ["gray", "Electricity, elec. eng."],
	electr: ["gray", "Electronics"],
	embryo: ["gray", "Embryology"],
	engr: ["gray", "Engineering"],
	ent: ["gray", "Entomology"],
	ev: ["gray", "Event"],
	exp: ["blue", "Expressions (phrases, clauses, etc.)"],
	fam: ["gray", "Familiar language"],
	fem: ["red", "Female term or language"],
	fict: ["gray", "Fiction"],
	finc: ["gray", "Finance"],
	fish: ["gray", "Fishing"],
	food: ["gray", "Food, cooking"],
	gai: ["green", "Common loanword"],
	gardn: ["gray", "Gardening, horticulture"],
	genet: ["gray", "Genetics"],
	geogr: ["gray", "Geography"],
	geol: ["gray", "Geology"],
	geom: ["gray", "Geometry"],
	gikun: [
		"gray",
		"Gikun (meaning as reading) or jukujikun (special kanji reading)",
	],
	given: ["red", "Given name or forename, gender not specified"],
	go: ["gray", "Go (game)"],
	godan: ["orange", "Godan verb"],
	golf: ["gray", "Golf"],
	gramm: ["blue", "Grammar"],
	grammar: ["blue", "Grammar"],
	grmyth: ["gray", "Greek mythology"],
	hanaf: ["gray", "Hanafuda"],
	hist: ["gray", "Historical term"],
	hob: ["pink", "Hokkaido dialect"],
	hon: ["blue", "Honorific or respectful (sonkeigo) language"],
	horse: ["gray", "Horse-racing"],
	hum: ["blue", "Humble (kenjougo) language"],
	iK: ["green", "Word containing irregular kanji usage"],
	ichi: ["green", "Listed as common in Ichimango Goi Bunruishuu"],
	ichidan: ["orange", "Ichidan verb"],
	id: ["blue", "Idiomatic expression"],
	ik: ["green", "Word containing irregular kana usage"],
	int: ["blue", "Interjection (kandoushi)"],
	intransitive: ["orange", "Intransitive verb"],
	io: ["green", "Irregular okurigana usage"],
	joc: ["gray", "Jocular, humorous term"],
	ksb: ["pink", "Kansai dialect"],
	ktb: ["pink", "Kantou dialect"],
	kyb: ["pink", "Kyoto dialect"],
	kyu: ["pink", "Kyuushuu dialect"],
	law: ["gray", "Law"],
	leg: ["gray", "Legend"],
	ling: ["gray", "Linguistics"],
	litf: ["gray", "Literary or formal term"],
	logic: ["gray", "Logic"],
	"m-sl": ["gray", "Manga slang"],
	mahj: ["gray", "Mahjong"],
	male: ["gray", "Male term or language"],
	math: ["gray", "Mathematics"],
	mech: ["gray", "Mechanical engineering"],
	med: ["gray", "Medicine"],
	met: ["gray", "Climate, weather"],
	mil: ["gray", "Military"],
	music: ["gray", "Music"],
	myth: ["gray", "Mythology"],
	n: ["purple", "Noun (common) (futsuumeishi)"],
	"n-adv": ["orange-yellow", "Adverbial noun (fukushitekimeishi)"],
	"n-pr": ["purple", "Proper noun"],
	"n-pref": ["purple", "Noun, used as a prefix"],
	"n-suf": ["purple", "Noun, used as a suffix"],
	"n-t": ["purple", "Noun (temporal) (jisoumeishi)"],
	nab: ["pink", "Nagano dialect"],
	name: ["red", "Name"],
	"net-sl": ["gray", "Internet slang"],
	news: ["green", "Appears frequently in Mainichi Shimbun"],
	nidan: ["orange", "Nidan verb with 'u' ending (archaic)"],
	noun: ["purple", "Noun"],
	num: ["blue", "Numeric"],
	oK: ["green", "Word containing out-dated kanji"],
	obj: ["gray", "Object"],
	obs: ["green", "Obsolete term"],
	obsc: ["green", "Obscure term"],
	ok: ["green", "Out-dated or obsolete kana usage"],
	"on-mim": ["gray", "Onomatopoeic or mimetic word"],
	organization: ["red", "Organization name"],
	ornith: ["gray", "Ornithology"],
	osb: ["pink", "Osaka dialect"],
	oth: ["gray", "Other"],
	paleo: ["gray", "Paleontology"],
	pathol: ["gray", "Pathology"],
	person: ["red", "Full name of a particular person"],
	pharm: ["gray", "Pharmacy"],
	phil: ["gray", "Philosophy"],
	photo: ["gray", "Photography"],
	physics: ["gray", "Physics"],
	physiol: ["gray", "Physiology"],
	place: ["red", "Place name"],
	pn: ["purple", "Pronoun"],
	poet: ["gray", "Poetical term"],
	pol: ["blue", "Polite (teineigo) language"],
	pref: ["blue", "Prefix"],
	print: ["gray", "Printing"],
	product: ["red", "Product name"],
	proverb: ["orange", "Proverb"],
	prt: ["blue", "Particle"],
	psych: ["gray", "Psychology, psychiatry"],
	quote: ["gray", "Quotation"],
	rare: ["green", "Rare"],
	relig: ["gray", "Religion"],
	rkb: ["pink", "Ryuukyuu dialect"],
	sens: ["gray", "Sensitive"],
	serv: ["gray", "Service"],
	shogi: ["gray", "Shogi"],
	sl: ["gray", "Slang"],
	spec: ["green", "Common words not included in frequency lists"],
	sports: ["gray", "Sports"],
	stat: ["gray", "Statistics"],
	station: ["red", "Railway station"],
	suf: ["blue", "Suffix"],
	sumo: ["gray", "Sumo"],
	surname: ["red", "Family or surname"],
	telec: ["gray", "Telecommunications"],
	thb: ["pink", "Touhoku dialect"],
	tradem: ["red", "Trademark"],
	transitive: ["orange", "Transitive verb"],
	tsb: ["pink", "Tosa dialect"],
	tsug: ["pink", "Tsugaru dialect"],
	uK: ["green", "Word usually written using kanji alone"],
	uk: ["green", "Word usually written using kana alone"],
	unc: ["blue", "Unclassified"],
	unclass: ["red", "Unclassified name"],
	"v-unspec": ["orange", "Verb unspecified"],
	v1: ["orange", "Ichidan verb"],
	"v1-s": ["orange", "Ichidan verb - kureru special class"],
	v2: ["orange", "Nidan verb"],
	"v2-k": ["orange", "Nidan verb (upper class)"],
	"v2-s": ["orange", "Nidan verb (lower class)"],
	"v2a-s": ["orange", "Nidan verb with 'u' ending (archaic)"],
	"v2b-k": ["orange", "Nidan verb (upper class) with 'ぶ' ending (archaic)"],
	"v2b-s": ["orange", "Nidan verb (lower class) with 'ぶ' ending (archaic)"],
	"v2d-k": ["orange", "Nidan verb (upper class) with 'づ' ending (archaic)"],
	"v2d-s": ["orange", "Nidan verb (lower class) with 'づ' ending (archaic)"],
	"v2g-k": ["orange", "Nidan verb (upper class) with 'ぐ' ending (archaic)"],
	"v2g-s": ["orange", "Nidan verb (lower class) with 'ぐ' ending (archaic)"],
	"v2h-k": ["orange", "Nidan verb (upper class) with 'ふ' ending (archaic)"],
	"v2h-s": ["orange", "Nidan verb (lower class) with 'ふ' ending (archaic)"],
	"v2k-k": ["orange", "Nidan verb (upper class) with 'く' ending (archaic)"],
	"v2k-s": ["orange", "Nidan verb (lower class) with 'く' ending (archaic)"],
	"v2m-k": ["orange", "Nidan verb (upper class) with 'む' ending (archaic)"],
	"v2m-s": ["orange", "Nidan verb (lower class) with 'む' ending (archaic)"],
	"v2n-s": ["orange", "Nidan verb (lower class) with 'ぬ' ending (archaic)"],
	"v2r-k": ["orange", "Nidan verb (upper class) with 'る' ending (archaic)"],
	"v2r-s": ["orange", "Nidan verb (lower class) with 'る' ending (archaic)"],
	"v2s-s": ["orange", "Nidan verb (lower class) with 'す' ending (archaic)"],
	"v2t-k": ["orange", "Nidan verb (upper class) with 'つ' ending (archaic)"],
	"v2t-s": ["orange", "Nidan verb (lower class) with 'つ' ending (archaic)"],
	"v2w-s": [
		"orange",
		"Nidan verb (lower class) with 'う' ending and 'we' conjugation (archaic)",
	],
	"v2y-k": ["orange", "Nidan verb (upper class) with 'ゆ' ending (archaic)"],
	"v2y-s": ["orange", "Nidan verb (lower class) with 'ゆ' ending (archaic)"],
	"v2z-s": ["orange", "Nidan verb (lower class) with 'ず' ending (archaic)"],
	v4: ["orange", "Yodan verb"],
	v4b: ["orange", "Yodan verb with 'ぶ' ending (archaic)"],
	v4g: ["orange", "Yodan verb with 'ぐ' ending (archaic)"],
	v4h: ["orange", "Yodan verb with 'ふ' ending (archaic)"],
	v4k: ["orange", "Yodan verb with 'く' ending (archaic)"],
	v4m: ["orange", "Yodan verb with 'む' ending (archaic)"],
	v4n: ["orange", "Yodan verb with 'ぬ' ending (archaic)"],
	v4r: ["orange", "Yodan verb with 'る' ending (archaic)"],
	v4s: ["orange", "Yodan verb with 'す' ending (archaic)"],
	v4t: ["orange", "Yodan verb with 'つ' ending (archaic)"],
	v5: ["orange", "Godan verb"],
	v5aru: ["orange", "Godan verb - -ある special class"],
	v5b: ["orange", "Godan verb with 'ぶ' ending"],
	v5g: ["orange", "Godan verb with 'ぐ' ending"],
	v5k: ["orange", "Godan verb with 'く' ending"],
	"v5k-s": ["orange", "Godan verb - いく/ゆく special class"],
	v5m: ["orange", "Godan verb with 'む' ending"],
	v5n: ["orange", "Godan verb with 'ぬ' ending"],
	v5r: ["orange", "Godan verb with 'る' ending"],
	"v5r-i": ["orange", "Godan verb with 'る' ending (irregular verb)"],
	v5s: ["orange", "Godan verb with 'す' ending"],
	v5t: ["orange", "Godan verb with 'つ' ending"],
	v5u: ["orange", "Godan verb with 'う' ending"],
	"v5u-s": ["orange", "Godan verb with 'う' ending (special class)"],
	v5uru: ["orange", "Godan verb - うる old class verb (old form of える)"],
	verb: ["orange", "Verb"],
	vi: ["orange", "Intransitive verb"],
	vidg: ["gray", "Video game"],
	vk: ["orange", "くる verb - special class"],
	vn: ["orange", "Irregular ぬ verb"],
	vr: ["orange", "Irregular る verb, plain form ends with -り"],
	vs: ["orange", "Noun or participle which takes the aux. verb する"],
	"vs-c": ["orange", "す verb - precursor to the modern する"],
	"vs-i": ["orange", "する verb - included"],
	"vs-s": ["orange", "する verb - special class"],
	vt: ["orange", "Transitive verb"],
	vulg: ["gray", "Vulgar expression or word"],
	vz: [
		"orange",
		"Ichidan verb - ずる verb (alternative form of -じる verbs)",
	],
	work: ["red", "Work of art, literature, music, etc. name"],
	yodan: ["orange", "Yodan verb (archaic)"],
	yoji: ["gray", "Yojijukugo"],
	zool: ["gray", "Zoology"],
	"い-adj": ["yellow", "い Adjective"],
	"い-adjective": ["yellow", "い-adjective (keiyoushi)"],
	"かり-adj": ["yellow", "'かり' adjective (archaic)"],
	"く-adj": ["yellow", "'く' adjective (archaic)"],
	"しく-adj": ["yellow", "'しく' adjective (archaic)"],
	"たる-adj": ["yellow", "'たる' adjective"],
	"と-adv": ["orange-yellow", "Adverb taking the 'と' particle"],
	"な-adj": ["yellow", "Adjectival nouns or quasi-adjectives (keiyodoshi)"],
	"なり-adj": ["yellow", "Archaic/formal form of な-adjective"],
	"の-adj": [
		"purple",
		"Nouns which may take the genitive case particle 'の'",
	],
}

function getTagData(tag) {
	if (tag in TAGS)
		return {
			style: TAGS[tag][0],
			tooltip: TAGS[tag][1],
		}

	if (tag.startsWith("JLPT-"))
		return {
			style: "green",
			tooltip: `JLPT level N${tag.substr(5)}`,
		}

	if (tag.startsWith("WK-"))
		return {
			style: "green",
			tooltip: `WaniKani level ${tag.substr(3)}`,
		}

	return {
		style: "gray",
		tooltip: "Unknown Tag",
	}
}

String.prototype.regexToArray = function (pattern) {
	let output = []
	while ((item = pattern.exec(this))) {
		if (item.groups) output.push(item.groups)
		else output.push(item[0])
	}
	return output
}

function make(input) {
	if (input instanceof Node) return input
	if (Array.isArray(input)) return input.map(e => make(e))
	if (typeof input == "string") return document.createTextNode(input)

	const { tagName, parent, class: class_, childNodes, ...data } = input
	const e = document.createElement(tagName)
	if (data) for (const [key, value] of Object.entries(data)) e[key] = value

	if (class_) {
		if (typeof class_ === "string") e.classList.add(class_)
		else e.classList.add(...class_)
	}

	if (childNodes) {
		const parsed = make(childNodes)
		if (Array.isArray(parsed)) parsed.forEach(n => e.appendChild(n))
		else e.appendChild(parsed)
	}

	if (parent) parent.appendChild(e)

	return e
}

function makeTooltip(content) {
	let tipElement = null
	const parent = document.getElementById("qa") ?? document.body

	const show = function () {
		if (tipElement) parent.removeChild(tipElement)

		tipElement = make({
			tagName: "dialog",
			parent: parent,
			class: ["JPCards", "jpcard-tooltip"],
			childNodes: content,
		})

		const parentBounds = this.getBoundingClientRect()
		const bodyBounds = document.body.getBoundingClientRect()
		const contentBounds = tipElement.getBoundingClientRect()

		if (contentBounds.height < parentBounds.y)
			tipElement.style.top = `calc(${
				parentBounds.top - contentBounds.height
			}px - 0.25rem)`
		else tipElement.style.top = `calc(${parentBounds.bottom}px + 0.25rem)`

		let midle =
			parentBounds.x + (parentBounds.width - contentBounds.width) / 2
		midle = Math.max(midle, 0)
		midle = Math.min(midle, bodyBounds.width - contentBounds.width)

		tipElement.style.left = `${midle}px`
	}

	const hide = function () {
		if (tipElement) parent.removeChild(tipElement)
		tipElement = null
	}

	return [show, hide]
}

function makeTag(tag) {
	const { style, tooltip } = getTagData(tag)

	const [show, hide] = makeTooltip(tooltip)

	return make({
		tagName: "span",
		class: ["tag", style],
		onmouseover: show,
		onmouseout: hide,
		ontouchstart: show,
		ontouchend: hide,
		innerText: tag,
	})
}

function parseMeaning(data) {
	return data
		.replaceAll(/<br>|&amp;#13;/gmu, "\n")
		.regexToArray(
			/^[\n 	]*(?:\[[ 	]*(?<tags>[^\n 	\]][^\]]*?)[ 	]*\][ 	]*)?(?<definitions>[^\n 	].*?)[ 	]*$/gmu
		)
		.map(({ tags = "", definitions = "" }) => {
			definitions = definitions.split("|").map(data => data.trim())
			tags = tags.regexToArray(/\S+/gmu)

			return { definitions, tags }
		})
}

function makeMeaning(meaning) {
	return make(
		meaning.map(({ definitions, tags }) => {
			const definition = make({
				tagName: "p",
				class: "definition",
				childNodes: {
					tagName: "span",
					innerHTML: definitions[0],
				},
			})

			if (definitions.length > 1) {
				const [show, hide] = makeTooltip(
					make({
						tagName: "ol",
						childNodes: definitions.map(data => ({
							tagName: "li",
							innerHTML: data,
						})),
					})
				)

				const span = definition.childNodes[0]
				span.classList.add("tooltiped")
				span.onmouseover = show
				span.onmouseout = hide
				span.ontouchstart = show
				span.ontouchend = hide
			}

			if (tags.length <= 0)
				return {
					tagName: "li",
					childNodes: [definition],
				}

			tags = make({
				tagName: "p",
				class: "tags",
				childNodes: tags.reduce(
					(acc, tag) => acc.concat(makeTag(tag), " "),
					[]
				),
			})

			return {
				tagName: "li",
				childNodes: [definition, tags],
			}
		})
	)
}

function populateMeaning() {
	const parent = document.getElementById("meaning")

	const data = parent.innerHTML
	parent.innerHTML = ""

	makeMeaning(parseMeaning(data)).forEach(definition =>
		parent.appendChild(definition)
	)
}
