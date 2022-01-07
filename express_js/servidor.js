const express = require('express');
const app = express();

app.get('/',inicio);
app.get('/cursos', cursos);

function inicio(req, res){
  res.send("Este es el home");
}

function cursos(req, res){
  res.send("Estos son los cursos");
}

app.listen(8989);