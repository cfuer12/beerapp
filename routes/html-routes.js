const isAuthenticated = require("../config/middleware/isAuthenticated.js");
// Requiring path to so we can use relative routes to our HTML files
// const path = require("path");
// const { nextTick } = require("process");
// const authRoutes = require("./authRoutes");

const isAuth = (req, res, next) => {
  if (!req.isAuthenticated()) {
    return res.redirect(401, "/login");
  }
  next();
};

module.exports = app => {
  app.get("/", (req, res) => {
    // If the user already has an account send them to the members page
    // if (req.user) {
    //   res.redirect("/members");
    // }
    // res.sendFile(path.join(__dirname, "../views/age.handlebars"));
    res.render("age");
  });

  app.get("/login", (req, res) => {
    // If the user already has an account send them to the members page
    // if (req.user) {
    console.log("This is to2 login");
    res.render("login");
    // }
    // res.sendFile(path.join(__dirname, "/login.handlebars"));
  });

  app.get("/members", isAuthenticated, (req, res) => {
    console.log("getting the page");
    res.render("members", { name: req.user.name });
  });

  app.get("/signup", (req, res) => {
    console.log("getting page");
    res.render("signup");
  });

  app.get("/logout", isAuth, (req, res) => {
    res.render("logout", { name: req.user.name });
  });
};
