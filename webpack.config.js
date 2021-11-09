const path = require('path');

module.exports = {
    mode: 'development',
    entry: {
        main: './src/app.js'
    },
    output: {
        path: path.resolve('./dist'),
        filename: '[name].js'
    },
    module: {
        rules: [
            {
                test: /\.css$/,
                use: [
                    'style-loader', //이렇게 처리된 js문자열 stylesheet 코드를 html style로 처리
                    'css-loader' //css파일을 js 모듈 처럼 사용
                ]
            }
        ]
    }
}