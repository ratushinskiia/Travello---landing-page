const {src, dest} = require("gulp");

// Config
const path = require('../config/path.js')
const app = require('../config/app.js')


// Plugins
const plumber = require ('gulp-plumber');
const notify = require ('gulp-notify');
const autoprefixer = require ('gulp-autoprefixer');
const csso = require ('gulp-csso');
const rename = require ('gulp-rename');
const size = require ('gulp-size');
const shorthand = require ('gulp-shorthand'); // font: 22px; line-height: 1.5 to ==> font: 22px/1.5 Arial,
const groupCssMediaQueries = require ('gulp-group-css-media-queries'); 
const sass = require ('gulp-sass')(require('sass')); 
const sassGlob = require ('gulp-sass-glob');
const webpCss = require ('gulp-webp-css'); 
const { isDev } = require("../config/app.js");
const { isProd } = require("../config/app.js");
const gulpIf = require("gulp-if");


// SCSS Rendering
const scss = function () {
    return src(path.scss.src, {sourcemaps: isDev})
        .pipe(sassGlob()) // @import "block/*.scss" (all files)
        .pipe(sass())
        .pipe(shorthand())
        .pipe(webpCss())
        .pipe(autoprefixer())
        .pipe(groupCssMediaQueries())
        .pipe(size({ title: "main.css" }))
        .pipe(dest(path.scss.dest, {sourcemaps: isDev}))
        .pipe(rename({ suffix: ".min" }))
        .pipe(gulpIf(app.isProd, csso())) 
        .pipe(size({ title: "main.min.css" }))
        .pipe(dest(path.scss.dest, {sourcemaps: isDev}))
}

module.exports = scss;