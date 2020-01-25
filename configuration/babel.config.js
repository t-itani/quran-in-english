const { getBabelConfig } = require('@deployment/javascriptTranspilation')

module.exports = getBabelConfig('serverRuntime.BabelConfig.js', { configType: 'functionApi' })
