// this.hull = Math.floor(Math.random() * 4) + 3;
// this.firepower = Math.floor(Math.random() * 3) + 2;
// this.accuracy = (Math.floor(Math.random() * 3) + 6) / 10;

const friendlyShip = {
  name: "USS Schwarzenegger",
  hull: 20,
  firepower: 5,
  accuracy: 0.7,
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

const alienShip1 = new AlienShips("Brave Minnow", 3, 2, 0.6);
// const alienShip2 = new AlienShips('Sorry Sailor', 4, 2, .6)
// const alienShip3 = new AlienShips('The Jetsons', 3, 2, .6)
// const alienShip4 = new AlienShips('Mega Diver', 3, 2, .6)
// const alienShip5 = new AlienShips('Inconceivable', 3, 2, .6)
// const alienShip6 = new AlienShips('Death Star', 3, 2, .6)

// console.log(alienShip1.alienAttack());

function battle(attacker, target) {
  alert(`${friendlyShip.name} has fired on ${alienShip1.name}`);
  if (Math.random() <= friendlyShip.accuracy) {
    alienShip1.hull -= friendlyShip.firepower;
    alert(
      `${friendlyShip.name} has hit ${alienShip1.name}! ${alienShip1.name} hull now at ${alienShip1.hull <= 0 ? 0 : alienShip1.hull}`
    );
  } else {
    alert(`${friendlyShip.name} missed its target!`);
  }
}
console.log(battle());
