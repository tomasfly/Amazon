const AfterAll = require('@cucumber/cucumber').AfterAll
const logger = require('../../Framework/Helpers/logger')
const fs = require('fs')

AfterAll(() => {
  global.browser.close()
  logger.info(`Navigated through pages: ${global.navigatedPages}`)
  if (fs.existsSync('./temp.json')) {
    fs.unlinkSync('./temp.json')
  }
})
