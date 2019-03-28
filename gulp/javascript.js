const gulp = require('gulp');
const concat = require('gulp-concat');
const uglify = require('gulp-uglify');
const baseDir = 'src/js/';


gulp.src([
	baseDir + '/index.js', ])
.pipe(concat('index.min.js'))
.pipe(uglify())
.pipe(gulp.dest(baseDir));