const {src, dest} = require("gulp");

// Config
const path = require('../config/path.js')
const app = require('../config/app.js')


// Plugins
const plumber = require ('gulp-plumber');
const notify = require ('gulp-notify');
const babel = require ('gulp-babel');
const webpack = require ('webpack-stream'); 
const { isDev } = require("../config/app.js");


// JavaScript Rendering
const js = function () {
    return src(path.js.src, {sourcemaps: isDev})
        .pipe(plumber({
            errorHandler: notify.onError(error => ({
                title: "JavaScript",
                message: error.message
            }))
        }))
        .pipe(babel())
        .pipe(webpack(app.webpack)) //del spaces, build modules.
        .pipe(dest(path.js.dest, {sourcemaps: isDev}))
}

module.exports = js;