const path = require('path');
const _path = (link) => path.join(__dirname, link)
const webpack = require('webpack')
const CopyPlugin = require('copy-webpack-plugin')

const HtmlWebpackPlugin = require('html-webpack-plugin');
const TerserPlugin = require('terser-webpack-plugin');

const src = {
    src: _path('src'),
    pug: _path('src/pug'),
    components: _path('src/components'),
    blocks: _path('src/blocks'),
    pages: _path('src/pug/pages'),
    scripts: _path('src/scripts/'),
    styles: _path('src/styles/'),
    images: _path('src/assets/images/')
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
        components: src.pages+"/show_components/show_components.js",
        landing_page: src.pages+"/landing_page/landing_page.js",
        registration: src.pages+"/registration/registration.js",
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
                test: /\.css$/i,
                use: [
                    "style-loader",
                    "css-loader",
                    
                ],
            },
            {
                test: /\.s[ac]ss$/i,
                use: [
                    "style-loader",
                    "css-loader",
                    "sass-loader",
                    {
                        loader: 'sass-resources-loader',
                        options: {
                            resources: [ src.styles + './_vars.scss']
                        }
                    }
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
    resolve: {
        alias: {
            'jquery': _path('node_modules/jquery/dist/jquery'),
            'inputmask.dependencyLib': _path('node_modules/inputmask/dist/inputmask/inputmask.dependencyLib'),
            'inputmask': _path('node_modules/inputmask/dist/inputmask/inputmask'),
            'jquery.inputmask': _path('node_modules/inputmask/dist/inputmask/jquery.inputmask'),
            'inputmask.numeric.extensions': _path('node_modules/inputmask/dist/inputmask/inputmask.numeric.extensions'),
            'slick-carousel': _path('/node_modules/slick-carousel/slick/slick.min.js'),
            'slick-carouse-styles': _path('/node_modules/slick-carousel/slick/slick-theme.scss'),
        },
    },
    plugins: [
        new CopyPlugin({
            patterns: [
                { from: path.resolve(__dirname, "src/assets/img/dynamic"), to: "assets/img/dynamic" },
            ],
        }),
        new webpack.ProvidePlugin({
            $: 'jquery',
            jQuery: 'jquery',
            
        }),
        new HtmlWebpackPlugin({
            template: src.pages + '/show_components/show_components.pug',
            filename: './index.html',
            title: 'Components',
            chunks: ['main', 'components'],
            minify: !isDev,

        }),
        new HtmlWebpackPlugin({
            template: src.pages + '/registration/registration.pug',
            filename: './pages/registration.html',
            title: 'Registration',
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
    },
}
