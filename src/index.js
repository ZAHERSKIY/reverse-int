module.exports = function reverse(n) {
    let str = n.toString(10);
    let reverseValue = str.split("").reverse().join("");

    return parseInt(reverseValue);
};
