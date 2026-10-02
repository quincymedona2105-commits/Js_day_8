
// Even numbers
console.log("Even Numbers");
const arr=[1,2,3,4,5,6,7,8,9]
let myarr=[]
let i=0;

    for(let a = 0; a < arr.length; a++){
       
console.log(arr[a]);
if(arr[a]%2==0){
myarr[i]=arr[a]
i++
}

}
console.log(myarr);

// Fibonacci
console.log("Fibonacci Series");
let numbers = [];
let firstValue = 0;
let secondValue = 1;
let position = 0;
let limit = 10;

for(let count = 0; count < limit; count++){
    numbers[position] = firstValue;
    position++;

    let nextValue = firstValue + secondValue;
    firstValue = secondValue;
    secondValue = nextValue;

}

console.log(numbers);

// Factorial
console.log("Factorial Series");
let resultArray = [];
let total = 1;
let index = 0;
let number = 5;

for(let value = 1; value <= number; value++){

    total = total * value;
    resultArray[index] = total;
    index++;

}

console.log(resultArray);