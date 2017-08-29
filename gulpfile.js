const gulp = require('gulp')
const sass = require('gulp-sass')
const browserSync = require('browser-sync')
const autoprefixer = require('gulp-autoprefixer')

// Sass Compiling
gulp.task('styles', function () {
  gulp.src('./scss/main.scss')
  .pipe(sass())
  .pipe(autoprefixer('last 2 versions'))
  .pipe(gulp.dest('./public/stylesheets'))
  .pipe(browserSync.reload({stream: true}))
})

// BrowserSync
gulp.task('serve', function () {

  browserSync.init({
    server: {
      baseDir: './public'
    }
  })
})

// Watchers
gulp.task('watch', function () {

  gulp.watch('./scss/*.scss', ['styles']) // Watch changes to SCSS files, then reload browser
  gulp.watch('./public/**/*.html', browserSync.reload) // Watch changes to HTML files, then reload browser
  gulp.watch('./public/js/**/*.js', browserSync.reload) // Watch changes to JS files, then reload browser

})

// Gulp Default Init
gulp.task('default', ['styles', 'serve', 'watch']) // Default Task + order of Tasks to run
