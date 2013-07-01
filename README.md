count-min-sketch
================
An implementation of Coromode and Muthukrishnan's [Count-Min sketch](http://en.wikipedia.org/wiki/Count-Min_sketch) data structure for JavaScript.  The count-min sketch is basically a high powered generalization of the bloom filter.  While a bloom filter gives an efficient way to approximate membership of a set, a count-min sketch can give approximate data about the relative frequency of items in the set.

For more information see the following references:

* Count-Min sketch:  https://sites.google.com/site/countminsketch/
* next big thing syndrome: http://lkozma.net/blog/sketching-data-structures/
* G. Cormode, S. Muthukrishnan. ["Approximating Data with the Count-Min Data Structure"](http://dimacs.rutgers.edu/~graham/pubs/papers/cmsoft.pdf).  IEEE Trans. on Software (2012)

## Example

```javascript
//Import library
var createCountMinSketch = require("count-min-sketch")

//Create data structure
var sketch = createCountMinSketch()

//Increment counters
sketch.update("foo", 1)
sketch.update(1515, 104)

//Query results
console.log(sketch.query(1515))  //Prints 104
console.log(sketch.query("foo")) //Prints 1
```

## Install

    npm install count-min-sketch
    
## API

`module.exports` is a constructor for the data structure, and you import it like so:

```javascript
var createCountMinSketch = require("count-min-sketch")
```

### `var sketch = createCountMinSketch(epsilon, probError[, hashFunc])`
Creates a count-min sketch data structure.

* `epsilon` is the accuracy of the data structure (ie the size of bins that we are computing frequencies of)
* `probError` is the probability of incorrectly computing a value
* `hashFunc(key, hashes)` is a hash function for the data structure. (optional)  the parameters to this function are as follows:

    + `key` is the item that is being hashed
    + `hashes` is an array of `k` hashes which are required to be pairwise independent.

**Returns** A count-min sketch data structure

### `sketch.update(key, v)`
Adds `v` to `key`

* `key` is the item in the table to increment.
* `v` is the amount to add to it


### `sketch.query(key)`
Returns the frequency of the item `key`

* `key` is the item whose frequency we are counting

**Returns** An estimate of the frequency of `key`

### `sketch.toJSON()`
Returns a serializable JSON representation of the table.

### `sketch.fromJSON(obj)`
Converts a JSON object into a deserialized sketch.  The hash function is reused from the current sketch.  

**Note** In order for this to be successful both the serialized hash table and the current hash table have to have the same hash function.

## Credits
(c) 2013 Mikola Lysenko. MIT License
