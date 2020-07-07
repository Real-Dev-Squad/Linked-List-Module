function get(index) {
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
}

module.exports = get;
