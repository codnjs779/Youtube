var autoprefixer = require("autoprefixer");
var postcss = require("gulp-postcss");
var gulp = require("gulp");
gulp.task("serve", ["css"], function () {
    gulp.watch("./css/*.css", ["css"]);
});
gulp.task("css", function () {
    var plugin = [autoprefixer()];
    return gulp.src("./css/*.css").pipe(postcss(plugin)).pipe(gulp.dest("./dest"));
});
gulp.task("default", ["serve"]);
