const path = require('path');
const _path = (link) => path.resolve(__dirname, link)

const HtmlWebpackPlugin = require('html-webpack-plugin');

const src = {
    src: _path('./src'),
    pug: _path('./src/pug'),
    components: _path('./src/components'),
    blocks: _path('./src/blocks'),
    pages: _path('./src/pug/pages'),
    scripts: _path('./src/scripts/')
}
const dist = {
    src: _path('./dist'),
    pages: _path('./dist/pages')
}

const isDev = process.env.NODE_ENV === 'development' ? true : false;


module.exports = {
    mode: 'development',
    context: src.src, //контекст для путей
    experiments: {
        asset: true
    },
    entry: { //точки входа
        main: src.scripts+"/main.js",
        firstPageScript: src.pages+"/first_page/first_page.js",
        secondPageScript: src.pages+"/second_page/second_page.js" 
    },
    output: {   //настройка выхода
        filename: isDev ? 'scripts/[name].js' : 'scripts/[name].[contenthash].js',
        path: dist.dist,
        assetModuleFilename: '[path][name][ext]',
        clean: true
    },

    devServer: { //настройки сервера
        port: 3000,
        open: true, //открыть браузер
    },

    module: {
        rules: [ //правила обработки модулей
            {
                test: /\.(html)$/,
                use: ['html-loader']
            },
            {
                test: /\.png|jpg|svg/,
                type: 'asset',
                type: 'asset/resource',

            },
            {
                test: /\.(jpg|png|svg|ttf|woff|eot)$/,
                type: 'asset/resource',
            },
            {
                test: /\.s[ac]ss$/i,
                use: [
                    "style-loader",
                    "css-loader",
                    "sass-loader"
                ],
            },
            {
                test: /\.m?js$/,
                exclude: /(node_modules)/,
                use: {
                    loader: 'babel-loader',
                    options: {
                        presets: ['@babel/preset-env']
                    }
                },
                
            },
            {
                test: /\.pug$/,
                exclude: /(node_modules)/,
                use: [
                    `pug-loader?pretty=${isDev}`
                ]
            },
        ]
    },
    plugins: [
        new HtmlWebpackPlugin({
            template: _path(src.pages + '/first_page/first_page.pug'),
            filename: 'index.html',
            title: 'First Page',
            chunks: ['main', 'firstPageScript'],
            minify: !isDev,
            
        }),
        new HtmlWebpackPlugin({
            template: _path(src.pages + '/second_page/second_page.pug'),
            filename: '/pages/second_page.html',
            title: 'Second Page',
            chunks: ['main', 'secondpageScript'],
            minify: !isDev,
        }),
    ],
}
