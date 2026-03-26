function carFactory(order) {
    let engines = [
        { power: 90, volume: 1800 },
        { power: 120, volume: 2400 },
        { power: 200, volume: 3500 }
    ];

    let engine = engines.find(e => e.power >= order.power);

    let carriage = {
        type: order.carriage,
        color: order.color
    };

    let wheelSize = order.wheelsize % 2 === 0 
        ? order.wheelsize - 1 
        : order.wheelsize;

    let wheels = [wheelSize, wheelSize, wheelSize, wheelSize];

    return {
        model: order.model,
        engine,
        carriage,
        wheels
    };
}

console.log(carFactory({
    model: 'VW Golf II',
    power: 90,
    color: 'blue',
    carriage: 'hatchback',
    wheelsize: 14
}));