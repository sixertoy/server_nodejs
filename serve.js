/*jslint indent: 4, nomen: true */
/*global require, __dirname, console */
(function () {

    'use strict';

    var // variables
        server, paths,
        port = 9080,
        livereload_port = 1337,
        // requires
        path = require('path'),
        express = require('express'),
        livereload = require('express-livereload');
    //
    // app paths
    paths = {
        www: path.join(__dirname, 'build', 'public', 'html')
    };
    //
    // express
    server = express();
    //
    // livereload
    livereload(server, {
        port: livereload_port,
        watchDir: paths.www,
        exclusions: ['git/', '.svn/'],
        exts: ['html', 'css', 'js', 'png', 'gif', 'jpg', 'svg']
    });
    //
    // le serveur express sert des ressouces statiques
    // pour l'app AngularJS/Front
    server.use('/', express.static(paths.www));

    server.listen(port, function () {
        console.log('Application now running under http://localhost:%d\n', port);
        console.log('Livereload is running on port %d\n', livereload_port);
    });

}());
