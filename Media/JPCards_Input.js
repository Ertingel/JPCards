var KEY_BINDINGS = {
	a: ["あ", "ア"],
	i: ["い", "イ"],
	u: ["う", "ウ"],
	e: ["え", "エ"],
	o: ["お", "オ"],
	ka: ["か", "カ"],
	ki: ["き", "キ"],
	ku: ["く", "ク"],
	ke: ["け", "ケ"],
	ko: ["こ", "コ"],
	sa: ["さ", "サ"],
	shi: ["し", "シ"],
	su: ["す", "ス"],
	se: ["せ", "セ"],
	so: ["そ", "ソ"],
	ta: ["た", "タ"],
	chi: ["ち", "チ"],
	tsu: ["つ", "ツ"],
	te: ["て", "テ"],
	to: ["と", "ト"],
	na: ["な", "ナ"],
	ni: ["に", "ニ"],
	nu: ["ぬ", "ヌ"],
	ne: ["ね", "ネ"],
	no: ["の", "ノ"],
	ha: ["は", "ハ"],
	hi: ["ひ", "ヒ"],
	fu: ["ふ", "フ"],
	he: ["へ", "ヘ"],
	ho: ["ほ", "ホ"],
	ma: ["ま", "マ"],
	mi: ["み", "ミ"],
	mu: ["む", "ム"],
	me: ["め", "メ"],
	mo: ["も", "モ"],
	ya: ["や", "ヤ"],
	yu: ["ゆ", "ユ"],
	yo: ["よ", "ヨ"],
	ra: ["ら", "ラ"],
	ri: ["り", "リ"],
	ru: ["る", "ル"],
	re: ["れ", "レ"],
	ro: ["ろ", "ロ"],
	wa: ["わ", "ワ"],
	wo: ["を", "ヲ"],
	nn: ["ん", "ン"],

	ga: ["が", "ガ"],
	gi: ["ぎ", "ギ"],
	gu: ["ぐ", "グ"],
	ge: ["げ", "ゲ"],
	go: ["ご", "ゴ"],
	za: ["ざ", "ザ"],
	ji: ["じ", "ジ"],
	zu: ["ず", "ズ"],
	ze: ["ぜ", "ゼ"],
	zo: ["ぞ", "ゾ"],
	da: ["だ", "ダ"],
	di: ["ぢ", "ヂ"],
	du: ["づ", "ヅ"],
	de: ["で", "デ"],
	do: ["ど", "ド"],
	ba: ["ば", "バ"],
	bi: ["び", "ビ"],
	bu: ["ぶ", "ブ"],
	be: ["べ", "ベ"],
	bo: ["ぼ", "ボ"],
	pa: ["ぱ", "パ"],
	pi: ["ぴ", "ピ"],
	pu: ["ぷ", "プ"],
	pe: ["ぺ", "ペ"],
	po: ["ぽ", "ポ"],

	kya: ["きゃ", "キャ"],
	kyu: ["きゅ", "キュ"],
	kyo: ["きょ", "キョ"],
	sha: ["しゃ", "シャ"],
	shu: ["しゅ", "シュ"],
	sho: ["しょ", "ショ"],
	cha: ["ちゃ", "チャ"],
	chu: ["ちゅ", "チュ"],
	cho: ["ちょ", "チョ"],
	nya: ["にゃ", "ニャ"],
	nyu: ["にゅ", "ニュ"],
	nyo: ["にょ", "ニョ"],
	hya: ["ひゃ", "ヒャ"],
	hyu: ["ひゅ", "ヒュ"],
	hyo: ["ひょ", "ヒョ"],
	mya: ["みゃ", "ミャ"],
	myu: ["みゅ", "ミュ"],
	myo: ["みょ", "ミョ"],
	rya: ["りゃ", "リャ"],
	ryu: ["りゅ", "リュ"],
	ryo: ["りょ", "リョ"],
	gya: ["ぎゃ", "ギャ"],
	gyu: ["ぎゅ", "ギュ"],
	gyo: ["ぎょ", "ギョ"],
	ja: ["じゃ", "ジャ"],
	ju: ["じゅ", "ジュ"],
	jo: ["じょ", "ジョ"],
	bya: ["びゃ", "ビャ"],
	byu: ["びゅ", "ビュ"],
	byo: ["びょ", "ビョ"],
	pya: ["ぴゃ", "ピャ"],
	pyu: ["ぴゅ", "ピュ"],
	pyo: ["ぴょ", "ピョ"],

	wi: ["うぃ", "ウィ"],
	we: ["うぇ", "ウェ"],
	fi: ["ふぃ", "フィ"],
	fe: ["ふぇ", "フェ"],
	fo: ["ふぉ", "フォ"],
	dzu: ["づ", "ヅ"],

	xa: ["ぁ", "ァ"],
	xi: ["ぃ", "ィ"],
	xu: ["ぅ", "ゥ"],
	xe: ["ぇ", "ェ"],
	xo: ["ぉ", "ォ"],
	xtsu: ["っ", "ッ"],
	xya: ["ゃ", "ャ"],
	xyu: ["ゅ", "ュ"],
	xyo: ["ょ", "ョ"],
	xwa: ["ゎ", "ヮ"],
	xka: ["ヵ", "ヵ"],
	xke: ["ヶ", "ヶ"],

	1: ["１", "１"],
	2: ["２", "２"],
	3: ["３", "３"],
	4: ["４", "４"],
	5: ["５", "５"],
	6: ["６", "６"],
	7: ["７", "７"],
	8: ["８", "８"],
	9: ["９", "９"],
	0: ["０", "０"],

	"-": ["っ", "ー"],
	".": ["。", "。"],
	",": ["、", "、"],
	"!": ["！", "！"],
	"?": ["？", "？"],
	"(": ["（", "（"],
	")": ["）", "）"],
	"[": ["「", "「"],
	"]": ["」", "」"],
}

var LONGEST_ROMANJI = Object.keys(KEY_BINDINGS).reduce(
	(acc, romanji) => Math.max(acc, romanji.length),
	0
)

var LONGEST_KANA = Object.entries(KEY_BINDINGS).reduce(
	(acc, [_, [hiragana, katakana]]) =>
		Math.max(acc, Math.max(hiragana.length, katakana.length)),
	0
)

var TO_HIRAGANA_MAP = Object.entries(KEY_BINDINGS).reduce(
	(acc, [romanji, [hiragana, katakana]]) => {
		acc[romanji] = hiragana
		acc[katakana] = hiragana
		return acc
	},
	{}
)

var TO_KATAKANA_MAP = Object.entries(KEY_BINDINGS).reduce(
	(acc, [romanji, [hiragana, katakana]]) => {
		acc[romanji] = katakana
		acc[hiragana] = katakana
		return acc
	},
	{}
)

function toKana(str, map, xtsu) {
	str = str.toLowerCase()
	const longest = Math.max(LONGEST_ROMANJI, LONGEST_KANA)

	for (let window = longest; window > 0; window--)
		for (let index = 0; index <= str.length - window; index++) {
			const slice = str.slice(index, index + window)

			if (slice in map)
				str =
					str.slice(0, index) + map[slice] + str.slice(index + window)
			else if (
				window === 2 &&
				slice[0] === slice[1] &&
				slice.charCodeAt(0) <= 256
			)
				str =
					str.slice(0, index) +
					xtsu +
					slice[0] +
					str.slice(index + window)
		}

	return str
}

function toHiragana(str) {
	return toKana(str, TO_HIRAGANA_MAP, "っ")
}

function toKatakana(str) {
	return toKana(str, TO_KATAKANA_MAP, "ッ")
}

function hasJapanese(str) {
	return /[\u2E80-\u2FDF\u3000-\u30FF\u31F0-\u31FF\u3220-\u3243\u3280-\u3370\u337B-\u337F\u3400-\u4DBF\u4E00-\u9FFF\uF900-\uFAFF\uFF00-\uFF9F]/u.test(
		str
	)
}

function hasHiragana(str) {
	return /[\u3040-\u309F]/u.test(str)
}

function hasKatakana(str) {
	return /[\u30A0-\u30FF]/u.test(str)
}

function parseFurigana(furigana) {
	return furigana.replaceAll(
		/(?:(?<=^|\n|	)| )(\S+)[\[「]\s*([^\]」]+?)\s*[\]」]/gu,
		"<ruby><rb>$1</rb><rt>$2</rt></ruby>"
	)
}

function parseKanji(furigana) {
	return furigana.replaceAll(
		/(?:(?<=^|\n|	)| )(\S+)[\[「]\s*([^\]」]+?)\s*[\]」]/gu,
		"$1"
	)
}

function parseKana(furigana) {
	return furigana.replaceAll(
		/(?:(?<=^|\n|	)| )(\S+)[\[「]\s*([^\]」]+?)\s*[\]」]/gu,
		"$2"
	)
}

function getFuriganaRegex(furigana) {
	let patern = furigana
		.replaceAll(
			/(?:(?<=^|\n|	)| )(\S+)[\[「]\s*([^\]」]+?)\s*[\]」]/gu,
			"($1|$2)"
		)
		.replaceAll(" ", "")

	return new RegExp(`^${patern}$`, "iu")
}

var setMemory = (name, value) => sessionStorage.setItem(name, value)
var getMemory = name => sessionStorage.getItem(name)

if (typeof AnkiDroidJS !== "undefined")
	AnkiDroidAPI = new AnkiDroidJS({
		version: "0.0.2",
		developer: "https://github.com/Ertingel",
	})

function showAnswer() {
	if (typeof pycmd !== "undefined") pycmd("ans")
	else if (typeof study !== "undefined") study.drawAnswer()
	else if (typeof AnkiDroidAPI !== "undefined") AnkiDroidAPI.ankiShowAnswer()
}

function wrongAnswer() {
	if (typeof pycmd !== "undefined") pycmd("ease1")
	else if (typeof study !== "undefined") study.drawAnswer()
	else if (typeof AnkiDroidAPI !== "undefined") AnkiDroidAPI.ankiAnswerEase1()
}

function difficultAnswer() {
	if (typeof pycmd !== "undefined") pycmd("ease2")
	else if (typeof study !== "undefined") study.drawAnswer()
	else if (typeof AnkiDroidAPI !== "undefined") AnkiDroidAPI.ankiAnswerEase2()
}

function correctAnswer() {
	if (typeof pycmd !== "undefined") pycmd("ease3")
	else if (typeof study !== "undefined") study.drawAnswer()
	else if (typeof AnkiDroidAPI !== "undefined") AnkiDroidAPI.ankiAnswerEase3()
}

function easyAnswer() {
	if (typeof pycmd !== "undefined") pycmd("ease4")
	else if (typeof study !== "undefined") study.drawAnswer()
	else if (typeof AnkiDroidAPI !== "undefined") AnkiDroidAPI.ankiAnswerEase4()
}

function answer(correct) {
	if (correct) correctAnswer()
	else wrongAnswer()
}

var autofocus = true

function initInput(answer) {
	document.body.onkeyup = null

	const input = document.getElementById("input")
	setMemory("input", "")

	if (hasJapanese(answer)) {
		const convertHiragana = hasHiragana(answer)

		input.oninput = e => {
			if (e.inputType === "deleteContentBackward") {
				setMemory("input", input.value)
				return
			}

			var cursor = input.value.length - input.selectionEnd

			if (convertHiragana) input.value = toHiragana(input.value)
			else input.value = toKatakana(input.value)

			cursor = input.value.length - cursor
			input.setSelectionRange(cursor, cursor)

			setMemory("input", input.value)
		}
	} else
		input.oninput = e => {
			setMemory("input", input.value)
		}

	input.onkeyup = event => {
		if (event.code === "Enter") showAnswer()
	}
}

function checkInput(ans) {
	const input = document.getElementById("input")
	const memory = (getMemory("input") ?? "").trim()
	setMemory("input", "")

	input.value = memory

	const correct = hasJapanese(ans)
		? getFuriganaRegex(toHiragana(ans)).test(toHiragana(memory))
		: ans.trim().toLowerCase().replaceAll(/\s+/gu, " ") ===
		  memory.trim().toLowerCase().replaceAll(/\s+/gu, " ")

	if (memory !== "") input.classList.add(correct ? "correct" : "wrong")

	input.disabled = true

	if (autofocus) {
		document.body.focus()
		console.log("focus")

		document.body.onkeyup = function (event) {
			console.log(event)
			if (event.code !== "Backspace") return
			document.body.onkeyup = null

			answer(correct)
		}
	}
}
