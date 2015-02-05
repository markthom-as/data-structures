var Graph = function(){
  this.nodes = {};
};

Graph.prototype.addNode = function(node){
  if ( this.nodes[node] === undefined) {
    this.nodes[node] = null;
  };
};

Graph.prototype.contains = function(node){
  for ( var key in this.nodes ) {
    if ( key === node ) {
      return true;
    }
  }
  return false;
};

Graph.prototype.removeNode = function(node){
  var temp = this.nodes[node];
  delete this.nodes[node];
  return temp;
};

Graph.prototype.hasEdge = function(fromNode, toNode){
  if ( this.nodes[fromNode][toNode] ) {
    return true;
  }
  return false;
};

Graph.prototype.addEdge = function(fromNode, toNode){
  if ( this.nodes[fromNode] === null ) {
    this.nodes[fromNode] = {};
  }
  if ( this.nodes[toNode] === null ) {
    this.nodes[toNode] = {};
  }
  this.nodes[fromNode][toNode] = true;
  this.nodes[toNode][fromNode] = true;
};

Graph.prototype.removeEdge = function(fromNode, toNode){
  delete this.nodes[fromNode][toNode];
  delete this.nodes[toNode][fromNode];
  if ( Object.keys(this.nodes[fromNode]).length === 0) {
    this.nodes[fromNode] = null;
  }
  if ( Object.keys(this.nodes[toNode]).length === 0) {
    this.nodes[toNode] = null;
  }
};

Graph.prototype.forEachNode = function(cb){
  var list = this.nodes;
  for ( var key in this.nodes ) {
    cb(key);
  }
};

/*
 * Complexity: What is the time complexity of the above functions?
 */

