const fs = require('fs');
const path = require('path');
const merge = require('merge-stream');
const gulp = require('gulp');
const concat = require('gulp-concat');
const rename = require('gulp-rename');
const uglify = require('gulp-uglify');

const scriptsPath = './';

function getFolders(dir) {
  return fs.readdirSync(dir).filter(file => {
    return fs.statSync(path.join(dir, file)).isDirectory();
  });
}

gulp.task('compress', () => {
  const folders = getFolders(scriptsPath);
  const tasks = folders.map(folder => {
    return gulp
      .src(path.join(scriptsPath, folder, '/*.js'))
      .pipe(concat(folder + '.js'))
      .pipe(gulp.dest(scriptsPath))
      .pipe(uglify())
      .pipe(rename(folder + '.min.js'))
      .pipe(gulp.dest(scriptsPath));
  });
  return merge(tasks);
});
