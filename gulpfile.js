const gulp = require('gulp');
//html
var htmlmin = require('gulp-htmlmin');
//js
var uglify = require('gulp-uglify');
//服务器
var connect = require('gulp-connect');
//ES6=>ES5
var babel = require('gulp-babel');
//css
var cssmin = require('gulp-cssmin');
var rename = require('gulp-rename');
//图片
var imgmin = require('gulp-imagemin');

//压缩图片
gulp.task('imgmin',function(){
	gulp.src('src/img/**/*').pipe(imgmin()).pipe(gulp.dest('dist/img'))
	.pipe(connect.reload());
})
//ES6=>ES5,压缩js
gulp.task('uglify',function(){
	gulp.src('src/js/*.js')
	.pipe(babel({
		presets:['@babel/env']
	}))
	.pipe(uglify())
	.pipe(gulp.dest('dist/js'))
	.pipe(connect.reload());
})
//压缩css
gulp.task('cssmin',function(){
	gulp.src('src/css/*.css')
    .pipe(cssmin())
    .pipe(rename({suffix: '.min'}))
    .pipe(gulp.dest('dist/css'))
    .pipe(connect.reload());
})
//压缩html
gulp.task('htmlmin',function(){
	var options = {
		collapseWhitespace:true,
    	removeComments:true,
    	minifyJS:true,
    	minifyCSS:true   
	};
	gulp.src('src/**/*.html')
	.pipe(htmlmin(options))
	.pipe(gulp.dest('dist'))
	.pipe(connect.reload());
})
//打开本地服务器
gulp.task('connect', function() {
    connect.server({
        root: 'dist',
        port: 4444,
        livereload: true // 开启页面刷新
    });
});
//监听
gulp.task('watch',function(){
	gulp.watch("src/css/*.css",['cssmin']);
	gulp.watch('src/js/*.js',['uglify']);
	gulp.watch('src/*.html',['htmlmin']);
	gulp.watch('src/img/**/*',['imgmin']);
})
//执行静态文件的压缩或者编译
gulp.task('build',['cssmin','uglify','htmlmin','imgmin']);
//将服务器，监听，静态文件一起执行
gulp.task('default',['build','connect','watch']);
