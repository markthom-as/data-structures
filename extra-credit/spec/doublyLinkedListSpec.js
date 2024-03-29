describe('doublyLinkedList', function() {
  var doublyLinkedList;

  beforeEach(function() {
    doublyLinkedList = DoublyLinkedList();
  });

  it('should have a head and tail', function() {
    expect(doublyLinkedList).to.have.property("head");
    expect(doublyLinkedList).to.have.property("tail");
  });

  it('should have methods named "addToTail", "removeHead", and "contains"', function() {
    expect(doublyLinkedList.addToTail).to.be.a("function");
    expect(doublyLinkedList.removeHead).to.be.a("function");
    expect(doublyLinkedList.contains).to.be.a("function");
  });

  it('should designate a new tail when new nodes are added', function(){
    doublyLinkedList.addToTail(4);
    expect(doublyLinkedList.tail.value).to.equal(4);
    doublyLinkedList.addToTail(5);
    expect(doublyLinkedList.tail.value).to.equal(5);
  });

  it('should remove the head from the list when removeHead is called', function(){
    doublyLinkedList.addToTail(4);
    doublyLinkedList.addToTail(5);
    expect(doublyLinkedList.head.value).to.equal(4);
    doublyLinkedList.removeHead();
    expect(doublyLinkedList.head.value).to.equal(5);
  });

  it("should return the value of the former head when removeHead is called", function(){
    doublyLinkedList.addToTail(4);
    expect(doublyLinkedList.removeHead()).to.equal(4);
  });

  it("should contain a value that was added", function(){
    doublyLinkedList.addToTail(4);
    doublyLinkedList.addToTail(5);
    expect(doublyLinkedList.contains(4)).to.equal(true);
    expect(doublyLinkedList.contains(5)).to.equal(true);
    expect(doublyLinkedList.contains(6)).to.equal(false);
  });

  it('should not contain a value that was removed', function(){
    doublyLinkedList.addToTail(4);
    doublyLinkedList.addToTail(5);
    doublyLinkedList.removeHead();
    expect(doublyLinkedList.contains(4)).to.equal(false);
  });

  // add more tests here to test the functionality of doublyLinkedList

  it("should point to correct previous node", function(){
    doublyLinkedList.addToTail(4);
    doublyLinkedList.addToTail(5);
    doublyLinkedList.addToTail(2);
    expect(doublyLinkedList.head.next.next.previous.value).to.equal(5);
  });

  it("should point to correct previous node after nodes are removed", function(){
    doublyLinkedList.addToTail(4);
    doublyLinkedList.addToTail(5);
    doublyLinkedList.removeHead();
    doublyLinkedList.addToTail(2);
    expect(doublyLinkedList.tail.previous.value).to.equal(5);
  });

  it("new head adds a new head as expected", function(){
    doublyLinkedList.addToTail(4);
    doublyLinkedList.addToHead(5);
    doublyLinkedList.addToTail(2);
    expect(doublyLinkedList.head.value).to.equal(5);
  });

  it("old head's previous value points to new head", function(){
    doublyLinkedList.addToTail(4);
    doublyLinkedList.addToHead(5);
    doublyLinkedList.addToTail(2);
    expect(doublyLinkedList.head.next.previous.value).to.equal(5);
  });

  it("should point to correct tail value after removing tail, and point to correct previous node", function(){
    doublyLinkedList.addToTail(5);
    doublyLinkedList.addToTail(4);
    doublyLinkedList.addToTail(2);
    doublyLinkedList.removeTail();
    expect(doublyLinkedList.tail.value).to.equal(4);
    expect(doublyLinkedList.tail.previous.value).to.equal(5);
  });

});
