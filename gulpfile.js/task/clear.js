const del = require ('del');

//Config
const path = require('../config/path.js')

// Clear dist
const clear = () => {
    return del(path.root)
}


module.exports = clear;