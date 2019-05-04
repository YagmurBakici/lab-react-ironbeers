const express = require("express");
const cors = require("cors");
const bodyParser = require("body-parser");

// // ERROR HANDLING
// app.use(function handleError(err, req, res, next) {
//   console.error("handle error");
//   console.error(err.stack);
//   res.status(500).send("Something broke!");
// });

// // 404 CUSTOM MIDDLEWARE => redirects any 404 to one error page
// // !!! warning ===> must be placed AFTER every app routes !
// app.use(function handle404(req, res) {
//   res.status(404).render("page_not_found");
// });
