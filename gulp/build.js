/*jslint indent: 4, nomen: true, plusplus: true */
/*globals require, module */
(function () {

    'use strict';
    
    var // variables
        src = './src',
        dest = './dist/public',
        // requires
        path = require('path'),
        gulp = require('gulp'),
        runSequence = require('run-sequence');
    
    gulp.task('build:html', function (cb) {});
    
    gulp.task('build:sass', function (cb) {});
    
    gulp.task('build:js', function (cb) {});

    gulp.task('build', function (cb) {
        runSequence('build:sass', 'build:js', 'build:html', cb);
    });

}());
