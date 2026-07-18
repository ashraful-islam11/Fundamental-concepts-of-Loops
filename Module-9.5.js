// todo:       Module no - 9.5         topic: Problem-solving with For Loop. 
 // problem solving : 


 for( let number = 1; number <= 10; number ++){
    console.log(number);
 }

console.log('=======');
//  odd number with for loop : 

for( let isOdd = 1; isOdd <= 10 ; isOdd+=2){
    console.log(isOdd);
}

console.log('=== even number :===');

// even number :
for( let isEven = 0; isEven<= 20; isEven+= 2){
    console.log(isEven);
} 


console.log('=====');

// interesting problem : 

let sum = 0;

for( let i = 1; i<= 10; i++){
    sum = sum + i;
    console.log(sum);
}


// number 11- 20 er sum korbo : 
console.log('11 to 20 === sum: ');

let sumContainer = 0;

for(let numeric = 11; numeric <= 20 ; numeric++){
    sumContainer = sumContainer + numeric;
    console.log(sumContainer);
}


console.log('==== even sum : ====');
// 0 - 10 even number gulor sum ber korbo: 

let evenSum = 0 ;
for (let evenNumber = 0 ; evenNumber <= 10 ; evenNumber+=2){
     evenSum = evenSum + evenNumber;
     console.log(evenSum);
}


console.log('=== odd sum ===');

let oddSum =0 ;

for(let oddNumber = 1; oddNumber<= 10; oddNumber+=2){
    oddSum = oddSum + oddNumber;
    console.log(oddSum);
}