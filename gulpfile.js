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

    require('gulp/build');
    require('gulp/gulp-preen');

    var gulp = require('gulp');

    gulp.task('default', ['preen', 'build']);

}());
