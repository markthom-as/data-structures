var HashTable = function(){
  this._limit = 8;
  this._storage = LimitedArray(this._limit);
};

HashTable.prototype.insert = function(k, v){
  var i = getIndexBelowMaxForKey(k, this._limit);
  if ( this._storage[i] === undefined ) {
    this._storage[i] = [];
  }
  var obj = {};
  obj[k] = v;
  this._storage[i].push(obj);
  return undefined;
};

HashTable.prototype.retrieve = function(k){
  var i = getIndexBelowMaxForKey(k, this._limit);
  for (var j = 0; j < this._storage[i].length; j++ ) {
    if ( this._storage[i][j][k] ) {
      return this._storage[i][j][k];
    }
  }
  return null;
};

HashTable.prototype.remove = function(k){
  var i = getIndexBelowMaxForKey(k, this._limit);
  var temp;
  for (var j = 0; j < this._storage[i].length; j++ ) {
    if ( this._storage[i][j][k] !== null) {
      temp = this._storage[i][j];
      this._storage[i].splice(j, j+1);
      return temp;
    }
  }
  return temp;
};

/*
 * Complexity: What is the time complexity of the above functions?
 */

//constant
