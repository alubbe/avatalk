const Promise = require("bluebird")
const {createServer} = require("http")
const {parse} = require("url")

createServer(Promise.coroutine(function*(req, res) {
  const {query} = parse(req.url, true)
  const delay = query.delay && parseInt(query.delay) || 0
  yield Promise.delay(delay)
  res.end(`delay is ${delay}\n`)
})).listen(3000, () => console.log("Server running on port 3000"))
