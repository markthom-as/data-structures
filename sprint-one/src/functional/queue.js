var Queue = function(){
  var size = 0;
  var someInstance = {};

  // Use an object with numeric keys to store values
  var storage = {};

  // Implement the methods below

  someInstance.enqueue = function(value){
    storage[size] = value;
    size++;
    return size;
  };

  someInstance.dequeue = function(){
    var temp;
    var obj = {};
    if ( size > 0 ){
      temp = storage[0];
      delete storage[0];
      size--;
      for (var key in storage){
        obj[Number(key) - 1] = storage[key];
      }
    }
    storage = obj;
    return temp;
  };

  someInstance.size = function(){
    return size;
  };

  return someInstance;
};
