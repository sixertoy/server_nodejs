/* global require, __dirname, console */
(function () {

    'use strict';

    require('dotenv').load();

    var // variables
        server, paths,
        port = process.env.PORT || 8080,
        debug = process.env.DEBUG || false,
        livereload_port = process.env.LIVERELOAD_PORT || false,
        // requires
        path = require('path'),
        express = require('express'),
        bodyParser = require('body-parser'),
        compression = require('compression'),
        livereload = require('express-livereload');
    //
    // app paths
    paths = {
        www: path.join(__dirname)
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
            exts: ['pbf', 'html', 'css', 'js', 'png', 'gif', 'jpg', 'svg', 'woff', 'eot', 'ttf', 'woff2']
        });
    }
    //
    // gzip
    server.use(compression());
    // for parsing application/json
    server.use(bodyParser.json());
    // for parsing application/x-www-form-urlencoded
    server.use(bodyParser.urlencoded({
        extended: true
    }));
    //
    // le serveur express sert des ressouces statiques
    // pour l'app AngularJS/Front
    server.use('/', express.static(paths.www));

    server.listen(port, function () {
        var msg = 'Application now running under http://localhost:%d';
        console.log(msg, port);
        if (livereload_port) {
            msg = 'Livereload is running on port %d'
            console.log(msg, livereload_port);
        }
    });

}());
