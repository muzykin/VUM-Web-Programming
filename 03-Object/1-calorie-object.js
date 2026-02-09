const calories = (array) => {
    const calorieObject = {}
    for (let i = 0; i < array.length - 1; i += 2) {
        const food = array[i]
        const calorie = Number(array[i + 1])
        calorieObject[food] = calorie
    }
    return calorieObject
}

console.log(calories(['Yoghurt', '48', 'Rise', '138', 'Apple', '52']))
console.log(calories(['Potato', '93', 'Skyr', '63', 'Cucumber', '18', 'Milk', '42']))