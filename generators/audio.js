const exec = require('util').promisify(require('child_process').exec)
const fs = require('fs').promises


const DESTINATION = '../web/audio'

module.exports.generate = function generateAudio(markerName, marker) {
	let aiffFile = `${DESTINATION}/${markerName}.aiff`
	let m4aFile = `${DESTINATION}/${markerName}.m4a`

	return require('./sentences').generate(markerName, marker)
		.then(sentence => exec(`say --output-file=${aiffFile} ${sentence}`))
		.then(() => {
			console.log(`Wrote ${aiffFile}, converting to AAC`)
			return exec(`ffmpeg -y -i ${aiffFile} -c:a aac -b:a 64k ${m4aFile}`)
		}).then((stdout, stderr) => {
			console.log(`Converted ${aiffFile}, wrote ${m4aFile}`)
			return fs.unlink(aiffFile)
		}).then(() => {
			console.log(`Removed ${aiffFile}`)
			return m4aFile
		})
}
