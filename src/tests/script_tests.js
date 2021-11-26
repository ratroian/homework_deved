describe('Linked List', () => {
    const linkedList = new LinkedList()
    describe('On create instanse of constructor LinkedList', function () {
        it('should create empty linked list', function () {
            expect(linkedList.toArray().length).to.be.eql(0);
        });
    })
    describe('append element LinkedList', function () {
        it('create element', function () {
            linkedList.append(1);
            expect(linkedList.toArray().length).to.be.eql(1);
            linkedList.append(2);
            expect(linkedList.toArray().length).to.be.eql(2);
        });
    })
    describe('remove element LinkedList', function () {
        it('remove element', function () {
            linkedList.remove(1);
            expect(linkedList.toArray().length).to.be.eql(1);
        });
    })
    describe('delete tail LinkedList', function () {
        it('delete tail', function () {
            const linkedListTail = new LinkedList();
            linkedListTail.fromArray([1, 3, 4, 5]);
            linkedListTail.deleteTail();
            expect(linkedListTail.toArray().length).to.be.eql(3);
        });
    })
    describe('length LinkedList', function () {
        it('length', function () {
            const linkedListTail = new LinkedList();
            linkedListTail.fromArray([1, 3, 4, 5]);
            expect(linkedListTail.toArray().length).to.be.eql(4);
        });
    })
    describe('LinkedList from array', function () {
        it('array', function () {
            const linkedListTail = new LinkedList();
            linkedListTail.fromArray([1, 3, 4, 5]);
            expect(linkedListTail.toArray().length).to.be.eql(4);
        });
    })
    describe('LinkedList search index', function () {
        it('search index', function () {
            const linkedList3 = new LinkedList();
            linkedList3.fromArray([1, 3, 4, 5]);
            expect(linkedList3.searchIndex(3)).to.be.eql(1);
        });
    })
    describe('LinkedList search value', function () {
        it('search value', function () {
            const linkedList4 = new LinkedList();
            linkedList4.fromArray([1, 3, 4, 5]);
            expect(linkedList4.searchValue(1)).to.be.eql({ data: 3,
                next: { data: 4, next: { data: 5, next: null } } });
        });
    })
})