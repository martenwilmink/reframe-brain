import gulp, {series} from 'gulp';
import less from 'gulp-less';
import autoprefixer from 'gulp-autoprefixer';
import concat from 'gulp-concat';
import cleanCSS from 'gulp-clean-css';
import uglify from 'gulp-uglify';
import rename from 'gulp-rename';
import {watch} from "gulp";

// Build custom CSS/JS elements
gulp.task('build', function (done) {
  gulp.src('./assets/components/reframebrain/css/contentblocks.less')
      .pipe(less())
      .pipe(autoprefixer())
      .pipe(concat('contentblocks.css'))
      .pipe(gulp.dest('./assets/components/reframebrain/css/'))
  ;
  done();
});

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
    .pipe(cleanCSS({inline: ['local', 'remote', '!fonts.googleapis.com']}))
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

gulp.task('watch', function (cb) {
  watch('./assets/components/reframebrain/css/*.less', series('build','copy','minify'));
});

gulp.task('build', gulp.series('build', 'copy', 'minify'));
gulp.task('default', gulp.series('watch'));