const express = require('express');
    app = express();
    port = process.env.PORT || 8080;
    expressLayout = require('express-ejs-layouts');


    app.use(express.static(__dirname + '/public'));

    app.set('view engine', 'ejs');
    app.use(expressLayout);
    app.use(require('./app/routes'));

    app.listen(port, ()=> {
        console.log(`App is listening on https://localhost:${port}`);
    });