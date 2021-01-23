/* buffers are array of integers that cannot be resized & is used to handle raw binary data */
var arr = Buffer.from("I am Swaraj Kumar");  
console.log(arr.toString());

/* Writting sth to buffer */
arr.write("Happy ",5);
console.log(arr.toString());

/* Slicing a buffer */
var smlarr = arr.slice(5,10);
console.log(smlarr.toString());



