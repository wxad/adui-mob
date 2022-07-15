const { src, dest, series, watch, parallel, task } = require('gulp')
const fs = require('fs')
const fsExtra = require('fs-extra')
const generateData = require('./generate-compData')
const del = require('del')
const eslint = require('gulp-eslint')
const logger = require('gulp-logger')
const change = require('gulp-changed')
const streamCombiner = require('stream-combiner')
const pxtounits = require('postcss-px2units')
// 防止出现错误的时候进程结束
const plumber = require('gulp-plumber')
const dox = require('gulp-dox')

// ts 编译的插件
const ts = require('gulp-typescript')
const tsProject = ts.createProject('tsconfig.json', { declaration: true })

// px tp rpx 插件配置
const pxtounitsOption = {
  divisor: 1,
  multiple: 2,
  decimalPlaces: 2,
  comment: 'no',
  targetUnits: 'rpx'
}

// 用于 sass 处理的插件
const rename = require('gulp-rename')
const sass = require('gulp-sass')
const postcsss = require('gulp-postcss')
const autoprefixer = require('autoprefixer')
const stylelint = require('gulp-stylelint')
// const env = process.env.NODE_ENV

const scssPathsFinal = [
  'src/**/**.scss',
  'src/**/**.wxss',
  '!src/gatsby-theme-docz/**',
]
const TsPathsFinal = ['src/**/*.ts', '!src/gatsby-theme-docz/**']
const extraPathsFinal = [
  'src/**/**.wxs',
  'src/**/**.wxml',
  'src/**/**.json',
  '!src/gatsby-theme-docz/**',
]
const imagePathsFinal = [
  'src/**/**.svg',
  'src/**/**.png',
  'src/**/**.jpg',
  '!src/gatsby-theme-docz/**/**.png',
]
const jsPathsFinal = ['src/**/**.js', '!src/gatsby-theme-docz/**/**.js']

// 将 svg 文件转化成 backgrond-image
const handleSVG = require('./generate-icon-background.js')

handleSVG()

const destPaths = (paths) => {
  return streamCombiner(paths.map(function (path) {
      return dest(path);
  }));
}

// 在编译前清空 dist 文件夹
async function clean() {
  await await fs.rmdirSync('./dist', {recursive: true, force: true}, (err) => {
    if (err) throw err;
    console.log('delete dist complete!');
  })
  await await fs.rmdirSync('./dist-rpx', {recursive: true, force: true}, (err) => {
    if (err) throw err;
    console.log('delete dist-rpx complete!');
  })
  await await fs.rmdirSync('./commentData', {recursive: true, force: true}, (err) => {
    if (err) throw err;
    console.log('delete commentData complete!');
  })
}

// 编译 style，进行 scss 的转化
function buildStyle() {
  return src(scssPathsFinal, { base: 'src' })
    .pipe(plumber())
    .pipe(sass().on('error', sass.logError))
    .pipe(
      stylelint({
        failAfterError: false,
        fix: true,
        reporters: [{ formatter: 'json' }],
      })
    )
    .pipe(postcsss([autoprefixer()]))
    .pipe(rename({ extname: '.wxss' }))
    .pipe(change('dist'))
    .pipe(logger({ showChange: true }))
    .pipe(dest('dist'))
    .pipe(postcsss([autoprefixer(), pxtounits(pxtounitsOption)]))
    .pipe(dest('dist-rpx'))
}

// 编译 ts 文件
function buildTs() {
  return src(TsPathsFinal)
    .pipe(change('dist', { extension: '.js' }))
    .pipe(plumber())
    .pipe(tsProject())
    .pipe(logger({ showChange: true }))
    .pipe(dest('dist'))
    .pipe(dest('dist-rpx'))
}

// 生成
function generateCommentData(cb) {
  return src(TsPathsFinal)
    .pipe(logger({ showChange: true }))
    .pipe(dox())
    .pipe(plumber())
    .pipe(dest('commentData'))
    .on('end', () => {
      fs.rmdirSync('./commentData/components/icon-rpx', {recursive: true, force: true}, (err) => {
        if (err) throw err;
        console.log('delete icon-rpx comment complete!');
      })
      generateData()
    })
}

// 编译 js 文件
function buildJs() {
  return src(jsPathsFinal, {
    base: 'src',
  })
    .pipe(plumber())
    .pipe(
      eslint({
        configFile: './.eslintrc.js',
        useEslintrc: true,
      })
    )
    .pipe(eslint.format())
    .pipe(change('dist'))
    .pipe(logger({ showChange: true }))
    .pipe(dest('dist'))
    .pipe(dest('dist-rpx'))
}

// 编译其余文件
function buildExtra() {
  return src(extraPathsFinal)
    .pipe(plumber())
    .pipe(change('dist'))
    .pipe(logger({ showChange: true }))
    .pipe(dest('dist'))
    .pipe(dest('dist-rpx'))
}

// 编译图片文件
function buildImage() {
  return src(imagePathsFinal)
    .pipe(change('dist'))
    .pipe(logger({ showChange: true }))
    .pipe(dest('dist'))
    .pipe(dest('dist-rpx'))
}

// 监控代码的改动
function watchChange() {
  watch(
    ['src/**/**.wxml', 'src/**/**.json', '!src/gatsby-theme-docz'],
    series(buildExtra)
  )
  watch(['src/**/**.js', '!src/gatsby-theme-docz/**/**.js'], series(buildJs))
  watch(['src/**/*.ts', '!src/gatsby-theme-docz/**'], series(buildTs))
  watch(
    ['src/**/**.scss', 'src/**/**.wxss', '!src/gatsby-theme-docz/**'],
    series(buildStyle)
  )
}

 async function changeIconDirName() {
  await fs.rename('./dist-rpx/components/icon-rpx', './dist-rpx/components/icon', (err) => {
    if (err) throw err;
    console.log('Rename icon complete!');
  })
 }

 async function deleIconDir() {
  await fs.rmdirSync('./dist-rpx/components/icon', {recursive: true, force: true}, (err) => {
    if (err) throw err;
    console.log('delete icon complete!');
  })
  await fs.rmdirSync('./dist/components/icon-rpx', {recursive: true, force: true}, (err) => {
    if (err) throw err;
    console.log('delete icon-rpx complete!');
  })
 }

 async function changeComponentName() {
  await fs.renameSync('./dist-rpx/components', './dist-rpx/components-rpx', (err) => {
    if (err) throw err;
    console.log('Rename complete!');
  })
  await fsExtra.copy('./dist-rpx/components-rpx', './dist/components-rpx')
 }

exports.buildStyle = buildStyle
exports.build = series(
  clean,
  parallel(
    buildJs,
    buildTs,
    buildExtra,
    buildStyle,
    buildImage,
  ),
  deleIconDir,
  changeIconDirName,
  generateCommentData,
)
exports.publish = series(
  clean,
  parallel(
    buildJs,
    buildTs,
    buildExtra,
    buildStyle,
    buildImage,
  ),
  deleIconDir,
  changeIconDirName,
  generateCommentData,
  changeComponentName
)
exports.default = series(
  clean,
  parallel(
    buildJs,
    buildTs,
    buildExtra,
    buildStyle,
    buildImage,
  ),
  deleIconDir,
  changeIconDirName,
  generateCommentData,
  watchChange
)
