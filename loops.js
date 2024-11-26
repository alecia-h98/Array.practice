console.log('----Loop Examples----');

console.log('----While loops----');

let index = 0;
const max = 10;
// while Loop
while( index < max ){
    console.log( 'in while loop.index:', index );
    index++;
} //end while loop
// although this looks like an if statement, an if statement only runs the code once.
// A while loop will continuously run until the statement is false.
console.log( 'index after the while loop:', index );

console.log('----For loops----');


for( let i=0; i<max; i++){
    console.log('in for loop. i:', i);
} //end for


let hand = ['Q', '3', 'J', '9', '6', 'K', 'A'];

for(let i=0; i<hand.length; i++){
    console.log('for loop', hand[i]);
    if( hand[i]=='9'){
        console.log('MATCH!');
    } //END MATCH
} //end for loop

console.log('----For IN loop----');
// for in
for(i in hand){
    console.log('for in loop', hand[i]);
}

console.log('----for OF loop----');
for(card of hand){
    console.log('for of loop', card);
}