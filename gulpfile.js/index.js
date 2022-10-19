const { watch, series, parallel } = require("gulp");
const browserSync = require ('browser-sync').create();


//Config
const path = require('./config/path.js')
const app = require('./config/app.js')

//Tasks
const clear = require('./task/clear.js')
const pug = require('./task/pug.js')
const scss = require('./task/scss.js')
const js = require('./task/js.js')
const img = require('./task/img.js')
const font = require('./task/font.js')

function reload(done) {
    server.reload();
    done();
}

// Server
const server = (done) => {
    browserSync.init({
    server: {
        baseDir: path.root
    }
    });
    done();
}

// Watcher
const watcher = () => {
    watch(path.pug.watch, pug).on("all", browserSync.reload)
    watch(path.scss.watch, scss).on("all", browserSync.reload)
    watch(path.js.watch, js).on("all", browserSync.reload)
    watch(path.img.watch, img).on("all", browserSync.reload)
    watch(path.font.watch, font).on("all", browserSync.reload)
};


const build = series(
    clear,
    parallel(pug, scss, js, img, font)
);

const dev = series(
    build,
    parallel(watcher,server)
);

// Tasks exports
exports.pug = pug;
exports.watch = watcher;
exports.clear = clear;
exports.scss = scss;
exports.js = js;
exports.img = img;
exports.font = font;


// Building
exports.default = app.isProd
? build
: dev;






// Build with html (without pug):
// exports.htmlTask = html;
// // Build
// exports.dev = series(
//     clear,
//     html,
//     parallel(watcher,server)
// );

