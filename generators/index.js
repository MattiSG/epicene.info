const MARKERS = {
	bigDot:	'•',
	dash:	'-',
	dot:	'.',
	median:	'·',
	none:	'',
	slash:	'/',
	space:	' ',
}


for (let markerName in MARKERS) {
	let marker = MARKERS[markerName]

	require('./sentences').generate(markerName, marker).then(console.log)
	require('./audio').generate(markerName, marker).then(console.log)
}
