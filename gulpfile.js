const gulp = require('gulp')
const sass = require('gulp-sass')
const browserSync = require('browser-sync')
const autoprefixer = require('gulp-autoprefixer')
const useref = require('gulp-useref')
const uglify = require('gulp-uglify')
const gulpIf = require('gulp-if')
const cssnano = require('gulp-cssnano')
const imagemin = require('gulp-imagemin')
const cache = require('gulp-cache')
const del = require('del')
const runSequence = require('run-sequence')
const sourcemaps = require('gulp-sourcemaps')
const concat = require('gulp-concat')

/* Development Tasks */
/*********************/

// BrowserSync
gulp.task('serve', function() {
  browserSync.init({
    server: {
      baseDir: './app'
    }
  })
});

// Sass Compiling
gulp.task('sass', function() {
  return gulp.src('app/scss/main.scss')
    .pipe(sourcemaps.init())
    .pipe(sass())
    .pipe(autoprefixer('last 2 versions'))
    .pipe(sourcemaps.write('./maps'))
    .pipe(gulp.dest('app/css'))
    .pipe(browserSync.reload({
      stream: true
    }))
});

// Watchers
gulp.task('watch', function() {
  gulp.watch('app/scss/*.scss', ['sass']) // Watch changes to SCSS files, then reload browser
  gulp.watch('app/*.html', browserSync.reload) // Watch changes to HTML files, then reload browser
  gulp.watch('app/js/**/*.js', browserSync.reload) // Watch changes to JS files, then reload browser
});

/* Build Tasks */
/***************/

// Move HTML to Public
gulp.task('useref', function() {
  return gulp.src('app/*.html')
    .pipe(useref())
    .pipe(gulp.dest('public'))
});

// Concatenate and Minify JS
gulp.task('scripts', function() {
  return gulp.src('app/js/**/*.js')
    .pipe(sourcemaps.init())
    .pipe(concat('main.min.js'))
    .pipe(uglify())
    .pipe(sourcemaps.write('./maps'))
    .pipe(gulp.dest('public/js'))
});

// Concatenate and Minify CSS
gulp.task('cssnano', function() {
  return gulp.src('app/css/**/*.css')
    .pipe(sourcemaps.init())
    .pipe(concat('main.min.css'))
    .pipe(cssnano())
    .pipe(sourcemaps.write('./maps'))
    .pipe(gulp.dest('public/css'))
});

// Optimize Images
gulp.task('images', function() {
  return gulp.src('app/img/**/*.+(png|jpg|jpeg|gif|svg)')
    .pipe(cache(imagemin()))
    .pipe(gulp.dest('public/img'))
});

// Move Files In Resources/
gulp.task('resources', function() {
  return gulp.src('app/resources/**/*.+(pdf)')
    .pipe(gulp.dest('public/resources'))
});

// Clean Production Folder
gulp.task('clean:public', function() {
  return del.sync('public')
});

// Build Run Sequence
gulp.task('build', function (callback) {
  runSequence('clean:public', 'sass', 'useref', 'scripts', 'cssnano', 'images', 'resources',
    callback
  )
});

// Gulp Default Init
gulp.task('default', function(callback) {
  runSequence(['sass', 'serve', 'watch'],
    callback
  ) // Default Task + order of Tasks to run
});
