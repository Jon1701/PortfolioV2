// Import Gulp modules.
var gulp = require("gulp");
var sass = require("gulp-sass");
var webserver = require('gulp-webserver');
var jade = require("gulp-jade");

// Paths.
var srcPath = "./source/";
var destPath = "./build/";
var modulesPath = "./node_modules/";

// Jade.
gulp.task("jade", function() {

  var YOUR_LOCALS = {};

  gulp.src(srcPath + "jade/**/*.jade")
    .pipe(jade())
    .pipe(gulp.dest(destPath));

});

// Move HTML.
gulp.task("html", function() {
  gulp.src(srcPath + "*.html")
    .pipe(gulp.dest(destPath));
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

});

// Compile and move .scss.
gulp.task("scss", function() {
  gulp.src(srcPath + "scss/*.scss")
    .pipe(sass())
    .pipe(gulp.dest(destPath + "css"));
});

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
  gulp.watch(srcPath + "jade/**/*.jade", ["jade"]);
  gulp.watch(srcPath + "js/*.js", ["javascript"]);
  gulp.watch(srcPath + "scss/_*.scss", ["scss"]);
  gulp.watch(srcPath + "scss/*.scss", ["scss"]);
});


// Default task.
gulp.task("default", ["watch", "jade", "html", "scss", "javascript" ,"components", "webserver"]);
