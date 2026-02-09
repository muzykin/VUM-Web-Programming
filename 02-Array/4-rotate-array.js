const rotateArray = (array, rotationsCount) => {
    if (!Array.isArray(array)) return undefined;
    if (array.length === 0) return [];

    const rotations = rotationsCount % array.length;
    if (rotations === 0) return array;
    return array.slice(-rotations).concat(array.slice(0, array.length - rotations));

}
console.log(rotateArray([1, 2, 3, 4], 2));
console.log(rotateArray(['Banana', 'Orange', 'Coconut', 'Apple'], 15));