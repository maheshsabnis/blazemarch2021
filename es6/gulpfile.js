const gulp = require('gulp');
const gulpconcat = require('gulp-concat');

const babel = require('gulp-babel');

function concat(){
        return gulp.src('./modules/*.js') // read all .js files from modules folder
                .pipe(gulpconcat("all.js")) // concat them into all.js 
                .pipe(gulp.dest("./build")); // copy the all.js into build folder
}

function transpile(){
        return gulp.src('./es6modules/*.js')
                .pipe(babel({
                    presets:['@babel/env']
                })).pipe(gulp.dest('./build/es6modulesfile'));
}
// gulp tasks those will be executed from  comamnd line
// e.g. gulp concat
// e.g. gulp transpile
exports.concat = concat;
exports.transpile = transpile;