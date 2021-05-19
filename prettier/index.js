const { join } = require('path');

module.exports = {
    extends: [join(__dirname, '..', 'index.js'), join(__dirname, '..', 'prettier.js')],
}