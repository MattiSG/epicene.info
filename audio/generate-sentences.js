const exec = require('child_process').exec
const fs = require('fs')


const DESTINATION = '../web/audio'
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
	let aiffFile = `${DESTINATION}/${markerName}.aiff`
	let m4aFile = `${DESTINATION}/${markerName}.m4a`

	let sentence = `Merci à tou${marker}te${marker}s les contributeur${marker}trices qui sont venu${marker}e${marker}s.`

	exec(`say --output-file=${aiffFile} ${sentence}`, err => {
		if (err) return console.error(err)

		console.log(`Wrote ${aiffFile}, converting to AAC`)

		exec(`ffmpeg -y -i ${aiffFile} -c:a aac -b:a 64k ${m4aFile}`, (err, stdout, stderr) => {
			if (err) return console.error(err)

			console.log(`Converted ${aiffFile}, wrote ${m4aFile}`)
			fs.unlink(aiffFile, err => {
				if (err) return console.error(err)

				console.log(`Removed ${aiffFile}`)
			})
		})
	})
}
