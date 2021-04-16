const gulp = require('gulp');
const sass = require('gulp-sass');
const browserSync =  require('browser-sync');

function style(){
    return gulp.src('./scss/**/*.scss') // read all scss files 
       .pipe(sass()) // use sass tast
       .pipe(gulp.dest('./css')); // copy the output file into css
}

function watch(){
    // start the browser synchroization to watch 
    // all changes in
    // scss
    // html

    browserSync.init({
        server:{
            baseDir:'./' // synchronize form the root
        }
    });
    // watch changes
    // if scss file is changes from 'scss' folder the execute the style method
    gulp.watch('./scss/**/*.scss', style);
    // watch changes in html file, reload the browser
    gulp.watch('./*.html').on('change', browserSync.reload);
    // send the new compiled css to the browser
    gulp.watch('./scss/**/*.scss', browserSync.reload)

}


// export the task
exports.style = style;
exports.watch = watch;