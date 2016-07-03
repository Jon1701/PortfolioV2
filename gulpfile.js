"use strict";

////////////////////////////////////////////////////////////////////////////////
// Gulp modules.
////////////////////////////////////////////////////////////////////////////////
var gulp = require("gulp");
var sass = require("gulp-sass");
var webserver = require("gulp-webserver");
var uglify = require("gulp-uglify");

////////////////////////////////////////////////////////////////////////////////
// Paths
////////////////////////////////////////////////////////////////////////////////
var srcPath = "./source/";
var destPath = "./build/";
var modulesPath = "./node_modules/";

////////////////////////////////////////////////////////////////////////////////
// Tasks
////////////////////////////////////////////////////////////////////////////////

// Move CNAME.
gulp.task("cname", function() {
  gulp.src("assets/CNAME")
    .pipe(gulp.dest(destPath));
})

// Move fonts.
gulp.task("fonts", function() {
  gulp.src(srcPath + "fonts/**/*")
    .pipe(gulp.dest(destPath + "fonts/"));
})

// Move images.
gulp.task("images", function() {
  gulp.src(srcPath + "images/**/*")
    .pipe(gulp.dest(destPath + "images/"));
});

// Move JavaScript.
gulp.task("javascript", function() {
  gulp.src(srcPath + "javascript/**/*")
    .pipe(uglify())
    .pipe(gulp.dest(destPath + "javascript/"));
});

// Move portfolio.
gulp.task("portfolio", function() {
  gulp.src(srcPath + "portfolio/**/*")
    .pipe(gulp.dest(destPath + "portfolio/"));
});

// Compile and move stylesheets.
gulp.task("stylesheets", function() {
  gulp.src(srcPath + "stylesheets/**/*")
    .pipe(sass({outputStyle: 'compressed'}).on("error", sass.logError))
    .pipe(gulp.dest(destPath + "stylesheets/"));
});

gulp.task("templates", function() {
  gulp.src(srcPath + "templates/**/*")
    .pipe(uglify())
    .pipe(gulp.dest(destPath + "templates/"));
});

// Move HTML files.
gulp.task("html", function() {
  gulp.src(srcPath + "*.html")
    .pipe(gulp.dest(destPath));
});

// Move Components.
gulp.task("components", function() {

  // jQuery.
  gulp.src(modulesPath + "jquery/dist/jquery.js")
    .pipe(uglify())
    .pipe(gulp.dest(destPath + "components/jquery/"));

  // Bootstrap.
  gulp.src(srcPath + "components/bootstrap/css/bootstrap.css")
    .pipe(sass({outputStyle: 'compressed'}).on("error", sass.logError))
    .pipe(gulp.dest(destPath + "components/bootstrap/css/"));

  // Font-Awesome
  gulp.src(modulesPath + "font-awesome/css/font-awesome.css")
    .pipe(sass({outputStyle: 'compressed'}).on("error", sass.logError))
    .pipe(gulp.dest(destPath + "components/font-awesome/css/"));
  gulp.src(modulesPath + "font-awesome/fonts/*")
    .pipe(gulp.dest(destPath + "components/font-awesome/fonts/"));

  // Mustache.js
  gulp.src(modulesPath + "mustache/mustache.js")
    .pipe(uglify())
    .pipe(gulp.dest(destPath + "components/mustache/"));

  // Dev Icons
  gulp.src(modulesPath + "devicons/css/devicons.css")
    .pipe(sass({outputStyle: 'compressed'}).on("error", sass.logError))
    .pipe(gulp.dest(destPath + "components/devicons/css/"));
    gulp.src(modulesPath + "devicons/fonts/*")
      .pipe(gulp.dest(destPath + "components/devicons/fonts/"));
});

// Webserver.
gulp.task("webserver", function() {
  gulp.src(destPath)
    .pipe(webserver({
      fallback: "index.html",
      livereload: true,
      directoryListing: false,
      open: true
    }));
});

////////////////////////////////////////////////////////////////////////////////
// Watch Tasks.
////////////////////////////////////////////////////////////////////////////////

// Watch task
gulp.task("watch", function() {
  gulp.watch(srcPath + "fonts/**/*", ["fonts"]); // Fonts.
  gulp.watch(srcPath + "images/**/*", ["images"]); // Images.
  gulp.watch(srcPath + "javascript/**/*", ["javascript"]); // JavaScript.
  gulp.watch(srcPath + "portfolio/**/*", ["portfolio"]); // JavaScript.
  gulp.watch(srcPath + "stylesheets/**/*.scss", ["stylesheets"]); // SASS Main.
  gulp.watch(srcPath + "stylesheets/**/_*.scss", ["stylesheets"]); // SASS Partials.
  gulp.watch(srcPath + "templates/**/*", ["templates"]); // SASS Partials.
  gulp.watch(srcPath + "*.html", ["html"]); // HTML files.
});

////////////////////////////////////////////////////////////////////////////////
// Default Task.
////////////////////////////////////////////////////////////////////////////////
gulp.task("default", ["cname", "fonts", "images", "javascript", "portfolio", "stylesheets", "templates", "html", "components", "watch", "webserver"]);
