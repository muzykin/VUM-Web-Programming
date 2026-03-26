function solution() {
    let stock = {
        protein: 0,
        carbohydrate: 0,
        fat: 0,
        flavour: 0
    };

    let recipes = {
        apple: { carbohydrate: 1, flavour: 2 },
        lemonade: { carbohydrate: 10, flavour: 20 },
        burger: { carbohydrate: 5, fat: 7, flavour: 3 },
        eggs: { protein: 5, fat: 1, flavour: 1 },
        turkey: { protein: 10, carbohydrate: 10, fat: 10, flavour: 10 }
    };

    return function (input) {
        let [command, item, qty] = input.split(' ');
        qty = Number(qty);

        if (command === 'restock') {
            stock[item] += qty;
            return 'Success';
        }

        if (command === 'prepare') {
            let recipe = recipes[item];

            for (let ing in recipe) {
                if (stock[ing] < recipe[ing] * qty) {
                    return `Error: not enough ${ing} in stock`;
                }
            }

            for (let ing in recipe) {
                stock[ing] -= recipe[ing] * qty;
            }

            return 'Success';
        }

        if (command === 'report') {
            return `protein=${stock.protein} carbohydrate=${stock.carbohydrate} fat=${stock.fat} flavour=${stock.flavour}`;
        }
    };
}

let manager = solution();
console.log(manager("restock flavour 50"));
console.log(manager("prepare lemonade 4"));