console.log('lets Practice on JS Arrays');

// 1. Write a js program to read and print elements of array.

console.log('Exercise no 1');

var array = ["burhan", "Ali", "Baig", "is ", 'not ', 'good', 'Programmer', 'at a time', 'upps',];

function read_Printarrays(elements,) {

    console.log("Elements", elements);




}


array.forEach(read_Printarrays);

// 2. Write a js program to print all negative elements in an array.

console.log('Exercise no 2');


var array2 = [-1, 1, -2, 2 - 3, 3, -4, -5, 5, -6, 6];

for (let index = 0; index < array2.length; index++) {
    const element = array2[index];
    if (element < 0) {
        console.log(element);
    }


}

// 3. Write a js program to find sum of all array elements. 

console.log('Exercise no 3');

var array3 = [1, 2, 3, 4, 5, 6, 7, 8, 9,];

sum = 0;

for (let index = 0; index < array3.length; index++) {
    const element = array3[index];

    sum = sum + element;



}

console.log(sum);

// 4. Write a js program to find maximum and minimum element in an array.

console.log('Exercise no 4');

var array4 = [6, 7, 8, 12, 13, 369, 14, 15, 9,];

max = array4[0];

min = array4[0];

for (let index = 0; index < array4.length; index++) {
    const element = array4[index];
    if (element > max) {
        max = element;
    }
    else if (element < min) {
        min = element;
    }


}

console.log(max);

console.log(min);

// 5. Write a js program to find second largest element in an array.

console.log('Exercise no 5');



var array5 = [12, 20, 15, 16, 17];
max = array5[0];
secondMax = array5[0];

for (let index = 0; index < array5.length; index++) {
    const element = array5[index];
    if (element > max) {
        secondMax = max;
        max = element;
    }
    if (element < max && element > secondMax) {
        secondMax = element;
    }


}



console.log(`The Second Maximum number in array is  ${secondMax}`);

// 6. Write a js program to count total number of even and odd elements in an array.




console.log('Exerices no 6');


var array6 = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20,21];

oddcount = 0;
evenCount = 0;


for (let index = 0; index < array6.length; index++) {
    const element = array6[index];

    if (element % 2 == 0) {
        evenCount++;

    }
    else {
        oddcount++;
    }

}

console.log(`Even numbers: ${evenCount}`);
console.log(`Odd numbers: ${oddcount}`);

// 7. Write a js program to count total number of negative elements in an array.

console.log('Exercise no 7');

var array7 = [1,-2,-3,-4,5,-6,-7,-8,-9];

var negativeCount = 0;

for (let index = 0; index < array7.length; index++) {
    const element = array7[index];
    if (element < 0) {

        negativeCount++;
        
    }
    
}

console.log(`Negative numbers: ${negativeCount}`);


// 8. Write a js program to copy all elements from an array to another array.

var array8 = [1,2,3,4, "Burhan", "Bugs",'Codding', 'Journey'];

 var newArray = array8.slice(0,array8.length);

console.log(`The New Array is Here : ${newArray}`);


// 9. Write a js program to insert an element in an array.


var array9 = ['hello i Am Existing Array', 'and'];

 var addedArray = array9.push("I am NewArray that is added to array9");
 
 
 console.log(`The Added Array is : ${array9}`);

// 10. Write a js program to delete an element from an array at specified position.


var array10 = ['hey','kasy ho', 'Please', "hey", 'ko', 'remove kardo'];

 array10.splice(0,1,);
 

array10.splice(5,5,"Hey Remove hogya hai")

console.log(array10);


// 11. Write a js program to count frequency of each element in an array.

console.log('Exercise no 11');

var array11 = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24, 25, 2]
    var frequency = {};
    for (let index = 0; index < array11.length; index++) {
        const element = array11[index];
        if (frequency[element] == undefined) {
            frequency[element] = 1;
        }
        else {
            frequency[element] = frequency[element] + 1;
        }
    }
    console.log(frequency);


//12. Write a js program to print all unique elements in the array.

console.log('Exercise no 12');
 var array12 = [1,1,2,2,3,5,6,7,7,9];
 var uniqueArray = [];
 for (let index = 0; index < array12.length; index++) {
    const element = array12[index];
    if (uniqueArray.indexOf(element) == -1) {
        uniqueArray.push(element);
    }
    
 }
 console.log(uniqueArray);



// 13. Write a js program to count total number of duplicate elements in an array.

console.log('Exercise no 13');
let array13 = [1, 2, 3, 4, 4, 5, 2, 6, 7, 8, 8];

let duplicateCount = 0;
let elementCount = {};


for (let i = 0; i < array13.length; i++) {
    let element = array13[i];
    if (elementCount[element]) {
        elementCount[element]++;
    } else {
        elementCount[element] = 1;
    }
}

for (let element in elementCount) {
    if (elementCount[element] > 1) {
        duplicateCount += (elementCount[element] - 1);
    }
}
console.log("Total number of duplicate elements:", duplicateCount);


// 14. Write a js program to delete all duplicate elements from an array.

console.log('Exercise no 14');

let array14 = [3, 3, 3, 6, 6, 6, 9, 9, 9,];

let removingarray = [];

for (let i = 0; i < array14.length; i++) {
    let element = array14[i];
    if (removingarray.indexOf(element) == -1) {
        removingarray.push(element);
    }
    
}

console.log(removingarray);


// 15. Write a js program to merge two array to third array.

console.log('Exercise no 15');

let arrayone = [1, 2, 3, 4, 5];
let arrayTwo = [6, 7, 8, 9, 10];

let arraythird = arrayone.concat(arrayTwo);

console.log(arraythird);

// 16. Write a js program to find reverse of an array.

console.log('Exercise no 16');


var array16 = [1,2,3,4,5,6,7,8,9];

var reverseArray = [];

for (i = array16.length-1; i  >=0;  i--) {

    reverseArray.push(array16[i])    
}

console.log(reverseArray);

// 17. Write a js program to put even and odd elements of array in two separate array.

console.log('Exercise no 17');

var array17 = [1,2,3,4,5,6,7,8,9,];

var evenArray = [];

var oddArray = [];

for (let index = 0; index < array17.length; index++) {
    const element = array17[index];
    if (element % 2 == 0) {

        evenArray.push(element);
        
    }
    else{
        oddArray.push(element);
    }
    
}

console.log(`this is an even array elements ${evenArray}`);
console.log(`this is an odd array elements ${oddArray}`);


//18. Write a js program to search an element in an array.

console.log('Exercise no 18');


var array18 = [20, 30, 40, 50, 369, 60, 90,]

var searchingElement = 369;

var getsearchingElement = array18.includes(searchingElement);

if (array18.includes(searchingElement)) {

    console.log(`congratulate Element is find in array! Status is  ${getsearchingElement}`);
    
}

else{
    console.log(` feel sad to say Sorry! Element is not find in array! status is ${getsearchingElement}  try another Element`);
}

//19. Write a js program to sort array elements in ascending or descending order.

 console.log('Exercise no 19');

 let array19 = [40, 100, 1, 5, 25, 10];

array19.sort((a, b) => a - b);

console.log("Array sorted in ascending order:", array19);

let array19_2 = [40, 100, 1, 5, 25, 10];


array19_2.sort((a, b) => b - a);

console.log("Array sorted in descending order:", array19_2);


// 20. Write a js program to sort even and odd elements of array separately.

console.log('Exercise no 20');

let array20 = [40, 100, 1, 5, 25, 10, 32, 17];


let evens20 = array20.filter(num => num % 2 === 0);
let odds20 = array20.filter(num => num % 2 !== 0);



console.log("Original array:", array20);
console.log("Sorted even elements:", evens20);
console.log("Sorted odd elements:", odds20);


// 21. Write a js program to left rotate an array.

let arr = [1, 2, 3, 4, 5];
let d = 2;

let n = arr.length;
d = d % n;

let rotatedArray = [];

for (let i = d; i < n; i++) {
    rotatedArray.push(arr[i]);
}
for (let i = 0; i < d; i++) {
    rotatedArray.push(arr[i]);
}

console.log(rotatedArray);  

// 22. Write a js program to right rotate an array.

let arr22 = [1, 2, 3, 4, 5];
let d22 = 2;

// Calculate the effective number of rotations needed
let n22 = arr.length;
d22 = d22 % n22;

// Create a new array to hold the rotated elements
let rotatedArray22 = [];

// Copy elements from the end of the array to the start
for (let i = n - d; i < n; i++) {
    rotatedArray22.push(arr[i]);
}

// Copy the remaining elements from the start to the (n - d) - 1
for (let i = 0; i < n - d; i++) {
    rotatedArray22.push(arr[i]);
}

// Print the rotated array
console.log(rotatedArray22);  // Output: [4, 5, 1, 2, 3]











 









    


 

 













