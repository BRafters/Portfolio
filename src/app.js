const hbs = require("hbs");
const express = require("express");
const path = require("path");
const app = express();
const port = process.env.PORT || 3000;

// Specifying the path to the views directory
const publicPath = path.join(__dirname, "../public/");
const viewsPath = path.join(__dirname, "../templates/views");
const partialsPath = path.join(__dirname, "../templates/partials");

// Telling express which templating engine we are using - handlebars
app.set("view engine", "hbs");
app.set("views", viewsPath);

app.use(express.static(publicPath));

// Sending the partials path to hbs
hbs.registerPartials(partialsPath);

// Rendering the routes
app.get("", (req, res) => {
    res.render("index", {title: "Mel-Mac Yard Services"});
});

app.get("*", (req, res) => {
    res.render("404", {title: "404"});
});

// Setting up the port that the server will listen on
app.listen(port, () => {
    console.log(`Server started on port ${port}`);
});