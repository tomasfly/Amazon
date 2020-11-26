/* eslint-disable no-undef */
const { expect } = require('chai')
const checkElementVisible = require('../../../../src/Framework/Support/Check/checkElementVisible')

const element = {
  boundingBox: jest.fn().mockReturnValueOnce({
    x: 558.25,
    y: 305,
    width: 394,
    height: 56
  }).mockReturnValueOnce(null)
}

describe('checkElementVisible', () => {
  test('checkElementVisible()', () => checkElementVisible(element).then((res) => {
    expect(res).to.equal(true)
  }))

  test('checkElementVisible()', () => checkElementVisible(element).then((res) => {
    expect(res).to.equal(false)
  }))
})
