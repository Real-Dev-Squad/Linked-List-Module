const Node = require("../constructors/node");

function add(data, index) {
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
        node.next = currentNode.next;
        currentNode.next = node;
        this.length++;

        // Changing tail node
        if (!node.next) {
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
}

module.exports = add;
