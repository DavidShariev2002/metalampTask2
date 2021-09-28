const path = require('path');
const _path = (link) => path.resolve(__dirname, link)

const src = {
    src: _path('./src')
}

module.exports = {
    mode: 'development',
    context: src.src, //контекст для путей
    entry: './main.js'
}