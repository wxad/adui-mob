const { src, dest, series, watch, parallel, task } = require('gulp')
const generateData = require('./generate-compData')
const del = require('del')
const eslint = require('gulp-eslint')
const logger = require('gulp-logger')
const change = require('gulp-changed')
// 防止出现错误的时候进程结束
const plumber = require('gulp-plumber')
const dox = require('gulp-dox')

// ts 编译的插件
const ts = require('gulp-typescript')
const tsProject = ts.createProject('tsconfig.json')

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

// 在编译前清空 dist 文件夹
function clean() {
  return (async () => {
    await del.bind(null, ['dist'])
  })()
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
}

// 编译 ts 文件
function buildTs() {
  return src(TsPathsFinal)
    .pipe(change('dist', { extension: '.js' }))
    .pipe(plumber())
    .pipe(tsProject())
    .js.pipe(logger({ showChange: true }))
    .pipe(dest('dist'))
}

// 生成
function generateCommentData(cb) {
  return src(TsPathsFinal)
    .pipe(logger({ showChange: true }))
    .pipe(dox())
    .pipe(plumber())
    .pipe(dest('commentData'))
    .on('end', () => {
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
}

// 编译其余文件
function buildExtra() {
  return src(extraPathsFinal)
    .pipe(plumber())
    .pipe(change('dist'))
    .pipe(logger({ showChange: true }))
    .pipe(dest('dist'))
}

// 编译图片文件
function buildImage() {
  return src(imagePathsFinal)
    .pipe(change('dist'))
    .pipe(logger({ showChange: true }))
    .pipe(dest('dist'))
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

exports.buildStyle = buildStyle
exports.build = series(
  clean,
  parallel(
    buildJs,
    buildTs,
    buildExtra,
    buildStyle,
    buildImage,
    generateCommentData
  )
)
exports.default = series(
  clean,
  parallel(
    buildJs,
    buildTs,
    buildExtra,
    buildStyle,
    buildImage,
    generateCommentData
  ),
  watchChange
)
