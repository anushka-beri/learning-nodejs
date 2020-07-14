const name = "Anushka";
let age = 22;
const hasHobbies = true;

age = 23;

// const summarizeUser =  function(userName, userAge, userHasHobby) { //named function
//   return (
//     "Name is " +
//     userName +
//     ", age is " +
//     userAge +
//     " and the user had hobbies " +
//     userHasHobby
//   );
// }

const summarizeUser =  (userName, userAge, userHasHobby) => { //es6 function
    return (
      "Name is " +
      userName +
      ", age is " +
      userAge +
      " and the user had hobbies " +
      userHasHobby
    );
  }

const add = (a,b) => a + b;
console.log(add(3,5))

console.log(summarizeUser(name, age, hasHobbies));
