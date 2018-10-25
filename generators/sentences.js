module.exports.name = 'Phrase d’exemple'

module.exports.generate = function generateSentence(markerName, marker) {
	return Promise.resolve(`Merci à tou${marker}te${marker}s les contributeur${marker}trices qui sont venu${marker}e${marker}s.`)
}

module.exports.html = function generateHtml(text) {
	return `<span>${text}</span>`
}
