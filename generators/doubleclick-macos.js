const exec = require('util').promisify(require('child_process').exec)


module.exports.name = 'Sélection au double-clic sous macOS'

module.exports.generate = function generateCharacter(markerName, marker) {
	let word = `Tou${marker}te${marker}s`

	return exec(`osascript -e 'first word of "${word}"'`)
		.then(output => {
			if (output.stderr) console.error(output.stderr)

			return output.stdout.trim() == word
		})
}

module.exports.html = function generateHtml(doesSelectWholeWord) {
	if (doesSelectWholeWord)
		return 'Mot entier'

	return 'Sépare les mots'
}
