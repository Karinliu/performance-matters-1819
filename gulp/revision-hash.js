const gulp = require('gulp');
const revReplace = require('gulp-rev-replace');

const baseDir = 'src/optimised/';
const manifestFilename = 'cache/rev-manifest.json';

gulp.src(baseDir + '**/.ejs')    
	.pipe(revReplace({        
		manifest: gulp.src(baseDir + manifestFilename)    
	}))    
	.pipe(gulp.dest(baseDir));