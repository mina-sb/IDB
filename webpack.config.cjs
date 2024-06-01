const path = require('node:path')

module.exports = {
    mode: 'production',
    entry: './dist/main.js',
    output: {
        path: path.resolve(__dirname, 'build'),
        filename: 'bundle.js',
    },
}