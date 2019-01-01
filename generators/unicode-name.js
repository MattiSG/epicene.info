module.exports.name = 'Nom unicode'

const UNICODE_METADATA_BY_CATEGORY = require('unicode/category')


module.exports.generate = function generateSentence(markerName, marker) {
	for (let category in UNICODE_METADATA_BY_CATEGORY) {
		let unicodeMetadata = UNICODE_METADATA_BY_CATEGORY[category][marker.charCodeAt(0)]

		if (unicodeMetadata)
			return Promise.resolve(unicodeMetadata.name.toLowerCase())
	}

	return Promise.resolve(`__${markerName}__`)
}

module.exports.html = function generateHtml(text) {
	return `<span lang="en">${text}</span>`
}
