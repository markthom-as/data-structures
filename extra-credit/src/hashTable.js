var HashTable = function(){
  this._limit = 8;
  this._storage = LimitedArray(this._limit);
  this._size = 0;
};

HashTable.prototype.insert = function(k, v){
  var i = getIndexBelowMaxForKey(k, this._limit);
  if ( this._storage[i] === undefined ) {
    this._storage[i] = [];
  }
  var obj = {};
  obj[k] = v;
  this._storage[i].push(obj);
  this._size++;
  return this._storage;
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
      this._size--;
      return temp;
    }
  }
  return temp;
};

// HashTable.prototype.traverse = function (cb) {
//   //Traverses Tree and applies a callback function
  // this._storage.each(function(value, key, array){
  //   console.log(array);
  //   for (var i = 0; i < array.length; i++){
  //     for( var key in array[i]){
  //       console.log(key);
  //       cb(key, array[i][key]);
  //     }
  //   }
  // });
//   // console.log(this._storage);
//   // for (var j = 0; j < this._storage.length; j++ ) {
//   //   console.log(this._storage);
//   //   for (var x = 0; x < this._storage[j].length; x++ ){
//   //     // console.log(this._storage[j]);
//   //     for ( var key in this._storage[j][k] ){
//   //       cb(key, this._storage[j][k][key]);
//   //     }
//   //   }
//   // }
// }


//checks to see if it needs to resize, then calls correct sizing function
HashTable.prototype.resizeIfNeeded = function () {
  var percentFull = this._size / this._limit;
  var current = this;

  var halve = function () {


//     current._limit = current._limit / 2;
//     var temp = current;
//     current._storage = LimitedArray(current._limit);
//     temp.traverse( function(key, value) {
//       current.insert(key, value);
  };
};

//   var double = function () {
//     current._limit = current._limit * 2;
//     var temp = current;
//     current._storage = LimitedArray(current._limit);
//     temp.traverse( function(key, value) {
//       current.insert(key, value);
//     });
//   };

  if( percentFull > 0.75 ){
    double();
  };

  if( percentFull < 0.25 ){
    halve();
  };


//   this._storage = current._storage;
//   this._size = current._size;
//   this._limit = current._limit;
//}


/*
 * Complexity: What is the time complexity of the above functions?
 */

//constant
