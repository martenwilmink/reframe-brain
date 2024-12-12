const
  gulp = require('gulp'),
  minify = require('gulp-clean-css'),
  uglify = require('gulp-uglify'),
  rename = require('gulp-rename')
;

// Copy NPM assets
gulp.task('copy', function (done) {
  gulp.src('./node_modules/leaflet-extra-markers/dist/css/*.css')
    .pipe(gulp.dest('./assets/components/reframebrain/css'))
  ;
  gulp.src('./node_modules/leaflet-extra-markers/dist/js/*.js')
    .pipe(gulp.dest('./assets/components/reframebrain/js'))
  ;
  gulp.src('./node_modules/leaflet-extra-markers/dist/img/*.png', {encoding: false})
    .pipe(gulp.dest('./assets/components/reframebrain/img'))
  ;
  gulp.src('./node_modules/leaflet-active-area/src/leaflet.activearea.js')
    .pipe(gulp.dest('./assets/components/reframebrain/js'))
  ;
  done();
});

// Minify CSS/JS elements
gulp.task('minify', function (done) {
  gulp.src(['*.css','!*.min.css'], {cwd: './assets/components/reframebrain/css'})
    .pipe(minify({inline: ['local', 'remote', '!fonts.googleapis.com']}))
    .pipe(rename({suffix: '.min'}))
    .pipe(gulp.dest('./assets/components/reframebrain/css'))
  ;
  gulp.src(['*.js','!*.min.js'], {cwd: './assets/components/reframebrain/js'})
    .pipe(uglify())
    .pipe(rename({suffix: '.min'}))
    .pipe(gulp.dest('./assets/components/reframebrain/js'))
  ;
  done();
});