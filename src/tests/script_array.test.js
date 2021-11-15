describe ('Working arrays' , () => {
    describe('Finding the minimum element of an array.', () => {
        it('transfer [2, 3, 5, 3]', () => {
            expect(getMinElement([2, 3, 5, 3])).to.equal(2);
        });
    });
    describe('Finding the maximum element of an array.', () => {
        it('transfer [2, 3, 5, 3]', () => {
            expect(getMaxElement([2, 3, 5, 3])).to.equal(5);
        });
    });
    describe('Find the index of the minimum element of an array.', () => {
        it('transfer [2, 3, 5, 3]', () => {
            expect(getMinIndexElement([2, 3, 5, 3])).to.equal(0);
        });
    });
    describe('Find the index of the maximum element of an array.', () => {
        it('transfer [2, 3, 5, 3]', () => {
            expect(getMaxIndexElement([2, 3, 5, 3])).to.equal(2);
        });
    });
    describe('We count the sum of array elements with odd indices.', () => {
        it('transfer [2, 3, 5, 3]', () => {
            expect(getSumNoPairIndex([2, 3, 5, 3])).to.equal(`Summ 6`);
        });
    });
    describe('We count the quantity of array elements with odd indices.', () => {
        it('transfer [2, 3, 5, 3]', () => {
            expect(getQuantityNoPairIndex([2, 3, 5, 3])).to.equal(`quantity 2`);
        });
    });
    describe('Swap the first and second half of the array.', () => {
        it('transfer [2, 3, 5, 3]', () => {
            expect(mixArray([2, 3, 5, 3])).to.eql([ 5, 3, 2, 3 ]);
        });
    });
    describe('Sort the array (Bubble).', () => {
        it('transfer [2, 3, 5, 3]', () => {
            expect(getBubbleSort([2, 3, 5, 3])).to.eql([ 2, 3, 3, 5 ]);
        });
    });
    describe('Sort the array (Selection).', () => {
        it('transfer [2, 3, 5, 3]', () => {
            expect(getSelectionSort([2, 3, 5, 3])).to.eql([ 2, 3, 3, 5 ]);
        });
    });
    describe('Sort the array (Insert).', () => {
        it('transfer [2, 3, 5, 3]', () => {
            expect(getInsertSort([2, 3, 5, 3])).to.eql([ 2, 3, 3, 5 ]);
        });
    });
});