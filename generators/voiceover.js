const exec = require('util').promisify(require('child_process').exec)
const fs = require('fs').promises
const basename = require('path').basename


const DESTINATION = `${__dirname}/../web/audio`

module.exports.name = 'Synthèse VoiceOver'

module.exports.generate = function generateAudio(markerName, marker) {
	let aiffFile = `${DESTINATION}/${markerName}.aiff`
	let m4aFile = `${DESTINATION}/${markerName}.m4a`

	return require('./sentences').generate(markerName, marker)
		.then(sentence => exec(`say --output-file=${aiffFile} ${sentence}`))
		.then(() => {
			console.error(`Wrote ${aiffFile}, converting to AAC`)
			return exec(`ffmpeg -y -i ${aiffFile} -c:a aac -b:a 64k ${m4aFile}`)
		}).then((stdout, stderr) => {
			console.error(`Converted ${aiffFile}, wrote ${m4aFile}`)
			return fs.unlink(aiffFile)
		}).then(() => {
			console.error(`Removed ${aiffFile}`)
			return m4aFile
		})
}

module.exports.html = function generateHtml(path) {
	let filename = basename(path)
	return `<audio controls src="audio/${filename}">`
}
