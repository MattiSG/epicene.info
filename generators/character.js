module.exports.generate = function generateCharacter(markerName, marker) {
	return Promise.resolve(marker)
}

module.exports.html = function generateHtml(text) {
	return `<pre>${text}</pre>`
}
