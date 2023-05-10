const stringLength = require('./stringLength');

test('stringLength should return correct length of the string', () => {
    expect(stringLength('hello')).toBe(5);
});

test('stringLength should throw error if string is less than 1 character long', () => {
    expect(() => stringLength('')).toThrowError('String length should be between 1 and 10 characters.');
});

test('stringLength should throw error if string is longer than 10 characters', () => {
    expect(() => stringLength('this is a very long string')).toThrowError('String length should be between 1 and 10 characters.');
});
