//commonjs规范
module.exports = {
    //单入口文件
    // entry:'./app.js',
    entry: { app: "./app.js" },
    //多入口
    // entry:{app1:'./app.js',app2:'./app2.js'},
    //出口
    output: {
        path: __dirname + "/dist",
        filename: "[name].[hash:4].bundle.js",
    },
    //打包模式
    mode: "production", //production development none
    //loader
    module: {
        rules: [
            {
                test: /\.js/,
                use: {
                    loader: "babel-loader",
                    options: {
                        presets: [
                            [
                                "@babel/preset-env",
                                {
                                    targets: {
                                        browsers: ["> 1%", "last 2 versions"],
                                    },
                                },
                            ],
                        ],
                    },
                },
            },
        ],
    },
    //插件
    plugins: [],
    //开发服务器
    devServer: {},
    //解析
    resolve: {},
    //优化项
    optimization: {},
}
