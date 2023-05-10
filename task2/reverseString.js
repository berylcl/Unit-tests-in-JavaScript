// function reverseString(string) function. It should take a string as an argument and return it reversed.
function reverseString(string) {
    return string.split('').reverse().join('');
}

module.exports = {
    reverseString
};
