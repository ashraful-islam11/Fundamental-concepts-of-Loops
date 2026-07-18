// todo:       Module no - 9.4         topic: Introduction to For Loop. 

/**
 ** 1. Initialization : 
 *  1. Creates a variable count .
 *  2.Starts counting from 1.  
 *  3.Runs only once
 * 
 * * 2. condition set :
 *   1.Checks if the loop should continue.
 *   2.If true, run the loop body.
 *   3.If false, stop the loop.
 * 
 * * 3. Update : 
 *   1. count++  or count--.  
 */

// * loop structure : 
//    for(initialization ; condition ; update){
//         console.log(' some think true');
//    }

 
// 1. :  0 - 10 print use for loop :
for( let count =0 ; count <= 10 ; count ++ ){
    console.log('print is start now : ', count);
}

// 2. same text print 5 times :

for( let text = 1; text <=5 ; text ++){
    console.log('ashraful');
}


// 3. decrement :
for( let i= 10; i>= 1; i--){
    console.log('inside the for loop -', i);
}