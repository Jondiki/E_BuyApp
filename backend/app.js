const express = require('express');

const app = express();

app.use((req, res, next) => 
{
    console.info("Bien recu")
    next();
})
app.use((req, res, next) => 
{
    res.status(201)
    next();
})
app.use((req, res, next) => 
{
    res.json({message :'votre message a été bien réçu!'})
  
})

module.exports = app;