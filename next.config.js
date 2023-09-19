const path = require('path')

// @ts-check
const withNextIntl = require('next-intl/plugin') ()

console.log('something something', __dirname)
module.exports = withNextIntl({
    sassOptions: {
        includePaths: [path.join(__dirname, 'src' ,'app')],
    }
})
