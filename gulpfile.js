/**
 *
 * Install Locals Dev
 * npm install gulp gulp-jshint jshint-stylish --save-dev
 *
 */
/*jslint indent: 4, nomen: true, plusplus: true */
/*globals require, module */
(function () {

    'use strict';

    var // variables
        src = './src',
        dest = './build',
        // requires
        gulp = require('gulp'),
        path = require('path'),
        sass = require('gulp-sass'),
        batch = require('gulp-batch'),
        watch = require('gulp-watch'),
        rename = require('gulp-rename'),
        plumber = require('gulp-plumber'),
        mustacher = require('gulp-mustacher'),
        sourcemaps = require('gulp-sourcemaps');

    /**
     *
     * HTML
     *
     */
    gulp.task('html', function () {
        return gulp.src(path.join(src, 'html', '*.tpl'))
            .pipe(mustacher({
                partials: {
                    src: path.join(src, 'partials')
                }
            }))
            .pipe(gulp.dest(path.join(dest)));
    });

    gulp.task('html:watch', function () {
        watch([path.join(src, 'html', '*.tpl'), path.join(src, 'html', 'partials', '**/*.hbs')], batch(function (events, done) {
            gulp.start('html', done);
        }));
    });

    /**
     *
     * CSS
     *
     */
    gulp.task('sass', function () {
        return gulp.src(path.join(src, 'html', 'scss', '**/*.scss'))
            .pipe(plumber())
            .pipe(sourcemaps.init())
            .pipe(sass({
                outputStyle: 'compressed'
            }))
            .pipe(sourcemaps.write())
            .pipe(plumber.stop())
            .pipe(rename({
                suffix: '.min'
            }))
            .pipe(gulp.dest(path.join(dest, 'html', 'css')));
    });

    gulp.task('sass:watch', function () {
        watch(path.join(src, 'html', 'scss', '**/*.scss'), batch(function (events, done) {
            gulp.start('sass', done);
        }));
    });

    gulp.task('default', ['sass', 'html']);

}());
