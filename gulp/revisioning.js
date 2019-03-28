const gulp = require('gulp');
const rev = require('gulp-rev');
const baseDir = 'src/';

const inputDir = 'src/optimised';
const outputDir = 'cache';
const manifestFilename = 'rev-manifest.json ';

gulp.src([baseDir + '**/*.{css,js}'])
    .pipe(rev())
    .pipe(gulp.dest(inputDir))
    .pipe(rev.manifest(manifestFilename))
    .pipe(gulp.dest(outputDir));