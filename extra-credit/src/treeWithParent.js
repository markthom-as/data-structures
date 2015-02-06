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
      console.log( this.children[1] );
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


/*
 * Complexity: What is the time complexity of the above functions?
 */
