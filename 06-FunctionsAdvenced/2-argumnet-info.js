function argumentInfo(...args) {
    let counts = {};

    for (let arg of args) {
        let type = typeof arg;
        console.log(`${type}: ${arg}`);

        if (!counts[type]) {
            counts[type] = 0;
        }
        counts[type]++;
    }

    let sorted = Object.entries(counts)
        .sort((a, b) => b[1] - a[1]);

    for (let [type, count] of sorted) {
        console.log(`${type} = ${count}`);
    }
}

argumentInfo('cat', 42, function () { console.log('Hello world!'); });