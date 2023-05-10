const { reverseString } = require('./reverseString');

test('reverseString should reverse the given string', () => {
    expect(reverseString('hello')).toBe('olleh');
});
