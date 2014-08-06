module.exports = CrowdRouter

var express = require('express')

function CrowdRouter(crowd) {

  var getTask = function(req, res, next) {
    res.json(crowd.toJSON())
  }

  var task = express.Router();

  task.use(function(req, res, next) {
    // some crowd options stuff?
    // recalculate some stuff?
    next()
  })

  task.get('/', getTask)

  task.post('/', function(req, res, next) {

    crowd.handleResult(req.body, function(err) {
      if (err) {
        // this should change from different error
        return res.send(204)
      }
      next()
    })

  }, getTask)

  return task
}