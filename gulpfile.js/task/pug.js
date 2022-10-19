const {src, dest} = require("gulp");

//Config
const path = require('../config/path.js')
const app = require('../config/app.js')


//plugins
const plumber = require ('gulp-plumber');
const notify = require ('gulp-notify');
const size = require ('gulp-size'); //show size of files before and after in terminal
const gulpPug = require ('gulp-pug'); 
const webpHtml = require ('gulp-webp-html'); 
const prettyHtml = require ('gulp-pretty-html'); 
const gulpIf = require("gulp-if");


// Обработка Pug
const pug = function () {
    return src(path.pug.src)
        .pipe(plumber({
            errorHandler: notify.onError(error => ({
                title: "pug",
                message: error.message
            }))
        }))
        .pipe(gulpPug({
            data: {
                headerFeatures: require("../data/header-features.json")
            }
        }))
        .pipe(webpHtml())        
        .pipe(gulpIf(app.isDev, prettyHtml()))
        .pipe(dest(path.pug.dest))
}

module.exports = pug;