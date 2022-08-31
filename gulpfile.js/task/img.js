const {src, dest} = require("gulp");

// Config
const path = require('../config/path.js')
const app = require('../config/app.js')


// Plugins
const plumber = require ('gulp-plumber');
const notify = require ('gulp-notify');
const imagemin = require ('gulp-imagemin');
const newer = require ('gulp-newer'); //reload only new images
const webp = require ('gulp-webp'); 
const gulpIf = require ('gulp-if'); 


// Img Rendering
const img = function () {
    return src(path.img.src)
        .pipe(plumber({
            errorHandler: notify.onError(error => ({
                title: "Image",
                message: error.message
            }))
        }))
        .pipe(newer(path.img.dest))
        .pipe(webp())
        .pipe(dest(path.img.dest))
        .pipe(src(path.img.src))
        .pipe(newer(path.img.dest))
        .pipe(gulpIf(app.isProd, imagemin(app.imagemin))) //work only If it is prod.
        .pipe(dest(path.img.dest))
}

module.exports = img;