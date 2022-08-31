const {src, dest} = require("gulp");

//Config
const path = require('../config/path.js')
const app = require('../config/app.js')

//plugins
const plumber = require ('gulp-plumber');
const notify = require ('gulp-notify');
const fileinclude = require ('gulp-file-include');
const htmlmin = require ('gulp-htmlmin');
const size = require ('gulp-size'); //show size of files before and after in terminal
const webpHtml = require ('gulp-webp-html'); 
const prettyHtml = require ('gulp-pretty-html'); 

// Обработка HTML
const html = function () {
    return src(path.html.src)
        .pipe(plumber({
            errorHandler: notify.onError(error => ({
                title: "html",
                message: error.message
            }))
        }))
        .pipe(fileinclude())
        .pipe(webpHtml())
        .pipe(size({ title: "Before minification"}))
        .pipe(htmlmin(app.htmlmin))
        .pipe(size({ title: "After minification"}))
        .pipe(prettyHtml())
        .pipe(dest(path.html.dest))
}

module.exports = html; //return function not object