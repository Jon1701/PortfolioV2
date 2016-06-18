// Import Gulp modules.
var gulp = require("gulp");
var sass = require("gulp-sass");
var webserver = require('gulp-webserver');

// Paths.
var srcPath = "./source/";
var destPath = "./build/";
var modulesPath = "./node_modules/";

// Move HTML.
gulp.task("html", function() {
  gulp.src(srcPath + "*.html")
    .pipe(gulp.dest(destPath));
});

// Move images.
gulp.task("images", function() {
  gulp.src(srcPath + "img/**/*")
    .pipe(gulp.dest(destPath + "images/"));
});

// Move JavaScript.
gulp.task("javascript", function() {
  gulp.src(srcPath + "js/*.js")
    .pipe(gulp.dest(destPath + "js"));
});

// Move components.
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

  // Mustache.js
  gulp.src(modulesPath + "mustache/mustache.js")
    .pipe(gulp.dest(destPath + "components/mustache/"));

});

// Compile and move .scss.
gulp.task("scss", function() {
  gulp.src(srcPath + "scss/*.scss")
    .pipe(sass())
    .pipe(gulp.dest(destPath + "css"));
});

// Fonts.
gulp.task("fonts", function() {
  gulp.src(srcPath + "fonts/**/*")
    .pipe(gulp.dest(destPath + "fonts/"));
});

// Move templates.
/*
gulp.task("templates", function() {
  gulp.src(srcPath + "templates/*")
    .pipe(gulp.dest(destPath + "js/templates/"));
});
*/

// Webserver.
gulp.task('webserver', function() {
  gulp.src("./build")
    .pipe(webserver({
      livereload: true,
      directoryListing: false,
      open: true
    }));
});

// Watch task
gulp.task("watch", function() {
  gulp.watch(srcPath + "*.html", ["html"]);
  gulp.watch(srcPath + "img/backgrounds/*", ["images"]);
  gulp.watch(srcPath + "js/*.js", ["javascript"]);
  gulp.watch(srcPath + "templates/*.js", ["templates"]);
  gulp.watch(srcPath + "scss/_*.scss", ["scss"]);
  gulp.watch(srcPath + "scss/*.scss", ["scss"]);
});


// Default task.
gulp.task("default", ["watch", "html", "images", "scss", "javascript" ,"components", "fonts", /*"templates",*/ "webserver"]);
