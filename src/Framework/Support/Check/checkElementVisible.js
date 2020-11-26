module.exports = async (element) => {
  const isDisplayed = await element.boundingBox()
  if (isDisplayed) {
    return true
  }
  return false
}
