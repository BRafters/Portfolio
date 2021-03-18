const express = require("express");
const hbs = require("hbs");
const path = require("path");

// Set up the port using process.env
const port = process.env.PORT | 3000;

// Invoke express
const app = express();

// Register the paths to the static directories, views, and partials
const publicPath = path.join(__dirname, "../public/");
const viewsPath = path.join(__dirname, "../template/views/");
const partialsPath = path.join(__dirname, "../template/partials");

// Set the view engine to hbs
app.set("view engine", "hbs");

// Pointing express to the main directories we will be using
app.set("views", viewsPath);

// Setting up the static directory to serve
app.use(express.static(publicPath));

// Register the partials folder with handlebars
hbs.registerPartials(partialsPath);

// All of the routes in this project are here
/// Index page
app.get("", (req, res) => {
    // Render the index handlebars page using the res variable
    res.render("index",{
        title: "Brennan Rafters",
        tabTitle: "Brennan Rafters E-Portfolio",
        cssFile: "css/indexStyles.css"
    });
});

/// My Works Page
app.get("/myworks", (req, res) => {
    res.render("myworks", {
        tabTitle: "My Works"
    });
});

/// Resume Page
app.get("/resume", (req, res) => {
    res.render("resume", {
        tabTitle: "My Resume"
    });
});

/// Contact Page
app.get("/contact", (req, res) => {
    res.render("contact", {
        tabTitle: "Contact Me"
    });
});

/// 404 Page for when the user puts a totally different route in the search bar
/// '*' for anything in the url bar. Used at the end of all other routes meaning that URL didn't match with any of the above
app.get("*", (req, res) => {
    res.render("404", {
        tabTitle: "404: Page Not Found",
        title: "Could not find the page you were looking for."
    });
});

// Set up listener so it can use port on localhost
app.listen(port, () => {
    console.log(`Server started on port ${port}`);
});