class MinHeap {
  constructor() {
    this.heap = [];
  }

  push(value) {
    this.heap.push(value);
    this.heapifyUp();
  }

  heapifyUp() {
    let index = this.heap.length - 1;

    while (index > 0) {
      let parentIndex = Math.floor((index - 1) / 2);
      if (this.heap[parentIndex] <= this.heap[index]) break;
      this.swap(parentIndex, index);
      index = parentIndex;
    }
  }

  pop() {
    if (this.isEmpty()) return null;

    const root = this.heap[0];
    const lastNode = this.heap.pop();

    if (!this.isEmpty()) {
      this.heap[0] = lastNode;
      this.heapifyDown();
    }

    return root;
  }

  heapifyDown() {
    let index = 0;
    const length = this.heap.length;

    while (true) {
      let smallest = index;
      const leftChildIndex = 2 * index + 1;
      const rightChildIndex = 2 * index + 2;
      if (leftChildIndex < length && this.heap[smallest] > this.heap[leftChildIndex]) {
        smallest = leftChildIndex;
      }
      if (rightChildIndex < length && this.heap[smallest] > this.heap[rightChildIndex]) {
        smallest = rightChildIndex;
      }
      if (index === smallest) break;
      this.swap(index, smallest);
      index = smallest;
    }
  }

  isEmpty() {
    return this.heap.length === 0;
  }

  swap(idx1, idx2) {
    [this.heap[idx1], this.heap[idx2]] = [this.heap[idx2], this.heap[idx1]];
  }
}

const filePath = process.platform === 'linux' ? '/dev/stdin' : './input.txt';
const input = require('fs').readFileSync(filePath).toString().split('\n');

const [_, m] = input[0].split(' ').map(Number);
const cards = input[1].split(' ').map(BigInt);

const minHeap = new MinHeap();

for (const num of cards) {
  minHeap.push(num);
}

for (let i = 0; i < m; i++) {
  const first = minHeap.pop();
  const second = minHeap.pop();
  const sum = first + second;
  minHeap.push(sum);
  minHeap.push(sum);
}

let total = 0n;

for (const num of minHeap.heap) {
  total += num;
}

total = total.toString();

console.log(total);
