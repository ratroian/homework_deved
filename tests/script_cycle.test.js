describe ('Working cycles' , () => {
    describe('Find the sum of even numbers and their number in the range from 1 to 99.', () => {
        it('transfer 1-99', () => {
            expect(getSummOfRange(1, 99)).to.equal('49 quantity,  2450 summ');
        });
    });
    describe('Checking for a prime number', () => {
        it('transfer 11', () => {
            expect(getElementaryNumber(11)).to.equal('11 простое число');
        });
        it('transfer 12', () => {
            expect(getElementaryNumber(12)).to.equal('12 НЕ простое число');
        });
    });
    describe('Get square root', () => {
        it('transfer 11', () => {
            expect(getSquareRoot(11)).to.equal(3);
        });
        it('transfer 17', () => {
            expect(getSquareRoot(17)).to.equal(4);
        });
    });
    describe('Calculate the factorial of a number.', () => {
        it('transfer 4', () => {
            expect(getFactorial(4)).to.equal(24);
        });
        it('transfer 3', () => {
            expect(getFactorial(3)).to.equal(6);
        });
    });
    describe('Calculate the sum of the digits of a given number.', () => {
        it('transfer 3', () => {
            expect(getSumNumbers(3)).to.equal(3);
        });
        it('transfer 234', () => {
            expect(getSumNumbers(234)).to.equal(9);
        });
    });
    describe('Print a number that is a mirror image of a sequence of digits of a given number.', () => {
        it('transfer 32', () => {
            expect(getReversedValue(32)).to.equal(23);
        });
        it('transfer 234', () => {
            expect(getReversedValue(234)).to.equal(432);
        });
    });
});