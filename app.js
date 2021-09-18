const age = parseInt(prompt("How old are you?"));

if (isNaN(age) || age < 0) {
  console.log("Please write a real positive number");
} else if (age < 18) {
  console.log("You are too young.");
} else if (age >= 18 && age <= 50) {
  console.log("You can drink");
} else if (age > 50 && age <= 80) {
  console.log("You should exercise");
} else if (age === 100) {
  console.log("wow you are wise");
} else if (age > 80) {
  console.log("You can do whatever you want.");
}

//If there r "age === 100" after "age > 80",
//conditional is overlap (age>80 -> age === 100)
//So, input "100" -> output "You can do whatever you want".
//Ever output wow you are wise.

// '==' 은 값만을 비교하고
// '===' 은 유형도 비교
