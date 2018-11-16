const htmlWebpackPlugin = require('html-webpack-plugin');
const {AngularCompilerPlugin} = require('@ngtools/webpack');

module.exports = {
    resolve: {
        extensions: [".ts", ".js"]
    },
    entry: './src/main.ts',
    output: {
        path: process.cwd() +"/dist"
    },
    module: {
        rules: [
            {
                test: /\.scss$/,
                loader: 'to-string-loader!css-loader!sass-loader',
            },
            {
                test: /\.html$/,
                loader: 'html-loader'
            },
            {
                test: /(?:\.ngfactory\.js|\.ngstyle\.js|\.ts)$/,
                loader: '@ngtools/webpack'
            }
        ]
    },
    plugins: [
        new htmlWebpackPlugin({
            template: "./src/public/index.html"
        }),
        new AngularCompilerPlugin({
            mainPath: "src/main.ts",
            platform: 0,
            hostReplacementPaths: {},
            sourceMap: true,
            tsConfigPath: "tsconfig.json",
            skipCodeGeneration: false,
            compilerOptions: {}
        })
    ]
}