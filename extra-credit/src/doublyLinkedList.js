var DoublyLinkedList = function(){
  var list = {};
  list.head = null;
  list.tail = null;

  list.addToTail = function(value){
    if ( !this.tail ) {
      this.tail = Node(value);
      this.head = this.tail;
    } else if ( this.head === this.tail ) {
      this.tail = Node(value);
      this.head.next = this.tail;
      this.tail.previous = this.head;
    } else {
      this.tail.next = Node(value);
      this.tail.next.previous = this.tail;
      this.tail = this.tail.next;
    }
  };

  list.removeHead = function() {
    var temp;
    if ( this.head !== null ) {
      if ( this.head === this.tail ) {
        temp = this.head.value;
        this.head = null;
        this.tail = null;
      } else {
        temp = this.head.value;
        this.head = this.head.next;
      }
    }
    return temp;
  };

  // list.addToHead = function(value) {
  //   this.head = new Node(value);
  // }

  list.contains = function(target){
    var node;
    if ( this.head ) {
      node = this.head;
      while ( node ) {
        if ( node.value === target ) {
          return true;
        } else {
          node = node.next;
        }
      }
    }
    return false;
  };

  return list;
};

var Node = function(value){
  var node = {};

  node.value = value;
  node.next = null;
  node.previous = null;

  return node;
};

/*
 * Complexity: What is the time complexity of the above functions?
 */
