require('dotenv').config()
const express = require('express');
const bodyParser = require('body-parser');
const massive = require('massive');
const products_controller = require('./products_controller')
const app = express();
const {SERVER_PORT, CONNECTION_STRING}=process.env
app.use( bodyParser.json() );
massive(CONNECTION_STRING).then ((db) =>{
    app.set('db', db)
})

app.post( '/api/product', products_controller.create );
app.get( '/api/products', products_controller.getAll );
app.get( '/api/product/:id', products_controller.getOne );
app.put( '/api/product/:id', products_controller.update );
app.delete( '/api/product/:id', products_controller.delete );


app.listen( SERVER_PORT, () => { console.log(`Server listening on port ${SERVER_PORT}.`); } );



