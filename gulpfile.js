//var gulp = require('gulp');
var sass = require('gulp-sass');
console.log(sass.compiler.info);
sass = require('node-sass');


var scss_content = "$primary-color: #333; body { color: $primary-color;}"

var result = sass.renderSync({
  data: scss_content
});
console.log(result.css.toString());
