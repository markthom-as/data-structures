var Tree = function(value){
  var newTree = {};
  newTree.value = value;

  newTree.children = [];
  _.extend(newTree, treeMethods);
  return newTree;
};





var treeMethods = {};

treeMethods.addChild = function(value){
  this.children.push(Tree(value));
};

treeMethods.contains = function(target){
  var flag = false;
  if ( this.value === target ) {
    return true;
  }
  for ( var i = 0; i < this.children.length; i++) {
    flag = flag || this.children[i].contains(target);
  }
  return flag;
};


/*
 * Complexity: What is the time complexity of the above functions?
 */
