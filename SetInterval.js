// set interval 
console.log("Set Interval Demo:");
setInterval(()=>{
    console.log("Hello World");
},2000)
console.log("Set Timeout Demo:");
setTimeout(()=>{
    console.log("Hello World");
},2000) // it will execute only once
// callback function
console.log("Callback Function Demo:");
setTimeout(()=>{
    console.log("process 2");
    setTimeout(()=>{
        console.log("process 3");
},2000)},2000);
console.log("process 1");
// promises
console.log("Promise Demo:");