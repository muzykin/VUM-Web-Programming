function timeToWalk(steps, footprint, speedKmH) {
    let distance = steps * footprint; 
    let speed = speedKmH * 1000 / 3600;

    let restTime = Math.floor(distance / 500) * 60; 
    let time = distance / speed + restTime; 

    let hours = Math.floor(time / 3600);
    let minutes = Math.floor((time % 3600) / 60);
    let seconds = Math.round(time % 60);

    console.log(
        `${String(hours).padStart(2, '0')}:` +
        `${String(minutes).padStart(2, '0')}:` +
        `${String(seconds).padStart(2, '0')}`
    );
}

timeToWalk(4000, 0.60, 5);