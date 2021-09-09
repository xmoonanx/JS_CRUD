const player = {
  name: "nico",
  points: 10,
  fat: true,
};

console.log(player);
player.points = 15; // can change variable in object
console.log(player);
player.points = player.points + 15;
player.lastName = "potato"; // can add variable in object
console.log(player);
