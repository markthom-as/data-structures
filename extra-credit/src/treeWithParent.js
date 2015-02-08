var Tree = function(value, parent){
  var newTree = {};
  newTree.value = value;
  newTree.parent = parent || null;
  newTree.children = [];

  _.extend(newTree, treeMethods);
  return newTree;
};

var treeMethods = {};

treeMethods.addChild = function(value){
  this.children.push(Tree(value, this));
};

treeMethods.removeFromParent = function(){
  for(var i = 0; i < this.parent.children.length; i++) {
    if(this === this.parent.children[i]){
      this.parent.children.splice(i, i + 1);
    }
  }
  this.parent = null;
}

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

//write a function that takes a callback and calls it on every value of the tree

//call the callback on the current node's value
//check to see if the current node has children
//call the callback on the children of the current node
//if there are no children, the function will stop


/*
 * Complexity: What is the time complexity of the above functions?
 */
