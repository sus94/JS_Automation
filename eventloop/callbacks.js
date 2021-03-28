// 1)	What will be the result of the following code? Explain your answer (as a comment). 
// Using callbacks, try to rewrite the following code to get result in reverse order.


// This will print 1 ,4, 3, 2 as the first and last console.logs are synchron actions, so they will be printed simultaneously one after one. Afterwards the third command will be printed as setTimeout is 0 and finally the second command will be printed after 1 second.

function printing() {
    console.log(1);
    setTimeout(function () { console.log(2); }, 1000);
    setTimeout(function () { console.log(3); }, 0);
    console.log(4);
}

printing(4);

