var Stack = function() {
  // Hey! Rewrite in the new style. Your code will wind up looking very similar,
  // but try not not reference your old code in writing the new style.
  var someInstance = {
    storage: {},
    sizeVar: 0
  }
  _.extend(someInstance, stackMethods);
  return someInstance;
};

var stackMethods = {
  push: function(value) {
    this.storage[this.sizeVar] = value;
    this.sizeVar++;
    return this.sizeVar;
  },

  pop: function(){
    var temp;
    if ( this.sizeVar > 0 ) {
      temp = this.storage[this.sizeVar - 1];
      delete this.storage[this.sizeVar - 1];
      this.sizeVar--;
    }
    return temp;
  },

  size: function(){
    return this.sizeVar;
  },

};


