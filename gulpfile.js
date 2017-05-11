var gulp = require('gulp');
var less = require('gulp-less');
var browserSync = require('browser-sync').create();
var watch = require('gulp-watch');
var plumber = require('gulp-plumber');

gulp.task('less', function() {
  return gulp.src('less/main.less')
    .pipe(plumber())
    .pipe(less())
    .pipe(gulp.dest('css'))
    .pipe(browserSync.reload({
      stream: true
    }));
});

gulp.task('browser-sync', function() {
  browserSync.init({
    server: {
      baseDir: './'
    }//,
    //browser: 'google-chrome',
    //notify: true
  });
});

gulp.task('default', ['less', 'browser-sync'], function() {
  gulp.watch('less/**/*.less', ['less', browserSync.reload])
  gulp.watch('*.html', browserSync.reload)
});