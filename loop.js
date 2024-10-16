// problem no:1;

let number = 50;

for( let i = 1; i <= number; i++ ){
    console.log( i );
}

// problem no.:2;

let num = 1;

for( let i= 33; i >= num; i--  ){
    console.log( i );
}

// problem no.:3;

let numbers = 45;

for( let i = 1; i <= numbers; i++){
    if( i % 2 ===0 ){
        console.log( i );
    }
}

// problem no.:4;

let num1 = 10;
sum = 0;

for( let i = 1; i <= num1; i++ ){
    if( i % 2 ===0 ){
        console.log( Math.pow( i,2 ));
    }
    sum = sum + Math.pow( i,2 );
}
console.log( sum );


// problem no.5:


let numM = 10;
let multify = 7;

for( let i = 1; i<=numM; i++ ){
    console.log( i * multify );
}


// problem no.6:

let digits = 139586883;

let digitsCounts = digits.toString().length

console.log( digitsCounts );