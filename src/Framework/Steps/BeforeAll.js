const BeforeAll = require('@cucumber/cucumber').BeforeAll
const Bootstrap = require('../Bootstrap')
const config = require('../Helpers/puppeteerConfig').config
const appConfig = require('../../../config/config')

BeforeAll(async () => {
  global.bootstrap = new Bootstrap(config)
  await global.bootstrap.initFramework(appConfig.platform, appConfig.app)
})
