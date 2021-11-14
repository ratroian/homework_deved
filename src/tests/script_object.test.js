describe ('Working objects' , () => {
    describe('Algorithm that calculates how long you need to cook eggs.', () => {
        it('transfer 3', () => {
            expect(getCookingTime(3)).to.equal(5);
        });
        it('transfer 6', () => {
            expect(getCookingTime(6)).to.equal(10);
        });
        it('transfer 11', () => {
            expect(getCookingTime(11)).to.equal(15);
        });
        it('transfer 0', () => {
            expect(getCookingTime(0)).to.equal(0);
        });
    });
    describe('Getting an array of numbers. They are all either odd or even, except for one.', () => {
        it('transfer [1, 3, 5, 7, 4]', () => {
            expect(getNumber([1, 3, 5, 7, 4])).to.equal(4);
        });
        it('transfer [2, 4, 5, 8, 8]', () => {
            expect(getNumber([2, 4, 5, 8, 8])).to.equal(5);
        });
    });
    describe('Algorithm that filters the array given as the first parameter and returns an array of objects that contain the given string as the second parameter in their headers (case insensitive)', () => {
        it('transfer [1, 3, 5, 7, 4]', () => {
            expect(getNumber([1, 3, 5, 7, 4])).to.equal(4);
        });
        it('transfer [2, 4, 5, 8, 8]', () => {
            expect(getNumber([2, 4, 5, 8, 8])).to.equal(5);
        });
    });
});