//for(let i = 0; i <= 100; i++) {
//Print each number if number is divisible by 3 print Fizz
// If number is divisible by 5 print Buzz
// If divisible by 3 and 5 print Fizz Buz

//if (i % 3 === 0 && i % 5 === 0) {
    //console.log('FIZZ BUZZ')

   // if (i % 3 === 0) {
  ////  console.log('FIZZ')
//}else {
    //if (i % 5 ===0) {
     //   console.log('BUZZ')
    //}
       // console.log(i)
    //}

//}
for(let i = 1; i <= 100; i ++) {
 const msg = (i % 3 === 0 && i % 5 === 0) 
                ? 'FIZZBUZ'
                : (i % 3 === 0)
                ? 'FIZZ' 
                : (i % 5 === 0)
                ? 'BUZZ'
                : i
 console.log(msg)  
}
// Nested ternary
