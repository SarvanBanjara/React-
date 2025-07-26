// var h1 = document.createElement('h1');
// h1.innerHTML = 'Hello From JS'
// var root = document.querySelector('#root');
// root.appendChild(h1);

//For array  destructuring  helps to unpack the values of array elements to distinct variable directly 

let arr = [1,2,3]
let [a,b,c]=arr;
console.log(a,b,c)

//For Object destructuring helps to unpack values of object into variables , using keys
const sar={
    s:1,
    t:"a",
    u:"a",
};
//here s t and u are key while 1 , a , a are value of s t and u 

const {s,t,u}=sar;
console.log(s,t,u);