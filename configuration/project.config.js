const path = require('path')

const ownConfig = {
  directory: {
    root: path.resolve(`${__dirname}/..`),
    get source() {
      return path.join(ownConfig.directory.root, './source')
    },
    get distribution() {
      return path.join(ownConfig.directory.root, './distribution')
    },
    get test() {
      return path.join(ownConfig.directory.root, './test')
    },
    get script() {
      return path.join(ownConfig.directory.root, './script')
    },
  },
  get script() {
    return [
      { type: 'directory', path: path.join(__dirname, '../node_modules') },
      { type: 'directory', path: ownConfig.directory.script },
    ]
  },
  entrypoint: {
    programmaticAPI: './entrypoint.js',
  },
  transpilation: {
    babelConfigKey: 'serverRuntime.BabelConfig.js',
    get babelConfig() {
      const { getBabelConfig } = require('@deployment/javascriptTranspilation')
      return getBabelConfig(ownConfig.transpilation.babelConfigKey, { configType: 'json' })
    },
  },
  build: {
    get compile() {
      return [path.relative(ownConfig.directory.root, ownConfig.directory.source), path.relative(ownConfig.directory.root, ownConfig.directory.resource)]
    },
    repositoryURL: 'https://github.com/t-itani/quran-in-english',
  },
}

module.exports = Object.assign({}, ownConfig)
