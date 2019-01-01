module.exports.name = 'Caractère'

module.exports.generate = function generateCharacter(markerName, marker) {
	return Promise.resolve(marker)
}

module.exports.html = function generateHtml(text) {
	return `<pre><span class="character">${text}</span></pre>`
}
