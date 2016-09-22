/* global require, __dirname, process */
(function () {

    'use strict';

    require('dotenv').load();

    var server, paths,
        port = process.env.PORT || 8080,
        livereloadPort = process.env.LIVERELOAD_PORT || false,
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
    if (livereloadPort) {
        livereload(server, {
            watchDir: paths.www,
            port: livereloadPort,
            exclusions: [
                'git/',
                '.svn/',
                'node_modules/',
                'bower_components/'
            ],
            exts: [
                'js',
                'css',
                'eot',
                'gif',
                'jpg',
                'pbf',
                'png',
                'svg',
                'ttf',
                'html',
                'woff',
                'woff2',
                'geojson'
            ]
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
        var msg = 'Application now running under http://localhost: ' + port + '\n';
        process.stdout.write(msg);
        if (livereloadPort) {
            msg = 'Livereload is running on port ' + livereloadPort + '\n';
            process.stdout.write(msg);
        }
    });

}());
