describe ('Working closers tasks' , () => {
    describe('Can sell a ticket to everyone and return the change?', () => {
        it('transfer [25, 25, 25, 100, 25, 50, 25, 50]', () => {
            expect(tickets([25, 25, 25, 100, 25, 50, 25, 50])).to.equal('Yes');
        });
        it('transfer [50, 25, 25]', () => {
            expect(tickets([50, 25, 25])).to.equal('No');
            });
        it('transfer [100, 25, 25]', () => {
            expect(tickets([100, 25, 25])).to.equal('No');
            });
    });
    describe('A function that takes two infinite numbers as strings.', () => {
        it('transfer 333333 999999 ', () => {
            expect(getSum('333333', '999999')).to.equal('1333332');
        });
        it('transfer 333333 555555 ', () => {
            expect(getSum('333', '555555')).to.equal('555888');
        });
    });
    describe('A function that takes two infinite numbers as strings.', () => {
        it('transfer 333333 999999 ', () => {
            expect(getSum('333333', '999999')).to.equal('1333332');
        });
        it('transfer 333333 555555 ', () => {
            expect(getSum('333', '555555')).to.equal('555888');
        });
    });
    describe('The function should return the number of posts with the author from the function argument and comments with the same author.', () => {
        it('transfer listOfPosts2 ', () => {
            expect(getQuantityPostsByAuthor(listOfPosts2, 'Uncle')).to.equal(`Posts 1, comments 2`);
        });
    });
});