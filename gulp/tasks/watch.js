var gulp   = require('gulp');
var config = require('../config');

gulp.task('watch', 
    ['copy:watch',
    
    'sprite:svg:watch',
    'list-pages:watch',
    'js:watch',
    'sass:watch'
]);
