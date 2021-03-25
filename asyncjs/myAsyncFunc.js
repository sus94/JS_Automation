// 3.	Implement 3 functions:
// 1)	Write loadArray() function which will return a Promise containing an array of objects (with properties id, name).
// 2)	Write getItem(array, id) function which will take an array and an id as parameters, and will
// 	find the first item from the given array which has id equal to the given id
// 	return a Promise containing the found element
// 	if there is no such element in the array, function should return an error message “There is no such item in the array!" using “reject()” option
// 3)	Write an async myAsyncFunc(id) function which will 
// 	call the loadArray() function and get the result
// 	call the getItem(array, id) function with array received from the previous step
// 	log the result from the previous step to the console
// 	add error handling (use try/catch)

function loadArray() {
    return new Promise(function (resolve) {
        const arr =	[
            {
                'id': 1,
                'name' : 'Susan'
        
            },
            {
                'id' : 2,
                'name' : 'John'
        
            },
        
            {
                'id' : 3,
                'name' : 'Bob'
        
            }
            
        ];
        resolve(arr);
    });
}



function getItem(array, id) {
    return new Promise((resolve, reject) => {
        const foundItem = array.find(item => item.id === id);
        if(foundItem) {
            resolve(foundItem);
        }
        reject('There is no such item in the array!');
    });
}


async function myAsyncFunc(id) {
    try {
        const userList = await loadArray();
        const result = await getItem(userList, id);
        console.log(result);
    } catch (err) {
        console.log(err);
    }
}

myAsyncFunc(5);
myAsyncFunc(1);
myAsyncFunc(2);
myAsyncFunc(3);
