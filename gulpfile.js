"use strict";

////////////////////////////////////////////////////////////////////////////////
// Gulp modules.
////////////////////////////////////////////////////////////////////////////////
var gulp = require("gulp");
var sass = require("gulp-sass");
var webserver = require('gulp-webserver');

////////////////////////////////////////////////////////////////////////////////
// Paths
////////////////////////////////////////////////////////////////////////////////
var srcPath = "./source/";
var destPath = "./build/";
var modulesPath = "./node_modules/";

////////////////////////////////////////////////////////////////////////////////
// Tasks
////////////////////////////////////////////////////////////////////////////////

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
    .pipe(sass().on("error", sass.logError))
    .pipe(gulp.dest(destPath + "stylesheets/"));
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
    .pipe(gulp.dest(destPath + "components/jquery/"));

  // Bootstrap.
  gulp.src(modulesPath + "bootstrap/dist/**/*")
    .pipe(gulp.dest(destPath + "components/bootstrap/"));

  // Font-Awesome
  gulp.src(modulesPath + "font-awesome/css/*")
    .pipe(gulp.dest(destPath + "components/font-awesome/css/"));
  gulp.src(modulesPath + "font-awesome/fonts/*")
    .pipe(gulp.dest(destPath + "components/font-awesome/fonts/"));

  // Font-mfizz
  gulp.src(srcPath + "components/font-mfizz-2.3.0/**/*")
    .pipe(gulp.dest(destPath + "components/font-mfizz/"));

  // Mustache.js
  gulp.src(modulesPath + "mustache/mustache.js")
    .pipe(gulp.dest(destPath + "components/mustache/"));

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
  gulp.watch(srcPath + "*.html", ["html"]); // HTML files.
});

////////////////////////////////////////////////////////////////////////////////
// Default Task.
////////////////////////////////////////////////////////////////////////////////
gulp.task("default", ["fonts", "images", "javascript", "portfolio", "stylesheets", "html", "components", "watch", "webserver"]);
