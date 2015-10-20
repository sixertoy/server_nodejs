/*jslint indent: 4, nomen: true, plusplus: true */
/*globals require, module */
(function () {

    'use strict';
    
    var preen = require('preen'),
        gulp = require('gulp');

    gulp.task('preen', function (cb) {
        preen.preen({}, cb);
    });

}());
