class miniHeap {
  constructor() {
    this.heap = [];
  }

  push(value) {
    this.heap.push(value);
    this.heapifyUp();
  }

  pop() {
    if (this.isEmpty()) return 0;

    const root = this.heap[0];
    const lastNode = this.heap.pop();

    if (!this.isEmpty()) {
      this.heap[0] = lastNode;
      this.heapifyDown();
    }

    return root;
  }

  heapifyUp() {
    let index = this.size() - 1;
    while (index > 0) {
      const parentIndex = Math.floor((index - 1) / 2);
      if (this.heap[parentIndex] <= this.heap[index]) break;
      this.swap(parentIndex, index);
      index = parentIndex;
    }
  }

  heapifyDown() {
    let index = 0;
    const length = this.size();
    while (true) {
      let smallest = index;
      const leftChildIndex = 2 * index + 1;
      const rightChildIndex = 2 * index + 2;

      if (leftChildIndex < length && this.heap[leftChildIndex] < this.heap[smallest]) smallest = leftChildIndex;
      if (rightChildIndex < length && this.heap[rightChildIndex] < this.heap[smallest]) smallest = rightChildIndex;

      if (smallest === index) break;

      this.swap(smallest, index);
      index = smallest;
    }
  }

  size() {
    return this.heap.length;
  }

  isEmpty() {
    return this.heap.length === 0;
  }

  swap(idx1, idx2) {
    [this.heap[idx1], this.heap[idx2]] = [this.heap[idx2], this.heap[idx1]];
  }
}

const filePath = process.platform === 'linux' ? 'dev/stdin' : './input.txt';
const input = require('fs').readFileSync(filePath).toString().split('\n');

const n = +input[0];
const command = input.slice(1).map(Number);
const heap = new miniHeap();
const answer = [];
for (let i = 0; i < n; i++) {
  if (command[i] > 0) {
    heap.push(command[i]);
  } else {
    answer.push(heap.pop());
  }
}

console.log(answer.join('\n'));
