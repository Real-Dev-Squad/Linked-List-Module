class Node {
	constructor(element) {
		this.element = element;
		this.next = null;
	}
}

class LinkedList {
	constructor() {
		this.head = null;
		this.count = 0;
	}

	getElementAt(index) {
		if (index < 0 || index > this.count) return undefined;

		let current = this.head;
		for (let i = 0; i < index && current !== null; i++) {
			current = current.next;
		}
		return current;
	}
	removeAt(index) {
		if (index < 0 || index > this.count) return undefined;
		let current = this.head;
		if (!current) return undefined;

		if (index === 0) {
			this.head = current.next;
		} else {
			const previous = this.getElementAt(index - 1);
			const current = previous.next;
			previous.next = current.next;
		}
		this.count--;
		return current.element;
	}
	add(element, index) {
		const newNode = new Node(element);
		let current = this.head;
		if (index === 0 || !index) {
			newNode.next = current;
			this.head = newNode;
		} else if (index < 0 || index > this.count) return undefined;
		else {
			const prevNode = this.getElementAt(index - 1);
			current = prevNode.next;
			prevNode.next = newNode;
			newNode.next = current;
		}
		this.count++;
		return true;
	}
	indexOf(element) {
		let current = this.head;
		for (let i = 0; i < this.count; i++) {
			if (element === current.element) return i;
			current = current.next;
		}
		return -1;
	}
	remove(element) {
		const index = this.indexOf(element);
		this.removeAt(index);
	}
	isEmpty() {
		return this.size() === 0;
	}
	size() {
		return this.count;
	}
	getHead() {
		return this.head;
	}
	print() {
		if (this.isEmpty()) return [];
		let current = this.head;
		let resultArray = [];

		for (let i = 0; i < this.size(); i++) {
			resultArray.push(current.element);
			current = current.next;
		}
		return resultArray;
	}

	reverse() {
		let prev = null;
		let current = this.head;
		let nextNode;
		while (current !== null) {
			nextNode = current.next;
			current.next = prev;
			prev = current;
			current = nextNode;
		}
		return prev;
	}
}

const list = new LinkedList();
list.add({ a: 1 });
list.add(10);
list.add(20, 1);

console.log(list.print());
console.log(list.reverse());
