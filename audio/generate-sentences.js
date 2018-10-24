const exec = require('child_process').exec
const fs = require('fs')


const MARKERS = {
	none: '',
	median: '·',
	bigDot: '•',
	dash: '-',
	slash: '/',
}

for (let markerName in MARKERS) {
	let marker = MARKERS[markerName]
	let sentence = `Merci à tou${marker}te${marker}s les contributeur${marker}trices qui sont venu${marker}e${marker}s.`
	let aiffFile = `${markerName}.aiff`

	exec(`say --output-file=${aiffFile} ${sentence}`, err => {
		if (err) return console.error(err)

		console.log(`Wrote ${aiffFile}, converting to AAC`)

		exec(`ffmpeg -y -i ${aiffFile} -c:a aac -b:a 64k ${markerName}.m4a`, (err, stdout, stderr) => {
			if (err) return console.error(err)

			console.log(`Converted ${aiffFile}, wrote ${markerName}.m4a`)
			fs.unlink(aiffFile, err => {
				if (err) return console.error(err)

				console.log(`Removed ${aiffFile}`)
			})
		})
	})
}
