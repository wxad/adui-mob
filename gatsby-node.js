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
      ignored: ['src/component/**/*.ts', 'dist'],
    },
  })
}