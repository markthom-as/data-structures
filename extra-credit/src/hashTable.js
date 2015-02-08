var HashTable = function(){
  this._limit = 8;
  this._storage = LimitedArray(this._limit);
  this._size = 0;
};

HashTable.prototype.insert = function(k, v){
  var i = getIndexBelowMaxForKey(k, this._limit);
  if ( this._storage.get(i) === undefined ) {
    this._storage.set(i, []);
  }
  var temp = this._storage.get(i);
  var obj = {}
  obj[k] = v;
  temp.push(obj);
  this._storage.set(i, temp);
  this._size++;
  this.resizeIfNeeded();

  return undefined;
};

HashTable.prototype.retrieve = function(k){
  var i = getIndexBelowMaxForKey(k, this._limit);
  var bucket = this._storage.get(i);
  if ( bucket ) {
    for (var j = 0; j < bucket.length; j++ ) {
      for (var key in bucket[j]){
        if ( key === k ){
          return bucket[j][key];
        }
      }
    }
  }
  return null;
};

HashTable.prototype.remove = function(k){
  var i = getIndexBelowMaxForKey(k, this._limit);
  var bucket = this._storage.get(i);
  //console.log(bucket);
  var temp;
  if ( bucket ) {
    console.log(bucket);
    for (var j = 0; j < bucket.length; j++ ) {
      for ( var key in bucket[j] ){
        if ( key === k) {
          temp = bucket[j];
          bucket[j] = null;
          //bucket.splice(j, j+1);
          if(bucket.length === 0){
            this._storage.set(i, null);
          }
          this._size--;
          //console.log(bucket);
          this.resizeIfNeeded();
          return temp;
        }
      }
    }
  }
  return temp;
};

//problem: apply a function to every unit of data in our hash table
//inputs: hash table and a function
//output: no output
//constraints: how is the hash table storing the data?
//how many arguments does the callback function need? in what format?

//Locate every unit of data, and apply the callback function to it.

//iterate over every element in storage
  //iterate over every element at each storage index
    //access key and valu of object
      //call callback using key value pair

HashTable.prototype.rehashTable = function (target) {
  // this._storage.each(function(array){
  for ( var x = 0; x < this._limit; x++) {
    if ( this._storage.get(x) ) {
      for ( var i = 0; i < this._storage.get(x).length; i++ ) {
        for ( var key in array[i] ) {
          target.insert(key, array[i][key]);
        }
      }
    }
  }
  // });
  return undefined;
}

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

  var halve = function () {
    var temp = this;
    this._storage = LimitedArray(this._limit / 2);
    temp.rehashTable(this);
    this._limit = this._limit / 2;

  };

  var double = function () {
    var temp = this;
    this._storage = LimitedArray(this._limit * 2);
    temp.rehashTable(this);
    this._limit = this._limit * 2;
   };

  if ( percentFull >= 0.75 ) {
    var x = double.bind(this);
    x();
  };

  //console.log(this._limit);

  if ( percentFull <= 0.25 && this._limit > 8) {
    console.log("triggering")
    var y = halve.bind(this);
    y();
  };

};


/*
 * Complexity: What is the time complexity of the above functions?
 */

//constant
