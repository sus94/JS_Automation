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


// 1
const loadArray = new Promise((resolve, reject) => {
    const userList = [
        {
            id: 1,
            name: 'poxos 01'
        },
        {
            id: 2,
            name: 'poxos 02'
        },
        {
            id: 3,
            name: 'poxos 03'
        },
    ];
    resolve(userList);
});

// 2
const getItem = (array, id) => {
    return new Promise((resolve, reject) => {
        const foundingItem = array.find(item => item.id === id);
        if(foundingItem) {
            resolve(foundingItem);
        }else {
            reject('There is no such item in the array!');
        }
    });
};

// 3
const myAsyncFunc = async (id) => {
    try {
        await loadArray
            .then(res => getItem(res, id))
            .then(res => console.log(res));
    }catch(err) {
        console.log(err);
    }
};
myAsyncFunc(3);