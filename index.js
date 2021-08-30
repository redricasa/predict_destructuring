// free code camp: https://www.youtube.com/watch?v=-vR3a11Wzt0
var voxel = { x: 3.6, y: 7.4, z: 1.3};
// var x = voxel.x;
// var y = voxel.y;
// var z = voxel.z;

const {x:varx, z:varz, y:vary} = voxel;
console.log(vary);


// coding dojo MERN--------------------------------------------------------------
const person = { 
    firstName: 'Bob', 
    lastName: 'Marley', 
    email: 'bob@marley.com', 
    password: 'sekureP@ssw0rd9', 
    username: 'barley', 
    createdAt: 1543945177623
};
const animals = ['horse', 'dog', 'fish', 'cat', 'bird'];

const {email} = person;
const [firstAnimal,secondAnimal, thirdAnimal, ,last] = animals;
// console.log(email);
console.log(last);