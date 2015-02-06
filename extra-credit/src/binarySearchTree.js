var BinarySearchTree = function(value){
  this.value = value;
  this.left = null;
  this.right = null;
};

BinarySearchTree.prototype.insert = function(newValue){
  var greater = newValue > this.value;
  var leftOpen = this.left === null;
  var rightOpen = this.right === null;
  if ( greater && rightOpen ) {
    this.right = new BinarySearchTree(newValue);
  }
  if ( !greater && leftOpen ) {
    this.left = new BinarySearchTree(newValue);
  }
  if ( greater && !rightOpen) {
    this.right.insert(newValue);
  }
  if ( !greater && !leftOpen) {
    this.left.insert(newValue);
  }
};

BinarySearchTree.prototype.contains = function(target){
  var greater = target > this.value;
  var leftExists = this.left !== null;
  var rightExists = this.right !== null;
  if ( this.value === target ) {
    return true;
  } else if ( greater && rightExists ) {
    return this.right.contains(target);
  } else if ( !greater && leftExists ) {
    return this.left.contains(target);
  } else {
    return false;
  }
};

BinarySearchTree.prototype.depthFirstLog = function(cb){
  var leftExists = this.left !== null;
  var rightExists = this.right !== null;

  cb(this.value);
  if ( leftExists ) {
    this.left.depthFirstLog(cb);
  }
  if ( rightExists ) {
    this.right.depthFirstLog(cb);
  }
};

/*
 * Complexity: What is the time complexity of the above functions?
 */
