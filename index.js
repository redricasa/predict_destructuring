// free code camp: https://www.youtube.com/watch?v=-vR3a11Wzt0
// assign variables from objects
var voxel = { a: 3.6, b: 7.4, c: 1.3};

const {a, c, b} = voxel;
const {a:varA, c:varC, b:varB} = voxel;
// console.log(vary);
console.log(x);
// assign variables from nested objects
const a = {
    start: {x: 5, y:15},
    end: {x:6, y:4}
}

// const { start: { x , y } } = a;
const { start: { x: startX , y:startY }, 
        end: {x: endX, y: endY}
    } = a;
console.log(x);
// console.log(startY);
console.log(endY);




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
// console.log(last);