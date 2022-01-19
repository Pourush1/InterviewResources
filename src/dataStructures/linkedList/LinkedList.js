class Node {
  constructor(value) {
    this.value = value;
    this.next = null;
  }
}

class LinkedList {
  constructor(value) {
    this.head = new Node(value);
    this.tail = this.head;
    this.length = 1;
  }

  append(value) {
    const newNode = new Node(value);
    this.tail.next = newNode;
    this.tail = newNode;
    this.length++;
    return this;
  }

  prepend(value) {
    const newNode = new Node(value);
    newNode.next = this.head;
    this.head = newNode;
    this.length++;
    return this;
  }

  insert(index, value) {
    //check params
    if (index >= this.length) {
      return this.append(value);
    }

    const newNode = new Node(value);
    let currentNode = this.head;
    for (let i = 0; i < index - 1; i++) {
      currentNode = currentNode.next;
    }
    let nextNode = currentNode.next;
    newNode.next = nextNode;
    currentNode.next = newNode;
    this.length++;
  }

  remove(index) {
    let currentNode = this.head;
    let counter = 0;
    while (counter !== index - 1) {
      currentNode = currentNode.next;
      counter++;
    }
    let nodeToBeDeleted = currentNode.next;
    let nextNode = nodeToBeDeleted.next;
    currentNode.next = nextNode;
    this.length--;
    return this.printList();
  }

  printList() {
    let array = [];
    let currentNode = this.head;
    while (currentNode !== null) {
      array.push(currentNode.value);
      currentNode = currentNode.next;
    }
    return array;
  }

  traverseToIndex(index) {
    // check parameters
    let counter = 0;
    let currentNode = this.head;
    while (counter !== index) {
      currentNode = currentNode.next;
      counter++;
    }
    return currentNode;
  }

  reverse() {
    if (this.length === 1) {
      return this.head;
    }

    let first = this.head;
    let second = first.next;
    this.tail = this.head;
    while (second) {
      let temp = second.next;
      second.next = first;
      first = second;
      second = temp;
    }
    this.tail.next = null;
    this.head = first;
    return this;
  }
}

let myLinkedList = new LinkedList(10);
myLinkedList.append(5);
myLinkedList.append(8);
// console.log(myLinkedList);
myLinkedList.prepend(1);
console.log(myLinkedList);
myLinkedList.insert(4, 99);
myLinkedList.insert(20, 100);
console.log(myLinkedList.reverse());
myLinkedList.remove(2);
//myLinkedList.printList();
//console.log(myLinkedList);
