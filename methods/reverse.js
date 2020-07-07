function reverse() {
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
}

module.exports = reverse;
