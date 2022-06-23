const batteryBatches = [4, 5, 3, 4, 4, 6, 5];

// function batteries(accValue, currentValue){

//     const ressult = accValue + currentValue;
//     return ressult;
// }
// const totalBatteries = batteryBatches.reduce(batteries);

// Code your solution here

const totalBatteries = batteryBatches.reduce(function(accValue, currentValue){
    return accValue + currentValue;
})