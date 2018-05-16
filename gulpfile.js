'use strict';

var gulp = require('gulp');
var sass = require('gulp-sass');

gulp.task('serve', ['sass'], function() {
  gulp.watch('sass/**/*.scss', ['sass']);
});

gulp.task('sass', function () {
  gulp.src('./sass/stylesheet.scss')
    .pipe(sass().on('error', sass.logError))
    .pipe(gulp.dest('./css'));
});

gulp.task('sass:watch', function () {
  gulp.watch('./sass/stylesheet.scss', ['sass']);
});

gulp.task('default', ['serve']);
gulp.task('build', ['sass-build']);