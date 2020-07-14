const name = "Anushka";
let age = 22;
const hasHobbies = true;

name = 'Anshu';
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

console.log(userName)

console.log(summarizeUser(name, age, hasHobbies));
