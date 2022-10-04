const square = (n) => {
    return n * n;
}

const fahrenheit = (celsius) => {
    return celsius * 9 / 5 + 32;
}

const rectangleArea = (a, b) => {
    return a * b;
}

const isPalindrome = (str) => {
    return str.toLowerCase() === str.split('').reverse().join('').toLowerCase();
}
