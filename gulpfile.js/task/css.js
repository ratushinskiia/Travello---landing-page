const {src, dest} = require("gulp");

// Config
const path = require('../config/path.js')
const app = require('../config/app.js')


// Plugins
const plumber = require ('gulp-plumber');
const notify = require ('gulp-notify');
const concat = require ('gulp-concat');
const cssimport = require ('gulp-cssimport');
const autoprefixer = require ('gulp-autoprefixer');
const csso = require ('gulp-csso');
const rename = require ('gulp-rename');
const size = require ('gulp-size');
const shorthand = require ('gulp-shorthand'); // font: 22px; line-height: 1.5 to ==> font: 22px/1.5 Arial,
const groupCssMediaQueries = require ('gulp-group-css-media-queries'); 
const webpCss = require ('gulp-webp-css'); 
const { isDev } = require("../config/app.js");


// CSS Rendering
const css = function () {
    return src(path.css.src, {sourcemaps: isDev})
        .pipe(plumber({
            errorHandler: notify.onError(error => ({
                title: "CSS",
                message: error.message
            }))
        }))
        .pipe(concat("main.css"))
        .pipe(cssimport())
        .pipe(webpCss())
        .pipe(autoprefixer())
        .pipe(shorthand())
        .pipe(groupCssMediaQueries())
        .pipe(size({ title: "main.css" }))
        .pipe(dest(path.css.dest, {sourcemaps: isDev}))
        .pipe(rename({ suffix: ".min" }))
        .pipe(csso())
        .pipe(size({ title: "main.min.css" }))
        .pipe(dest(path.css.dest, {sourcemaps: isDev}))
}

module.exports = css;