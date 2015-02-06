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


  //if newValue > this.value && this.left === null
      //this.left = new BinarySearchTree(newValue);
  //if newValue > this.value && this.right === null
      //this.right = new BinarySearchTree(newValue);
  //
  //
};

BinarySearchTree.prototype.contains = function(value){

};

BinarySearchTree.prototype.depthFirstLog = function(cb){

};

/*
 * Complexity: What is the time complexity of the above functions?
 */
