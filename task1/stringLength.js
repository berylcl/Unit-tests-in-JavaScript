//function stringLength(string) that takes any string as an argument and returns its characters count.
function stringLength(string) {
    const length = string.length;
    if (length < 1 || length > 10) {
        throw new Error('String length should be between 1 and 10 characters.');
    }
    return length;
}

module.exports = stringLength;