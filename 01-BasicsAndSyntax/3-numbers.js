function sameNumbers(num) {
    let str = num.toString();
    let isSame = true;
    let sum = 0;

    for (let i = 0; i < str.length; i++) {
        sum += Number(str[i]);
        if (str[i] !== str[0]) {
            isSame = false;
        }
    }

    console.log(isSame);
    console.log(sum);
}

sameNumbers(2222222);