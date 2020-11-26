const config = {
  headless: false,
  args: [
    '--enable-features=NetworkService',
    '--no-sandbox',
    '--disable-setuid-sandbox',
    '--disable-dev-shm-usage',
    '--disable-web-security',
    '--disable-features=IsolateOrigins,site-per-process',
    '--shm-size=3gb',
    '--start-maximized'
  ]
}

module.exports = { config }
