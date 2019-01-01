module.exports.name = 'Nom unicode'

const UNICODE_METADATA_BY_CATEGORY = require('unicode/category')


module.exports.generate = function generateSentence(markerName, marker) {
	for (let category in UNICODE_METADATA_BY_CATEGORY) {
		let unicodeMetadata = UNICODE_METADATA_BY_CATEGORY[category][marker.charCodeAt(0)]

		if (unicodeMetadata)
			return Promise.resolve(unicodeMetadata.value)
	}
}

module.exports.html = function generateHtml(code) {
	return `<a href="https://unicode-table.com/fr/${code}/"><code>U+${code}</code></a>`
}
