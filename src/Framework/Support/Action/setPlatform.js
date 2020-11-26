module.exports = async (platform) => {
  global.platform = platform
  await global.bootstrap.setPlatform(global.platform)
  return true
}
