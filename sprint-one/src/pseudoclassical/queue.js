var Queue = function() {
  // Hey! Rewrite in the new style. Your code will wind up looking very similar,
  // but try not not reference your old code in writing the new style.
  this.sizeVar = 0;
  this.storage = {};
};

Queue.prototype.enqueue = function(value) {
  this.storage[this.sizeVar] = value;
  this.sizeVar++;
  return this.sizeVar;
};

Queue.prototype.dequeue = function() {
  var temp;
  if ( this.sizeVar > 0 ) {
    temp = this.storage[0];
    delete this.storage[0];
    this.sizeVar--;
    var obj = {};
    for ( var key in this.storage) {
      obj[Number(key) - 1] = this.storage[key];
    }
    this.storage = obj;
  }
  return temp;
};

Queue.prototype.size = function() {
  return this.sizeVar;
};
