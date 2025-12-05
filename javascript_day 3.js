function demo(){
    console.log("Hello World");
}
demo()
let samp=()=>
{
    console.log("Arrow Function");
}
let samp2=()=>console.log("Arrow Function 2"); // as single line no need of {} and return keyword
samp()
samp2()
let arr=["arun","vijay","sara"]
let [a,b,c]=arr; // destructuring assignment
console.log(a);
console.log(b);
console.log(c);
// destructuring with objects
let obj={
    name:"arun",
    age:22,
    city:"chennai"
}
let {name,age,city}=obj;
console.log(name);
console.log(age);
console.log(city);

