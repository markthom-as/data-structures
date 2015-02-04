var Stack = function(){
  var size = 0;
  var someInstance = {};

  // Use an object with numeric keys to store values
  var storage = {};

  // Implement the methods below
  someInstance.push = function(value){
    storage[size] = value;
    size++;
    return size;
  };

  someInstance.pop = function(){
    var temp;
    if ( size > 0 ) {
      temp = storage[size - 1];
      delete storage[size - 1];
      size--;
    }
    return temp;
  };

  someInstance.size = function(){
    return size;
  };

  return someInstance;
};
