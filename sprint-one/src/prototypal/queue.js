var Queue = function() {
  // Hey! Rewrite in the new style. Your code will wind up looking very similar,
  // but try not not reference your old code in writing the new style.
  var queue = Object.create(queueMethods);
  queue.sizeVar = 0;
  queue.storage = {};
  return queue;
};

var queueMethods = {};

queueMethods.enqueue = function(value){
  this.storage[this.sizeVar] = value;
  this.sizeVar++;
  return this.sizeVar;
}

queueMethods.dequeue = function(){
  var temp;
  if(this.sizeVar > 0){
    temp = this.storage[0];
    delete this.storage[0];
    this.sizeVar--;
    var obj = {};
    for(var key in this.storage){
      obj[Number(key) - 1] = this.storage[key];
    }
    this.storage = obj;
  }
  return temp;
}

queueMethods.size = function(){
  return this.sizeVar;
}



