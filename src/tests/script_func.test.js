describe ('working functions' , () => {
    describe('We get the string name of the day of the week by the day number.', () => {
        it('transfer day number 1', () => {
            expect(getDay(1)).to.equal('Понедельник');
        });
        it('transfer day number 2', () => {
            expect(getDay(2)).to.equal('Вторник');
        });
        it('transfer day number 3', () => {
            expect(getDay(3)).to.equal('Среда');
        });
        it('transfer day number 4', () => {
            expect(getDay(4)).to.equal('Четверг');
        });
        it('transfer day number 5', () => {
            expect(getDay(5)).to.equal('Пятница');
        });
        it('transfer day number 6', () => {
            expect(getDay(6)).to.equal('Суббота');
        });
        it('transfer day number 7', () => {
            expect(getDay(7)).to.equal('Воскресенье');
        });
        it('transfer day number 8', () => {
            expect(getDay(8)).to.equal('Неверные данные');
        });
    });
    describe('Find the distance between two points in 2D space.', () => {
        it('transfer first point (1, 1) second point (2, 2)', () => {
            expect(getDistance(1, 2, 1, 2)).to.equal('1.41');
        });
    });
    describe('Enter the number (0-999), we get a line with the words of the number.', () => {
        it('transfer 1', () => {
            expect(getNumberToText(1)).to.equal('один');
        });
        it('transfer 20', () => {
            expect(getNumberToText(20)).to.equal('двадцать ');
        });
        it('transfer 88', () => {
            expect(getNumberToText(88)).to.equal('восемьдесят восемь');
        });
        it('transfer 100', () => {
            expect(getNumberToText(100)).to.equal('сто  ');
        });
        it('transfer 333', () => {
            expect(getNumberToText(333)).to.equal('триста тридцать три');
        });
        it('transfer 333', () => {
            expect(getNumberToText(1234)).to.equal('Что-то пошло не так!');
        });
    });
});