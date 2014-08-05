# crowd-express

[Crowd](https://github.com/nicola/crowd) for Express

> **Warning**: this is very experimantal - in case you get it to work, you might feel "double rainbow all the way".

## Usage

Ideally, one should be able to do so:

```javascript
// Server
var Crowd = require('crowd')
var router = require('crowd-express')

function task (data) {
  // some calculations
  return result 
}
var crowd = Crowd({x:1, y:2}, task)
  .on('data', function(data) {
    // data coming in real time
  })
  .on('end', function(results) {
    // task completed
  })
  .on('error', function(err) {
    // errors on the way
  })

var express = require('express')
var app = express()
var bodyParser = require('body-parser')
var port = process.env.PORT || 8080
app.use('/task', router(crowd))

```

The last line is the purpose of this library.