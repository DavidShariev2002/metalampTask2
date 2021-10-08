const path = require('path');
const _path = (link) => path.join(__dirname, link)

const HtmlWebpackPlugin = require('html-webpack-plugin');
const TerserPlugin = require('terser-webpack-plugin');

const src = {
    src: _path('src'),
    pug: _path('src/pug'),
    components: _path('src/components'),
    blocks: _path('src/blocks'),
    pages: _path('src/pug/pages'),
    scripts: _path('src/scripts/')
}
const dist = {
    src: _path('dist'),
    pages: _path('dist/pages')
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
        registration: src.pages+"/registration/registration.js",
        sing_in: src.pages+"/sign_in/sign_in.js",
        room_details: src.pages+"/room_details/room_details.js",
        search_room: src.pages+"/search_room/search_room.js",
        sign_in: src.pages+"/sign_in/sign_in.js",
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
                    },
                    
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
            template: src.pages + '/registration/registration.pug',
            filename: './pages/registration.html',
            title: 'registration',
            chunks: ['main', 'registration'],
            minify: !isDev,
            
        }),
        new HtmlWebpackPlugin({
            template: src.pages + '/sign_in/sign_in.pug',
            filename: './pages/sign_in.html',
            title: 'Second Page',
            chunks: ['main', 'sign_in'],
            minify: !isDev,
        }),
        new HtmlWebpackPlugin({
            template: src.pages + '/room_details/room_details.pug',
            filename: './pages/room_details.html',
            title: 'Room Details',
            chunks: ['main', 'room_details'],
            minify: !isDev,
        }),
        new HtmlWebpackPlugin({
            template: src.pages + '/search_room/search_room.pug',
            filename: './pages/search_room.html',
            title: 'Search Room',
            chunks: ['main', 'search_room'],
            minify: !isDev,
        }),
        new HtmlWebpackPlugin({
            template: src.pages + '/landing_page/landing_page.pug',
            filename: './pages/landing_page.html',
            title: 'Second Page',
            chunks: ['main', 'landing_page'],
            minify: !isDev,
        }),
    ],
    optimization: {
        minimize: true,
        minimizer: [new TerserPlugin({
            extractComments: false,
        })],
        splitChunks: {
            cacheGroups: {
                vendor: {
                    name: 'vendors',
                    chunks: 'all',
                }
            }
        }
    },
}
