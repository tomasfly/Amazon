const AfterAll = require('@cucumber/cucumber').AfterAll
const logger = require('../../Framework/Helpers/logger')

AfterAll(() => {
  global.browser.close()
  logger.info(`Navigated through pages: ${global.navigatedPages}`)
})
