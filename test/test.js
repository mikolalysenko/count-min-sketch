var createCountMin = require("../count-min.js")

require("tape")("count-min-sketch", function(t) {

  
  var sketch = createCountMin()
  
  sketch.update("a", 1)
  sketch.update("b", 2)
  sketch.update("c", 1)
  
  t.equals(sketch.query("a"), 1)
  t.equals(sketch.query("b"), 2)
  t.equals(sketch.query("c"), 1)
  
  sketch.update("a", 10)
  t.equals(sketch.query("a"), 11)
  t.equals(sketch.query("b"), 2)
  t.equals(sketch.query("c"), 1)
  
  
  t.end()
})