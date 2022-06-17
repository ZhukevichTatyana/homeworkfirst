const { series, parallel, src, dest} = require('gulp');
const clean = require('gulp-clean');
const concat = require('gulp-concat');
const uglify = require('gulp-uglify');

function cleanDist(){
    return src('dist/*',{read: false}).pipe(clean());
}

function copyHtml(){
    return src('./public/index.html').pipe(dest('./dist'));
}

function copyCss(){
    return src([
        '../common/css/normalize.css',
        '../common/css/skeleton.css',
        '../common/css/dark-theme.css',
        'src/**/*.css',
    ])
      .pipe(concat('app.css'))
      .pipe(dest('./dist/css'));
}

function copyJs(){
    return src([
        'src/app.js',
        'src/controller/TodosController.js',
        'src/model/TodosCollection.js',
        'src/view/TodosView.js',
        'src/view/TodosListView.js',
        'src/view/FormListView.js',
        'src/**/*.js',
    ])
    .pipe(uglify())
    .pipe(concat('appp.js'))
    .pipe(dest('./dist/js'));
}

const build = parallel(copyHtml, copyCss, copyJs);

module.exports = {
    build: series(cleanDist, build),
};