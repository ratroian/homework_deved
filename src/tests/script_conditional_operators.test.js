describe ('working conditional operators' , () => {
    describe('Get Math result', () => {
        it('should multiply two numbers', () => {
            expect(getMathResult(2, 2)).to.equal(4);
            expect(getMathResult(2, 32)).to.equal(64);
            expect(getMathResult(2, -2)).to.equal(-4);
        });
        it('should divide two numbers', () => {
            expect(getMathResult(3, 2)).to.equal(5);
            expect(getMathResult(5, 5)).to.equal(10);
        });
    });
    describe('Indicates a quarter depending on coordinates', () => {
        it('transfer x = 2, y = 2', () => {
            expect(getQuarterPoint(2, 2)).to.equal('1 quarter');
        });
        it('transfer x = -2, y = 2', () => {
            expect(getQuarterPoint(-2, 2)).to.equal('2 quarter');
        });
        it('transfer x = -2, y = -2', () => {
            expect(getQuarterPoint(-2, -2)).to.equal('3 quarter');
        });
        it('transfer x = 2, y = -2', () => {
            expect(getQuarterPoint(2, -2)).to.equal('4 quarter');
        });
    });
    describe('Searches for the sums of only positives of three numbers firstValue, secondValue, thirdValue', () => {
        it('transfer firstValue = 1, secondValue = 1, thirdValue = 1', () => {
            expect(getSumm(1, 1, 1)).to.equal(3);
        });
        it('transfer firstValue = -1, secondValue = 1, thirdValue = 1', () => {
            expect(getSumm(-1, 1, 1)).to.equal(2);
        });
        it('transfer firstValue = -1, secondValue = -1, thirdValue = -1', () => {
            expect(getSumm(-1, -1, -1)).to.equal(0);
        });
    });
    describe('Calculate the expression (max (a * b * c, a + b + c)) + 3', () => {
        it('transfer firstValue = 1, secondValue = 1, thirdValue = 1', () => {
            expect(calculateNumbers(1, 1, 1)).to.equal(6);
        });
        it('transfer firstValue = 2, secondValue = 2, thirdValue = 2', () => {
            expect(calculateNumbers(2, 2, 2)).to.equal(11);
        });
    });
    describe('A program for determining a students assessment by his rating, based on the following rules', () => {
        it('transfer rating = 10', () => {
            expect(getRating(10)).to.equal('Оценка F');
        });
        it('transfer rating = 20', () => {
            expect(getRating(20)).to.equal('Оценка E');
        });
        it('transfer rating = 40', () => {
            expect(getRating(40)).to.equal('Оценка D');
        });
        it('transfer rating = 60', () => {
            expect(getRating(60)).to.equal('Оценка C');
        });
        it('transfer rating = 75', () => {
            expect(getRating(75)).to.equal('Оценка B');
        });
        it('transfer rating = 90', () => {
            expect(getRating(90)).to.equal('Оценка A');
        });
        it('transfer rating = 110', () => {
            expect(getRating(110)).to.equal('Error');
        });
    });
});