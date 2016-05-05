const test = require("ava")
const Promise = require("bluebird")
const request = Promise.promisify(require("request"))

const maxDelay = 2000
for(let i = 0; i < 10; i++) {
  const delay = Math.floor(Math.random() * maxDelay)
  test(`Server should sent a response, delayed by ${delay}ms`, async function(t) {
    const res = await request(`http://127.0.0.1:3000/?delay=${delay}`)
    t.truthy(res.body === `delay is ${delay}\n`)
  })
}
