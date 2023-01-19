// The code below finds the sum of all the multiples of 3 or 5 below the provided parameter value number.
function multiplesOf3and5(number) {
    let total = 0;
    for (let multipleNumber = 0; multipleNumber < number; multipleNumber++) {
        if (multipleNumber % 3 === 0 || multipleNumber % 5 === 0){
            total += multipleNumber;
        }
    }
    return total;
}

console.log(multiplesOf3and5(10));
multiplesOf3and5(10);