//miserver.js

//módulos
var express = require('express');
var app = express();
var _=require('lodash');

//script para generar la data
var cdata=require('./script.js');

//datos
var cantidad=_.random(5,10);
var usuarios=_.times(cantidad,cdata.data);

//metodos
app.get('/', function(req, res) {
  res.send('Mi primer servidor!');
});

app.get('/post',function(req,res){
res.send('hola mundo');
});

app.get('/data',function(req,res){
res.json(usuarios);

});
app.get('/posts',function(req,res){

res.json(usuarios);
});


//servidor
var server = app.listen(3000, function () {
  var host = server.address().address;
  var port = server.address().port;

  console.log('servidor escuchando en http://%s:%s', host, port);
});
                          
