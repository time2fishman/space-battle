const friendlyShip = {
  name: "USS Schwarzenegger",
  hull: 20,
  firepower: 5,
  accuracy: 0.6,
};

class AlienShips {
  constructor(name, hull, firepower, accuracy) {
    this.name = name;
    this.hull = hull;
    this.firepower = firepower;
    this.accuracy = accuracy;
  }

  alienAttack() {
    return `The ${this.name} is attacking the ${friendlyShip.name}!`;
    // console.log('Alien attack is working!');
  }
}

const enemyShipArr = [
  (alienShip1 = new AlienShips(
    (this.name = "Brave Minnow"),
    (this.hull = Math.floor(Math.random() * 4) + 3),
    (this.firepower = Math.floor(Math.random() * 3) + 2),
    (this.accuracy = (Math.floor(Math.random() * 3) + 6) / 10)
  )),
  (alienShip2 = new AlienShips(
    (this.name = "UFO"),
    (this.hull = Math.floor(Math.random() * 4) + 3),
    (this.firepower = Math.floor(Math.random() * 3) + 2),
    (this.accuracy = (Math.floor(Math.random() * 3) + 6) / 10)
  )),
  (alienShip3 = new AlienShips(
    (this.name = "Wooooozer"),
    (this.hull = Math.floor(Math.random() * 4) + 3),
    (this.firepower = Math.floor(Math.random() * 3) + 2),
    (this.accuracy = (Math.floor(Math.random() * 3) + 6) / 10)
  )),
  (alienShip4 = new AlienShips(
    (this.name = "The Jetson's"),
    (this.hull = Math.floor(Math.random() * 4) + 3),
    (this.firepower = Math.floor(Math.random() * 3) + 2),
    (this.accuracy = (Math.floor(Math.random() * 3) + 6) / 10)
  )),
  (alienShip5 = new AlienShips(
    (this.name = "Mega Diver"),
    (this.hull = Math.floor(Math.random() * 4) + 3),
    (this.firepower = Math.floor(Math.random() * 3) + 2),
    (this.accuracy = (Math.floor(Math.random() * 3) + 6) / 10)
  )),
  (alienShip6 = new AlienShips(
    (this.name = "Inconceivable"),
    (this.hull = Math.floor(Math.random() * 4) + 3),
    (this.firepower = Math.floor(Math.random() * 3) + 2),
    (this.accuracy = (Math.floor(Math.random() * 3) + 6) / 10)
  )),
];

// const alienShip2 = new AlienShips('UFO', 4, 2, .6)
// const alienShip3 = new AlienShips('The Jetsons', 3, 2, .6)
// const alienShip4 = new AlienShips('Mega Diver', 3, 2, .6)
// const alienShip5 = new AlienShips('Inconceivable', 3, 2, .6)
// const alienShip6 = new AlienShips('Death Star', 3, 2, .6)

// let obj = {alienShip1, alienShip2, alienShip3, alienShip4, alienShip5, alienShip6};
// enemyShipArr.push(obj)
// console.log(enemyShipArr)

function battle(attacker, target) {
  console.log(`${attacker.name} has fired on ${target.name}`);
  if (Math.random() <= attacker.accuracy) {
    target.hull -= attacker.firepower;
    console.log(
      `${attacker.name} has hit ${target.name}! ${target.name} hull now at ${
        target.hull <= 0 ? 0 : target.hull
      }!`
    );
  } else {
    console.log(`${attacker.name} missed its target!`);
  }
}

// console.log(battle());

function playGame() {
  for (let i = 0; i < enemyShipArr.length; i++) {
    while (friendlyShip.hull > 0) {
      battle(friendlyShip, enemyShipArr[i]);
      if (enemyShipArr[i].hull > 0) {
        battle(enemyShipArr[i], friendlyShip);
      } else {
        console.log(
          `${enemyShipArr[i].name} has been destroyed! Congratulations soldier!`
        );
        if (confirm("Got one! Do you want to continue in the fight?")) {
          break;
        } else {
          console.log("You left your troops hanging!");
          return "You quit";
        }
      }
      if (friendlyShip.hull <= 0) {
        console.log(`Game Over. ${friendlyShip.name} has been destroyed!`);
        return "You lost";
      }
    }
  }
  return "You won";
}

const startGame = confirm("Lets play Space Battle!");

if (startGame) {
  const returnValue = playGame() + "!";
  if (returnValue === "You won!") {
    alert("You fought bravely! " + returnValue);
  }
  if (returnValue === "You lost!") {
    alert("Loser! " + returnValue);
  }
  if (returnValue === "You quit!") {
    alert("You quit!");
  }
}
