var gulp        = require('gulp'),
    gutil       = require('gulp-util'),
    styl        = require('gulp-styl'),
    inline      = require('rework-inline'),
    csso        = require('gulp-csso'),
    uglify      = require('gulp-uglify'),
    jade        = require('gulp-jade'),
    coffee      = require('gulp-coffee'),
    concat      = require('gulp-concat'),
    livereload  = require('gulp-livereload'), // Livereload plugin needed: https://chrome.google.com/webstore/detail/livereload/jnihajbhpnppcggbcgedagnkighmdlei
    tinylr      = require('tiny-lr'),
    express     = require('express'),
    app         = express(),
    marked      = require('marked'), // For :markdown filter in jade
    path        = require('path'),
    server      = tinylr(),
    es          = require('event-stream');
var jeet        = require('jeet');
var rupture     = require('rupture');



// --- Basic Tasks ---
gulp.task('css', function() {
  var options = {
        use: [ jeet(), rupture()]
    };

  return gulp.src('app/css/*.styl').
    pipe( styl(options) ).
    pipe( csso() ).
    pipe( concat('style.min.css')).
    pipe( gulp.dest('public/css/') ).
    pipe( livereload( server ));
});

gulp.task('js', function() {
  return es.merge(
        gulp.src('app/scripts/*.coffee').
          pipe(coffee()),
        gulp.src('app/scripts/*.js')).
    pipe( uglify() ).
    pipe( concat('all.min.js')).
    pipe( gulp.dest('public/js/')).
    pipe( livereload( server ));
});

gulp.task('templates', function() {
  return gulp.src('app/*.jade').
    pipe(jade({
      pretty: true
    })).
    pipe(gulp.dest('public/')).
    pipe( livereload( server ));
});

gulp.task('express', function() {
  app.use(express.static(path.resolve('./public')));
  app.listen(1337);
  gutil.log('Listening on port: 1337');
});

gulp.task('watch', function () {
  server.listen(35729, function (err) {
    if (err) {
      return console.log(err);
    }

    gulp.watch('app/css/*.styl',['css']);

    gulp.watch('app/scripts/*.js',['js']);

    gulp.watch('app/scripts/*.coffee',['js']);

    gulp.watch('app/*.jade',['templates']);

  });
});

// Default Task
gulp.task('default', ['js','css','templates']);
