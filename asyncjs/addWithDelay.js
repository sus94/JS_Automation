// Implement a function addWithDelay() which will work with parameters according to the conditions below:

// •	If all parameters are positive numbers, it should return within 1000ms timeframe a Promise containing a sum of all the numbers provided as parameters 
// •	If   any parameter is   represented by a   negative number, function should return an error message “Error! Some parameter is a negative number!" using “reject()” option */


function addWithDelay(arr) {
    let sum = 0;

    return new Promise(function (resolve, reject) {
        arr.forEach(function (val) {
            if(val < 0) {
                setTimeout(() => reject('Error'), 1000); 
            } 
            sum += val;

            return sum;
        });
        setTimeout(() => resolve(sum), 1000);
    });
}


addWithDelay([1, -2, 3, 1])
    .then(res => console.log(res))
    .catch(err => console.log(err));

addWithDelay([1, 2, 3, 1])
    .then(res => console.log(res))
    .catch(err => console.log(err));
