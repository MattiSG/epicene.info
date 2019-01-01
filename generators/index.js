const MARKERS = {
	bullet:	'•',
	bulletOperator: '∙',
	dash:	'-',
	dot:	'.',
	hyphenationPoint: '‧',
	middleDot:	'·',
	none:	'',
	slash:	'/',
	space:	' ',
}

const generators = [
	require('./character'),
	require('./unicode-name'),
	require('./sentences'),
	require('./doubleclick-macos'),
	require('./voiceover'),
	require('./google-translate-neural'),
	require('./google-translate-base'),
]


Promise.all(Object.keys(MARKERS).map(markerName => {
	return Promise.all(generators.map(generator => generator.generate(markerName, MARKERS[markerName]).then(generator.html)))
})).then(markerGeneratorsResults => {
	return markerGeneratorsResults.map(results => results.join('</td><td>')).join('</td></tr><tr><td>')
}).then(innerTbodyHtml => {
	return `<tbody><tr><td>${innerTbodyHtml}</td></tr></tbody>`
}).then(tbodyHtml => {
	let headers = generators.map(generator => generator.name).join('</th><th>')

	return `<thead><tr><th>${headers}</th></tr></thead>${tbodyHtml}`
}).then(innerTableHtml => {
	return `<table><caption>Comparaison des différents marqueurs d’écriture inclusive</caption>${innerTableHtml}</table>`
}).then(console.log)
