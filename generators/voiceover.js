const exec = require('util').promisify(require('child_process').exec)
const fs = require('fs').promises
const basename = require('path').basename


const DESTINATION = 'assets/audio'
const TMP_DIR = require('os').tmpdir()

module.exports.name = 'Synthèse VoiceOver macOS'

module.exports.generate = function generateAudio(markerName, marker) {
	let aiffFile = `${TMP_DIR}/${markerName}.aiff`
	let m4aFile = `${__dirname}/../${DESTINATION}/${markerName}.m4a`

	return require('./sentences').generate(markerName, marker)
		.then(sentence => exec(`say --output-file=${aiffFile} ${sentence}`))
		.then(() => {
			console.error(`Wrote ${aiffFile}, converting to AAC`)
			return exec(`ffmpeg -y -i ${aiffFile} -c:a aac -b:a 64k ${m4aFile}`)
		}).then(() => {
			console.error(`Converted ${aiffFile}, wrote ${m4aFile}`)
			return fs.unlink(aiffFile)
		}).then(() => {
			console.error(`Removed ${aiffFile}`)
			return m4aFile
		})
}

module.exports.html = function generateHtml(path) {
	let filename = basename(path)
	return `<audio controls src="${DESTINATION}/${filename}">`
}
