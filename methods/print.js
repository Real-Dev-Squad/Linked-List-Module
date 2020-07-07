function print() {
  let currentNode = this._head;
  while (currentNode) {
    console.log(currentNode);
    currentNode = currentNode.next;
  }
}

module.exports = print;
