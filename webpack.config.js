const path = require('path');
const _path = (link) => path.resolve(__dirname, link)

const src = {
    src: _path('./src')
}

module.exports = {
    mode: 'production',
    context: src.src, //контекст для путей
    entry: './main.js', //точки входа

    devServer: { //настройки сервера
        port: 3000,
        open: true, //открыть браузер
    },

    module: {
        rules: [ //правила обработки модулей
            {
                test: /\.js$/,
                exclude: /(node_modules)/,
                use: {
                    loader: 'babel-loader',
                    options: {
                        presets: ['@babel/preset-env']
                    }
                }
            },
        ]


    }
}