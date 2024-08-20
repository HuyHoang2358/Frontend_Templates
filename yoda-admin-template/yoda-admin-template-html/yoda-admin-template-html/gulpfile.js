let { src, dest, series } = require('gulp');

let sass = require('gulp-sass')(require('sass'));
let prefix = require('gulp-autoprefixer');
let minify = require('gulp-clean-css');
let rtlcss = require('gulp-rtlcss');

let babel = require('gulp-babel');
let terser = require('gulp-terser');
let concat = require('gulp-concat');

let rename = require('gulp-rename');

// SASS
function compileSass() {
    return src(['src/scss/bootstrap.scss', 'src/scss/components.scss', 'src/scss/colors.scss', 'src/scss/custom-rtl.scss', 'src/scss/app.scss', 'src/scss/core/**/*.scss',])
        .pipe(sass())
        .pipe(prefix('last 2 versions'))
        .pipe(dest('html-folders/app-assets/css'))
};

function compileSassMinify() {
    return src(['src/scss/bootstrap.scss', 'src/scss/components.scss', 'src/scss/colors.scss', 'src/scss/custom-rtl.scss', 'src/scss/app.scss', 'src/scss/core/**/*.scss',])
        .pipe(sass())
        .pipe(prefix('last 2 versions'))
        .pipe(minify())
        .pipe(rename(function (path) {
            path.basename += ".min";
        }))
        .pipe(dest('html-folders/app-assets/css'))
};

// RTL SASS Custom File
function compileSassCustomRTL() {
    return src(['src/scss/custom-rtl.scss'])
        .pipe(sass())
        .pipe(prefix('last 2 versions'))
        .pipe(dest('html-folders/app-assets/css-rtl'))
};

function compileSassMinifyCustomRTL() {
    return src(['src/scss/custom-rtl.scss'])
        .pipe(sass())
        .pipe(prefix('last 2 versions'))
        .pipe(minify())
        .pipe(rename(function (path) {
            path.basename += ".min";
        }))
        .pipe(dest('html-folders/app-assets/css-rtl'))
};

// RTL SASS
function compileSassRTL() {
    return src(['src/scss/bootstrap.scss', 'src/scss/components.scss', 'src/scss/colors.scss', 'src/scss/app.scss', 'src/scss/core/**/*.scss'])
        .pipe(sass())
        .pipe(prefix('last 2 versions'))
        .pipe(rtlcss())
        .pipe(dest('html-folders/app-assets/css-rtl'))
};

function compileSassRTLMinify() {
    return src(['src/scss/bootstrap.scss', 'src/scss/components.scss', 'src/scss/colors.scss', 'src/scss/app.scss', 'src/scss/core/**/*.scss'])
        .pipe(sass())
        .pipe(prefix('last 2 versions'))
        .pipe(rtlcss())
        .pipe(minify())
        .pipe(rename(function (path) {
            path.basename += ".min";
        }))
        .pipe(dest('html-folders/app-assets/css-rtl'))
};

// JS
function js() {
    return src('src/js/core/**/*.js')
        .pipe(dest('html-folders/app-assets/js'),);
}

function jsMinify() {
    return src('src/js/core/**/*.js')
        .pipe(babel())
        .pipe(terser())
        .pipe(rename(function (path) {
            path.basename += ".min";
        }))
        .pipe(dest('html-folders/app-assets/js'),);
}

function jsPlugin() {
    return src('src/js/plugin/*.js')
        .pipe(babel())
        .pipe(terser())
        .pipe(rename(function (path) {
            path.basename += ".min";
        }))
        .pipe(dest('html-folders/app-assets/js/plugin'));
}

function jsApp() {
    return src('src/js/core/**/*.js')
        .pipe(concat('app.js'))
        .pipe(dest('html-folders/app-assets/js'),);
}

function jsAppMinify() {
    return src('src/js/core/**/*.js')
        .pipe(babel())
        .pipe(terser())
        .pipe(concat('app.min.js'))
        .pipe(dest('html-folders/app-assets/js'),);
}

// Export
exports.default = series(
    compileSass,
    compileSassMinify,
    compileSassCustomRTL,
    compileSassMinifyCustomRTL,
    compileSassRTL,
    compileSassRTLMinify,
    js,
    jsMinify,
    jsPlugin,
    jsApp,
    jsAppMinify,
);