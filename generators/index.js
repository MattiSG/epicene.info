const MARKERS = {
	bigDot:	'•',
	dash:	'-',
	dot:	'.',
	median:	'·',
	none:	'',
	slash:	'/',
	space:	' ',
}

const generators = [
	require('./character'),
	require('./sentences'),
	require('./audio'),
]


Promise.all(Object.keys(MARKERS).map(markerName => {
	return Promise.all(generators.map(generator => generator.generate(markerName, MARKERS[markerName]).then(generator.html)))
})).then(markerGeneratorsResults => {
	let html = markerGeneratorsResults.map(results => results.join('</td><td>')).join('</td></tr><tr><td>')
	console.log(`<tr><td>${html}</td></tr>`)
})
