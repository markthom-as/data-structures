var Stack = function() {
  // Hey! Rewrite in the new style. Your code will wind up looking very similar,
  // but try not not reference your old code in writing the new style.
this.sizeVar = 0;
this.storage = {};
};

Stack.prototype.push = function(value){
  this.storage[this.sizeVar] = value;
  this.sizeVar++;
  return this.sizeVar;
}

Stack.prototype.pop = function(){
  var temp;
  if(this.sizeVar > 0){
    temp = this.storage[this.sizeVar - 1];
    delete this.storage[this.sizeVar - 1];
    this.sizeVar--;
  }
  return temp;
}

Stack.prototype.size = function(){
  return this.sizeVar;
}


