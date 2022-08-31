const isProd = process.argv.includes("--production") // work if: gulp pug --production
const isDev = !isProd;

module.exports = {
    isProd: isProd,
    isDev: isDev,
    htmlmin: {
        collapseWhitespace: isProd //delete space when isProd: true
    },

    pug: {
        pretty: isDev
    },
    
    webpack: {
        mode: isProd ? "production" : "development"
    },

    imagemin: {
        verbose: true //show size before/after minification
    },

    fonter: {
        formats: ["ttf", "woff", "eot", "svg"]
    }
}