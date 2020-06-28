"use strict";

function Node(data = null, next = null) {
  this.data = data;
  this.next = next;
}

function LL(data) {
  let head = new Node(data);
  this._head = head;
  this._tail = head;
  this.length = 1;
}

LL.prototype.add = function add(data, index) {
  if (typeof index === "number") {
    // Changing Head Node for index 0
    if (index === 0) {
      let node = new Node(data);
      node.next = this._head;
      this._head = node;
      this.length++;

      return this._head;
    }

    let i = 0;
    let currentNode = this._head;
    while (i <= index && currentNode) {
      if (i === index - 1) {
        let node = new Node(data);
        let nextNode = currentNode.next;
        currentNode.next = node;
        node.next = nextNode;
        this.length++;

        // Changing tail node
        if (!nextNode) {
          this._tail = node;
        }

        return this._head;
      }

      currentNode = currentNode.next;
      i++;
    }

    return this._head;
  } else {
    let node = new Node(data);

    this._tail.next = node;
    this._tail = node;
    this.length++;

    return this._head;
  }
};

LL.prototype.get = function (index) {
  if (typeof index === "number") {
    let i = 0;
    let currentNode = this._head;
    while (i <= index && currentNode) {
      if (i === index) {
        return currentNode;
      }

      i++;
      currentNode = currentNode.next;
    }

    return null;
  } else {
    return null;
  }
};

LL.prototype.reverse = function (index) {
  function reverse(node) {
    if (!node) {
      return null;
    }

    let tail = reverse(node.next);
    if (tail) {
      tail.next = node;
      node.next = null;
    }

    return node;
  }

  let newTail = reverse(this._head);
  this._head = this._tail;
  this._tail = newTail;

  return this._head;
};

LL.prototype.print = function () {
  let currentNode = this._head;
  while (currentNode) {
    console.log(currentNode);
    currentNode = currentNode.next;
  }
};

let newLL = new LL({ 0: 1 });
newLL.add({ 2: 3 });
newLL.add({ 4: 5 });
newLL.add({ 6: 7 });
console.log(newLL.print());
console.log(newLL.reverse());
console.log(newLL.print());
