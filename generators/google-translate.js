/**
 * You will need to set up a Google Cloud API account and follow their instructions to obtain a private key file and reference it in the `GOOGLE_APPLICATION_CREDENTIALS`
 */

const GoogleTranslate = require('@google-cloud/translate').Translate

module.exports.name = 'Traduction Google Translate'

module.exports.generate = function generateSentence(markerName, marker) {
	return require('./sentences').generate(markerName, marker)
		.then(sentence => new GoogleTranslate().translate(sentence, 'en'))
		.then(results => results[0])
}

module.exports.html = function generateHtml(text) {
	return `<span lang="en">${text}</span>`
}
