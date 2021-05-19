const { join } = require('path');

module.exports = {
    extends: [join(__dirname, '..', 'typescript.js'), join(__dirname, '..', 'prettier.js')],
}