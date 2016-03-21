var gulp = require('gulp');
var watch = require('gulp-watch');
var sass = require('gulp-sass');
var ts = require('gulp-typescript');
var clean = require('gulp-clean');

var libs = [
      "es6-shim/es6-shim.min.js",
      "systemjs/dist/system-polyfills.js",
      "angular2/es6/dev/src/testing/shims_for_IE.js",
      
      "angular2/bundles/angular2-polyfills.js",
      "systemjs/dist/system.src.js",
      "rxjs/bundles/Rx.js",
      "angular2/bundles/angular2.dev.js",
      
      "angular2/bundles/router.dev.js",

      "es6-shim/es6-shim.map",
      "systemjs/dist/system-polyfills.js.map"
];


gulp.task('clean', function() {
  return gulp.src('./.compiled/', {read: false})
    .pipe(clean());
});

gulp.task('prep', function() {
  require('fs').writeFileSync('./.compiled/www/dummy.txt', 'just a dummy');
});


gulp.task('sass', function () {
  return gulp.src('./www/**/*.scss')
    .pipe(sass().on('error', sass.logError))
    .pipe(gulp.dest('./.compiled/www'));
});
gulp.task('sass:watch', function () {
  gulp.watch('./www/**/*.scss', ['sass']);
});
 
 
gulp.task('ts', function () {
  var tsProject = ts.createProject('tsconfig.json');
  return tsProject.src()
    .pipe(ts(tsProject))
    .pipe(gulp.dest('.compiled/'));
});
gulp.task('ts:watch', function () {
  gulp.watch('./www/**/*.ts', ['ts']);
});


gulp.task('static', function () {
  return gulp.src('./www/**/*.{html,js,json,png}')
    .pipe(gulp.dest('./.compiled/www'));
});
gulp.task('static:watch', function () {
  gulp.watch('./www/**/*.{html,js,json,png}', ['static']);
});


gulp.task('libs', function() {
  return gulp.src(libs, { cwd : 'node_modules/**' })
    .pipe(gulp.dest('./.compiled/www/libs'))
});
