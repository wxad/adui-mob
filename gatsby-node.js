const path = require('path')

exports.onCreateWebpackConfig = ({
  stage,
  rules,
  loaders,
  plugins,
  actions,
}) => {
  actions.setWebpackConfig({
    watch: true,
    watchOptions: {
      ignored: [
        path.resolve(__dirname, './src/examples/'),
        path.relative(__dirname, './src/component/'),
        path.relative(__dirname, 'dist'),
      ],
    },
  })
}
