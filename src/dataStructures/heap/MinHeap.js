class MinHeap {
  constructor() {
    this.heap = [];
  }

  insert(value) {
    this.heap.push(value);
    let currentIndex = this.heap.length - 1;
    this.bubbleUp(currentIndex);
  }

  swap(a, b) {
    let temp = this.heap[a];
    this.heap[a] = this.heap[b];
    this.heap[b] = temp;
  }

  bubbleUp(index) {
    while (
      this.heap[this.parent(index)] &&
      this.heap[this.parent(index)] > this.heap[index]
    ) {
      this.swap(this.parent(index), index);
      index = this.parent(index);
    }
  }

  heapify(index) {
    while (true) {
      let left = this.left(index);
      let right = this.right(index);

      if (
        this.heap[left] &&
        this.heap[right] &&
        this.heap[left] < this.heap[right] &&
        this.heap[index] > this.heap[left]
      ) {
        this.swap(left, index);
        index = left;
      } else if (
        this.heap[left] &&
        this.heap[right] &&
        this.heap[right] < this.heap[left] &&
        this.heap[index] > this.heap[right]
      ) {
        this.swap(right, index);
        index = right;
      } else if (this.heap[left] && this.heap[index] > this.heap[left]) {
        this.swap(left, index);
        index = left;
      } else if (this.heap[right] && this.heap[index] > this.heap[right]) {
        this.swap(right, index);
        index = right;
      } else {
        break;
      }
    }
  }

  getMin() {
    return this.heap[0];
  }

  removeMin() {
    if (this.getSize() > 1) {
      this.swap(0, this.heap.length - 1);
    }
    let removedMin = this.heap.pop();
    this.heapify(0);
    return removedMin;
  }

  parent(index) {
    return Math.floor((index - 1) / 2);
  }

  left(index) {
    return 2 * index + 1;
  }

  right(index) {
    return 2 * index + 2;
  }

  getSize() {
    return this.heap.length;
  }
}

const arr = [6, 2, 4, 3, 1, 5, 5, 9, 10];
const testHeap = new MinHeap();
arr.forEach((num) => {
  testHeap.insert(num);
});
console.log(testHeap);
console.log(testHeap.removeMin() === 1);
console.log(testHeap.removeMin() === 2);
console.log(testHeap.removeMin() === 3);
console.log(testHeap.removeMin() === 4);
console.log(testHeap.removeMin() === 5);
console.log(testHeap.removeMin() === 5);
console.log(testHeap.removeMin() === 6);
console.log(testHeap.removeMin() === 9);
console.log(testHeap.removeMin() === 10);
