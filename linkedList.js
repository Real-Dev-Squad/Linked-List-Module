'use strict'

function node(data, next) {
    this.data = data;
    this.next = null;
}

function linkedList() {
    this.head = null;
    this.tail = null;
    this.length = 0;
}

linkedList.prototype.add = function (data, index = null) {

    if (data == null || data == undefined) return null;

    var newNode = new node(data);
    var status;
    if (index === null) {
        status = insertAtEnd.call(this, newNode);
    } else {
        status = insertAtIndex.call(this, newNode, index);
    }
    if (!status) return status;

    return this;
}

linkedList.prototype.remove = function (index = null) {

    var status = false;

    if (index !== null) {
        status = removeFromIndex.call(this, index);
    }
    else {
        status = removeFromEnd.call(this);
    }

    return status;
}

linkedList.prototype.getElement = function (index) {
    if (!isInRange(this.length - 1, index)) return null;
    var current = this.head;
    var i = 0;
    while (i !== index) {
        current = current.next;
        ++i;
    }

    return current.data;
}

linkedList.prototype.reverse = function () {
    if(!this.head) return;
    let previous = null;
    let current = this.head;
    let next = current.next;
    this.tail = this.head
    current.next = null
    while (next) {
        previous = current;
        current = next;
        next = next.next;
        current.next = previous;
    }
    this.head = current;
    return this;
}

linkedList.prototype.getAllNodes = function () {
    var current = this.head;
    var data = [];

    while (current) {
        data.push(current.data);
        current = current.next;
    }
    return data;
}

// Remove functions

function removeFromBegin() {
    if (!this.head) return null
    var current = this.head;
    this.head = this.head.next;
    current.next = null;
    --this.length;
    if (this.length === 0) {
        this.tail = null;
    }
    return this.head;
}

function removeFromIndex(index) {
    if (!isInRange(this.length - 1, index)) return false;
    var current = this.head;
    if (index === 0) {
        current = removeFromBegin.call(this);
    } else if (index === this.length - 1) {
        current = removeFromEnd.call(this);
    } else {
        var i = 0;
        while (i !== index) {
            current = current.next;
            ++i;
        }
        var temp = current.next;
        current.next = current.next.next;
        temp.next = null;
        --this.length;
    }
    return current;

}

function removeFromEnd() {

    if (!this.length) return false;

    var current = this.head;
    var previous = current;
    while (current.next) {
        previous = current;
        current = current.next;
    }

    previous.next = null;
    this.tail = previous;
    --this.length;

    if (this.length === 0) {
        this.head = null;
        this.tail = null;
    }

    return current;
}

// Insert Functions

function insertAtBegin(node) {
    node.next = this.head;
    this.head = node;
    if (this.length === 0) {
        this.tail = this.head;
    }
    ++this.length;
    return this.head;
}

function insertAtEnd(node) {

    if (isHeadEmpty.call(this)) {
        this.head = node;
        this.tail = node;
    }
    else {
        this.tail.next = node;
        this.tail = node;
    }

    ++this.length;

    return this.head;
}

function insertAtIndex(node, index) {

    if (!isInRange(this.length, index)) return null;
    var current = this.head;
    if (index === 0) {
        current = insertAtBegin.call(this, node);
    } else if (index === this.length) {
        current = insertAtEnd.call(this, node)
    }
    else {
        var i = 0;
        while (i !== index - 1) {
            current = current.next;
            i++;
        }
        node.next = current.next;
        current.next = node;
        ++this.length;
    }

    return current;

}

// Additioanl Functions

function isHeadEmpty() {
    if (!this.head) return true;
    return false;
}

function isInRange(length, index) {
    if (index > -1 && index <= length) {
        return true;
    }
    return false;
}

module.exports = linkedList;

