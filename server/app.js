const connection = require("./models");
const express = require("express");
const expressHandlebars = require("express-handlebars");
const path = require("path");
const bodyParser = require("body-parser");
const app = express();

app.use(bodyParser.urlencoded({ 'extended': 'false' }));

app.get("/", (req, res) => {
    res.send('<h2>Hello World from Rajesh</h2>');
});

app.listen ("3000", () =>
{
    console.log ("Server started");
} );