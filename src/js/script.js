const itemTemplate = document.querySelector('#list-item-template').content
const templateData = itemTemplate.querySelector('.data')
const templatePointer = itemTemplate.querySelector('.pointer');
const listUL = document.querySelector('.list');
let element;

const renderLinkedList = (linkedList) => {
    let currentNode = linkedList.head
    listUL.innerHTML = '';
    while (true) {
        templateData.textContent = currentNode.data;
        if(currentNode.next === null) {
            templatePointer.textContent = 'null'
            element = itemTemplate.cloneNode(true);
            listUL.appendChild(element);
            break
        }
        templatePointer.textContent = currentNode.next.data
        element = itemTemplate.cloneNode(true);
        listUL.appendChild(element);
        currentNode = currentNode.next
        if(currentNode === null) {
            break
        }
    }
};

class Node {
    constructor(data, next = null) {
        this.data = data
        this.next = next
    }
}

class LinkedList {
    constructor() {
        this.head = null
        this.tail = null
    }

    append(data) {
        const node = new Node(data)

        if (this.tail) {
            this.tail.next = node
        }

        if (!this.head) {
            this.head = node
        }

        this.tail = node

        renderLinkedList(this)
    }

    toArray() {
        const output = []
        let current = this.head

        while (current) {
            output.push(current)
            current = current.next
        }

        return output
    }

    searchValue(index) {
        const output = []
        let result;
        let current = this.head

        while (current) {
            output.push(current)
            current = current.next
        }
        result = output[index];

        return result;
    }

    searchIndex(value) {
        const output = []
        let result;
        let current = this.head

        while (current) {
            output.push(current.data)
            current = current.next
        }
        result = output.indexOf(value);

        return result;
    }

    toArrayLength() {
        const output = []
        let current = this.head

        while (current) {
            output.push(current)
            current = current.next
        }

        return output.length
    }

    remove(data) {
        if (!this.head) {
            return
        }

        while (this.head && this.head.data === data) {
            this.head = this.head.next
        }

        let current = this.head
        while (current.next) {
            if (current.next.data === data) {
                current.next = current.next.next
            } else {
                current = current.next
            }
        }

        if (this.tail.data === data) {
            this.tail = current
        }
        renderLinkedList(this)
    }

    deleteTail() {
        if (!this.tail) {
            return null;
        }
        const deletedTail = this.tail;

        if (this.head === this.tail) {
            this.head = null;
            this.tail = null;

            return deletedTail;
        }

        let currentNode = this.head;
        while (currentNode.next) {
            if (!currentNode.next.next) {
                currentNode.next = null;
            } else {
                currentNode = currentNode.next;
            }
        }

        this.tail = currentNode;
        renderLinkedList(this)

        return deletedTail;
    }

    find(value) {
        if (!this.head) {
            return null;
        }
        let currentNode = this.head;
        while (currentNode) {
            if (value !== undefined && currentNode.value === value) {
                return currentNode;
            }

            currentNode = currentNode.next;
        }
        return currentNode;
    }

    fromArray(values) {
        values.forEach(value => this.append(value));
        renderLinkedList(this)
        return this;
    }
}

const list = new LinkedList()



// list.prepend('Hi')
// list.append('My')
// list.append('name')
// // list.append('is')
// list.append('Slim')
// list.append('Shady')
//
// list.insertAfter('name', 'is')
//
// list.prepend(42)
// list.append(24)
// // list //?
//
// list.remove(42)
// list.remove(24)
// console.log(list.toArray())



// const addToList = (value) => {
//     list.prepend(value)
//     templateData.textContent = value
//     templatePointer.textContent = 'null'
//     element = itemTemplate.cloneNode(true);
//     listUL.appendChild(element);
//
// };





// addToList('Hi')
// renderLinkedList(list)
// console.log(list)