const MARKERS = {
	median: '·',
	bigDot: '•',
	dash: '-',
	slash: '/',
}

for (let markerName in MARKERS) {
	let marker = MARKERS[markerName]
	let sentence = `Merci à tou${marker}te${marker}s les contributeur${marker}trices qui sont venu${marker}e${marker}s.`

	require('fs').writeFile(`${markerName}.txt`, sentence, err => {
		if (err)
			console.error(err)
		else
			console.log(`Wrote ${markerName}.txt`)
	})
}
