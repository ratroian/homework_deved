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
    describe('indicates a quarter depending on coordinates', () => {
        it('should multiply two numbers', () => {
            expect(getMathResult(2, 2)).to.equal(4);
        });
        it('should divide two numbers', () => {
            expect(getMathResult(3, 2)).to.equal(5);
        });
    });
});