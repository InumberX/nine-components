let gulp = require('gulp')
let sass = require('gulp-sass')
let rename = require('gulp-rename')
let ejs = require('gulp-ejs')

// 監視処理
gulp.task('default', function () {
 // .scssファイルの更新を監視
 gulp.watch('_styles/**/*.scss', gulp.series('sass'))
 // .ejsファイルの更新を監視
 gulp.watch('_pages/**/*.ejs', gulp.series('ejs'))
 gulp.watch('_components/**/*.ejs', gulp.series('ejs'))
})

// Sass
gulp.task('sass', function () {
 return gulp
  .src('_styles/**/*.scss')
  .pipe(sass({ outputStyle: 'expanded' }).on('error', sass.logError))
  .pipe(gulp.dest('./dist/'))
})

// EJS
gulp.task('ejs', function () {
 return gulp
  .src(['_pages/**/*.ejs', '!' + '_pages/**/_*.ejs'])
  .pipe(ejs({}, {}, { ext: '.html' }))
  .pipe(rename({ extname: '.html' }))
  .pipe(gulp.dest('./dist/'))
})
