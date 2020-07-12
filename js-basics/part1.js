var name = "Anushka";
var age = 22;
var hasHobbies = true;

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
