const After = require('@cucumber/cucumber').After

After(async () => {
  await global.page.close()
})
