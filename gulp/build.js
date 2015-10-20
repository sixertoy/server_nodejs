/*jslint indent: 4, nomen: true, plusplus: true */
/*globals require, module */
(function () {

    'use strict';

    var // variables
        src = './src',
        dest = './dist/public',
        // requires
        del = require('del'),
        path = require('path'),
        gulp = require('gulp'),
        runSequence = require('run-sequence');

    gulp.task('build:html', function (cb) {
        del.sync([
            path.join(dest, '**/*.html'),
            path.join(dest, 'favicon.ico')
        ]);
        return gulp.src([
                path.join(dest, '**/*.html'),
                path.join(dest, 'favicon.ico')
            ])
            .pipe(path.join(dest));
    });

    gulp.task('build:sass', function (cb) {});

    gulp.task('build:js', function (cb) {});

    gulp.task('build', function (cb) {
        runSequence('build:sass', 'build:js', 'build:html', cb);
    });

}());
