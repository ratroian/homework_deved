describe('On HTML', function () {
    beforeAll(() => {
        document.body.innerHTML = `<h1>SlideShow</h1>`;
    });

    it('should not change header', function () {
        expect(document.querySelector('h1').textContent).toBe('SlideShow');
    });
});