const name = "Anushka";
let age = 22;
const hasHobbies = true;

name = 'Anshu'; // throws error
age = 23;

function summarizeUser(userName, userAge, userHasHobby) {
  return (
    "Name is " +
    userName +
    ", age is " +
    userAge +
    " and the user had hobbies " +
    userHasHobby
  );
}

console.log(summarizeUser(name, age, hasHobbies));
