function addRemove(commands) {
    let result = [];
    let num = 1;

    for (let command of commands) {
        if (command === 'add') {
            result.push(num);
        } else if (command === 'remove') {
            result.pop();
        }
        num++;
    }

    if (result.length === 0) {
        console.log('Empty');
    } else {
        console.log(result.join('\n'));
    }
}

addRemove(['add', 'add', 'remove', 'add', 'add']);