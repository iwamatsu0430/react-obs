var gulp      = require('gulp');
var babel     = require('gulp-babel');
var uglify    = require('gulp-uglify');
var rename    = require('gulp-rename');
var react     = require('gulp-react');
var server    = require('gulp-webserver')
var sequence  = require('run-sequence')

gulp.task('compile-lib', function() {
  gulp.src('src/*.js')
    .pipe(babel({
      presets: ['es2015']
    }))
    .pipe(gulp.dest('bin'))
    .pipe(uglify())
    .pipe(rename({
      extname: '.min.js'
    }))
    .pipe(gulp.dest('bin'));
});

gulp.task('copy-libs', function() {
  gulp.src(['bower_components/react/react.js', 'bower_components/react/react-dom.js', 'bin/react-obs.js'])
    .pipe(gulp.dest('sample/assets/javascripts'));
})

gulp.task('compile-sample', function () {
  gulp.src('sample/jsx/*.jsx')
    .pipe(react({
      harmony: true
    }))
    .pipe(gulp.dest('sample/assets/javascripts'));
});

gulp.task('server', function() {
  gulp.src('sample/')
    .pipe(server({
      open: true
    }));
});

gulp.task('watch', function() {
  gulp.watch(['./sample/jsx/*.jsx', './sample/jsx/**/*.jsx'], ['compile-sample']);
});

gulp.task('default', function() {
  sequence(
    'copy-libs',
    'compile-sample',
    'watch',
    'server'
  );
});
