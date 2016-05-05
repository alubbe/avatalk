const {assert} = require("chai")
const Promise = require("bluebird")
const request = Promise.promisify(require("request"))

const maxDelay = 2000
for(let i = 0; i < 10; i++) {
  const delay = Math.floor(Math.random() * maxDelay)
  it(`Server should sent a response, delayed by ${delay}ms`, Promise.coroutine(function*() {
    const res = yield request(`http://127.0.0.1:3000/?delay=${delay}`)
    assert.equal(res.body, `delay is ${delay}\n`)
  }))
}
