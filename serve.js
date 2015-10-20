/*jslint indent: 4, nomen: true */
/*global require, __dirname, console */
(function () {

    'use strict';

    require('dotenv').load();

    var // variables
        server, paths,
        port = process.env.PORT || 9080,
        debug = process.env.DEBUG || false,
        livereload_port = process.env.LIVERELOAD_PORT || false,
        // requires
        path = require('path'),
        express = require('express'),
        livereload = require('express-livereload');
    //
    // app paths
    paths = {
        www: path.join(__dirname, 'dist', 'public')
    };
    //
    // express
    server = express();
    //
    // livereload
    if (livereload_port) {
        livereload(server, {
            watchDir: paths.www,
            port: livereload_port,
            exclusions: ['git/', '.svn/'],
            exts: ['html', 'css', 'js', 'png', 'gif', 'jpg', 'svg', 'woff', 'eot', 'ttf', 'woff2']
        });
    }
    //
    // le serveur express sert des ressouces statiques
    // pour l'app AngularJS/Front
    server.use('/', express.static(paths.www));

    server.listen(port, function () {
        if (debug) {
            console.log('Application now running under http://localhost:%d\n', port);
        }
        if (debug && livereload_port) {
            console.log('Livereload is running on port %d\n', livereload_port);
        }
    });

}());
