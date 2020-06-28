"use strict";
const Node = require("./node");

function LL(data) {
  let head = new Node(data);
  this._head = head;
  this._tail = head;
  this.length = 1;
}

LL.prototype.add = function add(data, index) {
  if (typeof index === "number") {
    if (index === 0) {
      // Changing the head node
      let node = new Node(data);
      node.next = this._head;
      this._head = node;
      this.length++;

      return this;
    }

    let i = index;
    let currentNode = this._head;
    while (currentNode) {
      i--;

      if (i === 0) {
        let node = new Node(data);
        let nextNode = currentNode.next;
        currentNode.next = node;
        node.next = nextNode;
        this.length++;

        // Changing tail node
        if (!nextNode) {
          this._tail = node;
        }

        return this;
      }

      currentNode = currentNode.next;
    }

    return this;
  } else {
    let node = new Node(data);

    this._tail.next = node;
    this._tail = node;
    this.length++;

    return this;
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

  return this;
};

LL.prototype.print = function () {
  let currentNode = this._head;
  while (currentNode) {
    console.log(currentNode);
    currentNode = currentNode.next;
  }
};

module.exports = LL;
