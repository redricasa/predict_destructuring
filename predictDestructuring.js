// For the following five blocks of code, predict the output. If a line of code will throw an error, state the error.
// 1 ------
// const cars = ['Tesla', 'Mercedes', 'Honda']
// const [ randomCar ] = cars
// const [ ,otherRandomCar ] = cars
// //Predict the output
// console.log(randomCar)//Tesla
// console.log(otherRandomCar)//Mercedes

// 2-----------------
// const employee = {
//     name: 'Elon',
//     age: 47,
//     company: 'Tesla'
// }
// const { name: otherName } = employee;
// //Predict the output
// console.log(name);//ReferenceError: name is not defined
// console.log(otherName);//Elon
// 3--------------------
// const person = {
//     name: 'Phil Smith',
//     age: 47,
//     height: '6 feet'
// }
// const password = '12345';
// const { password: hashedPassword } = person;  
// //Predict the output
// console.log(password);//12345
// console.log(hashedPassword);//undefined- there's no key password in person object

// 4 ---------------------------
// const numbers = [8, 2, 3, 5, 6, 1, 67, 12, 2];
// const [,first] = numbers;//2
// const [,,,second] = numbers;//5
// const [,,,,,,,,third] = numbers;//2
// //Predict the output
// console.log(first == second);//false
// console.log(first == third);//true
// 5 ---------------------
const lastTest = {
    key: 'value',
    secondKey: [1, 5, 1, 8, 3, 3]
}
const { key } = lastTest;//value
const { secondKey } = lastTest;//[1, 5, 1, 8, 3, 3]
const [ ,willThisWork] = secondKey;//5
//Predict the output
console.log(key);//value
console.log(secondKey);//[1, 5, 1, 8, 3, 3]
console.log(secondKey[0]);//1
console.log(willThisWork);//5







