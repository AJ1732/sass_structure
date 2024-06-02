const { src, dest, watch, series } = require('gulp');
const purgecss = require('gulp-purgecss')
const sass = require('gulp-sass')(require('sass'));

const buildCSS = () => {
  return src('./scss/main.scss')
  .pipe(sass())
  .pipe(purgecss({ content: ['*.html']}))
  .pipe(dest('./css'));
};

const watchSCSS = () => {
  watch(['./scss/main.scss', '*.html'], buildCSS);
  watch(['./*.html'], buildCSS)
}

exports.default = series(buildCSS, watchSCSS)