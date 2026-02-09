const orderArray = (array) => {
     return array.sort((a, b) => {
        const lengthDiff = a.length - b.length;
        if (lengthDiff !== 0) {
            return lengthDiff;
        }
        
        const aLower = a.toLowerCase();
        const bLower = b.toLowerCase();
        
        if (aLower < bLower) return -1;
        if (aLower > bLower) return 1;
        return 0;
    });
}

console.log(orderArray(['alpha', 'beta', 'gamma']));
console.log(orderArray(['Isacc', 'Theodor', 'Jack', 'Harrison', 'George']));
console.log(orderArray(['test', 'Deny', 'omen', 'Default']));