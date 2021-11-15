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
        const testArr = [{
            title: 'Some title with Js'
            }, 
            {
            title: 'I like JS'
            },
            {
            user: 'This obj doesnt have key title js'
            }, 
            {
            title: 'C# - is the best!'
            }];
        it('transfer testArr, string - js', () => {
            expect(findTitle(testArr, 'js')).to.eql([{title: 'Some title with Js'}, {title: 'I like JS'}]);
        });
        it('transfer testArr, string - key, (title: user)', () => {
            expect(findTitle(testArr, 'key')).to.eql([]);
        });
        it('transfer testArr, string - html, (not in array)', () => {
            expect(findTitle(testArr, 'key')).to.eql([]);
        });
    });
    describe('The function must return an object in which the keys are the characters of the string, the value is the number of repetitions of characters in the string.', () => {
        it('transfer string  - sparrow', () => {
            expect(countCharacters('sparrow')).to.eql({s: 1, p: 1, a: 1, r: 2, o: 1, w: 1});
        });
        it('transfer string  - bobble', () => {
            expect(countCharacters('bobble')).to.eql({b: 3, o: 1, l: 1, e: 1});
        });
        it('transfer string  - a 2ab !d', () => {
            expect(countCharacters('a 2ab !d')).to.eql({a: 2, b:1, d:1, 2:1, '!':1});
        });
    });
    describe('The function should find the next larger positive palindrome.', () => {
        it('transfer namber  - 5', () => {
            expect(getNextPalindrome(5)).to.equal(11);
        });
        it('transfer namber  - 13', () => {
            expect(getNextPalindrome(13)).to.equal(22);
        });
        it('transfer namber  - -1', () => {
            expect(getNextPalindrome(-1)).to.equal(11);
        });
    });
    describe('Create a Set data structure using an object, create add, remove, has methods.', () => {
        it('transfer - 5, new set', () => {
            expect(getSet([1, 3, 3, 3, 2])).to.eql({ '1': 1,
                '2': 3,
                '3': 2,
                add: [],
                has: [],
                remove: [] });
        });
        it('transfer - 3, add', () => {
            expect(getSet([1, 3, 3, 3, 2]).add(3)).to.equal('3 already in Set');
        });
        it('transfer - 4, add', () => {
            expect(getSet([1, 3, 3, 3, 2]).add(4)).to.equal();
        });
        it('transfer - 4, has', () => {
            expect(getSet(([1, 3, 3, 3, 2 , 4])).has(4)).to.equal(true);
        });
        it('transfer - 3, remove', () => {
            expect(getSet(([1, 3, 3, 3, 2 , 4])).remove(3)).to.equal(undefined);
        });
    });
});