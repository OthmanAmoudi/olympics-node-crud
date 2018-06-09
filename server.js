import { Mongoose } from 'mongoose';

const express = require('express');
    app = express();
    port = process.env.PORT || 8080;
    expressLayout = require('express-ejs-layouts');
    mongoose = require('mongoose');

    app.use(express.static(__dirname + '/public'));

    app.set('view engine', 'ejs');
    app.use(expressLayout);

    // Database
    mongoose.connect('mongodb://Othman:987963a@ds147450.mlab.com:47450/nodescotch');

    app.use(require('./app/routes'));

    app.listen(port, ()=> {
        console.log(`App is listening on https://localhost:${port}`);
    });