function add(num) {
    let sum = num;

    function inner(next) {
        sum += next;
        return inner;
    }

    inner.toString = function () {
        return sum;
    };

    return inner;
}

console.log(add(1));          // 1
console.log(add(1)(6)(-3));   // 4