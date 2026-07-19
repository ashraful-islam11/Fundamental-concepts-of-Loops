// todo:       Module no - 9.7         topic:         When to use a break and continue. 


for( let num = 1; num <= 10; num++){
    console.log(num);
}

// break : break korle break er pore ar koco code kaj korbe na. 

for(let i = 1 ; i <= 10 ; i++){

    if( i === 5){
        break;
    }
    console.log('Number of value:', i);
}


//  Decrement of for loop , break use : 

for( let n = 20; n >= 10; n--){
    if(n === 17){
        break;
    }
    console.log('decrement of for loop value: ', n);
}



// increment of while loop : 

 let incrementNumber = 0;
 while(incrementNumber <= 10){

    if( incrementNumber === 6){
        break;
    }
    console.log('incrementNumber value is :',incrementNumber);
    incrementNumber ++ ;
 }




 //todo:            continue : for and while loop . increment and decrement  and odd and even number :
 console.log('======== continue =========');

//  1. for loop use increment : continue:  
 for( let continueIncrement = 1; continueIncrement <= 10; continueIncrement++){
    if( continueIncrement === 5 ){
        continue;
    }
    console.log('continue increment of value :', continueIncrement);
 }

 // 2. for loop use even number continue: 

 for( let continueEven = 0; continueEven <= 10; continueEven ++){
    if( continueEven % 2 === 0){
        continue;
    }
    console.log(continueEven);
 }



 // 3. while loop continue use decrement : 

 let decreContinue = 10;
 
 while ( decreContinue >= 1){

    if(decreContinue === 5){
        decreContinue--;
        continue;
    }
    console.log('decrement value or while loop: ', decreContinue);
    
    decreContinue --;
 }

 // 4. while loop continue ,increment : 

 let  incrementContinue = 1;

 while(incrementContinue <= 10){

    if(incrementContinue === 5){
        incrementContinue++;
        continue;
    }

console.log('increment value or while loop:', incrementContinue);
    incrementContinue++;
 }


 // while loop continue even number:
console.log('=============');
 let evenContinue = 0;
 while( evenContinue <= 10){

    if(evenContinue % 2 === 0){
        evenContinue++;

        continue;
    }

    console.log('even value or while loop:', evenContinue);
    evenContinue++;
 }


