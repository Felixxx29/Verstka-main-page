const gulp = require('gulp');
const sourcemaps = require('gulp-sourcemaps');

gulp.task('sass-compile',function () {
    return gulp.src('./styles/**/*.scss')
        .pipe(sourcemaps.init)
        .pipe(sourcemaps.write('./'))
})