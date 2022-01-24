class Node {
  constructor(value) {
    this.value = value;
    this.previous = null;
    this.next = null;
  }
}

class DoublyLinkedList {
  constructor(value) {
    this.head = new Node(value);
    this.tail = this.head;
    this.length = 1;
  }

  append(value) {
    const newNode = new Node(value);
    this.tail.next = newNode;
    newNode.previous = this.tail;
    this.tail = newNode;
    this.length++;
  }

  prepend(value) {
    const newNode = new Node(value);
    this.head.previous = newNode;
    newNode.next = this.head;
    this.head = newNode;
    this.length++;
  }

  insert(index, value) {
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
    newNode.previous = currentNode;
    currentNode.next = newNode;
    nextNode.previous = newNode;
    this.length++;
  }

  remove(index) {
    let currentNode = this.head;
    let counter = 0;
    while (counter !== index) {
      currentNode = currentNode.next;
      counter++;
    }
    let previousNode = currentNode.previous;
    let nextNode = currentNode.next;
    previousNode.next = nextNode;
    nextNode.previous = previousNode;
    this.length--;
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
    //Check parameters
    let counter = 0;
    let currentNode = this.head;
    while (counter !== index) {
      currentNode = currentNode.next;
      counter++;
    }
    return currentNode;
  }
}

let myLinkedList = new DoublyLinkedList(10);
myLinkedList.append(5);
myLinkedList.append(8);
myLinkedList.prepend(1);
myLinkedList.prepend(2);
myLinkedList.insert(1, 99);
myLinkedList.insert(20, 100);
myLinkedList.remove(1);
console.log(myLinkedList.printList());
console.log(myLinkedList);
