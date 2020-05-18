class Node {
    constructor(value) {
        this.value = value;
        this.next = null;
    }
}
// add  // get 
class LinkedList {
    constructor() {
        this.head = null;
        this.size = 0;
        this.reverseHead = null;
    }

    get length() {
        return this.size;
    }

    print(start) {
        let temp = start;
        let myList = [];
        while (temp != null) {
            myList.push(temp.value);
            temp = temp.next;
        }
        return myList;
    }

    createList(arr) {
        let head = new Node(arr[0]);
        let tail = head;
        for (let i = 1; i < arr.length; ++i) {
            let temp = new Node(arr[i]);
            tail.next = temp;
            tail = temp;
        }
        return head;
    }

    add(value, index = null) {
            if (this.head == null) {
                // first insertion 
                this.head = new Node(value);

            } else if (index == null) {
                let temp = this.head;
                while (temp.next != null) {
                    // find tail 
                    temp = temp.next;
                }
                temp.next = new Node(value);

            } else if (index == 0) {
                let temp = this.head;
                this.head = new Node(value);
                this.head.next = temp;

            } else {
                // insertion at index 
                let count = 0;
                let temp = this.head;
                let prev = null;
                while (count < index) {
                    prev = temp;
                    temp = temp.next;
                    count++;
                }
                prev.next = new Node(value);
                prev.next.next = temp;


            }
            this.size++;



        }
        // return the value if node exist 
    get(index) {

        if (index >= this.size) {
            return null;
        }
        let temp = this.head;
        let count = 0;
        while (count < index) {
            temp = temp.next;
            count++;
        }
        return temp.value;

    }

    delete(index) {
        // adjust the size also // special case head deletion 
        if (index >= this.size) {
            throw new Error('node does not exist');
        }

        if (index == 0) {
            let temp = this.head;
            this.head = temp.next;


        } else {
            let temp = this.head;
            let prev = null;
            let count = 0;
            while (count < index) {
                prev = temp;
                temp = temp.next;
                count++;
            }
            prev.next = temp.next;

        }
        this.size--;
    }

    reverse() {
        // head is null 
        if (!this.head) {
            throw error('empty list');
        }
        // get the print of linked list and create a new linked list
        let arr = this.print(this.head).reverse();
        this.reverseHead = this.createList(arr);

    }


};


module.exports = LinkedList;