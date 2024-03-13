const batteryBatches = [4, 5, 3, 4, 4, 6, 5];

// Code your solution here



// holds the sum of all of the battery amounts in the batteryBatches


const totalBatteries = batteryBatches.reduce(function (accumulator, currentValue) {
    return accumulator + currentValue;
}, 0);
console.log(totalBatteries);

