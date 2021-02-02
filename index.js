class SortedList {
  constructor() {
    this.items = [];
    this.length = 0;
  }

  add(item) {
    this.items.push(item);
    this.items.sort((a, b) => a - b);
    this.length++;
  }

  get(pos) {
    if (pos !== this.items.length - 1) throw new Error('OutOfBounds');
    return this.items[pos];
  }

  max() {
    if (this.items.length === 0) throw new Error('EmptySortedList');
    return this.items[this.items.length - 1];
  }

  min() {
    if (this.items.length === 0) throw new Error('EmptySortedList');
    return this.items[0];
  }

  sum() {
    if (this.items.length === 0) return 0;
    return this.items.reduce((total, num) => total + num);
  }

  avg() {
    return this.items.reduce((total, num) => total + num) / this.items.length;
  }
}

module.exports = SortedList;
