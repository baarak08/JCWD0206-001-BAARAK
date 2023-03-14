class Player {
  constructor(name, health = 100, power = 10) {
    this.name = name;
    this.health = health;
    this.power = power;
  }

  hit(power) {
    this.health -= power;
  }

  useItem(getRandomItem) {
    this.power += getRandomItem.power;
    this.health += getRandomItem.health;
  }

  showStatus() {
    console.log(
      `${this.name} (Health => ${this.health}, Power => ${this.power})`
    );
  }
}

class ShootingGame {
  constructor(player1, player2) {
    this.players = [player1, player2];
  }

  getRandomItem() {
    const random = Math.floor(Math.random() * 5);
    if (random === 0) {
      return { health: 0, power: 0 };
    } else if (random === 1) {
      return { health: 0, power: 10 };
    } else if (random === 2) {
      return { health: 20, power: 0 };
    } else if (random === 3) {
      return { health: 20, power: 0 };
    } else {
      return { health: 20, power: -10 };
    }
  }

  start() {
    let turn = 0;
    while (this.players[0].health > 0 && this.players[1].health > 0) {
      const currentPlayer = this.players[turn % 2];
      const otherPlayer = this.players[(turn + 1) % 2];

      console.log(`=== Turn ${turn + 1} ===`);
      currentPlayer.showStatus();
      otherPlayer.showStatus();

      const item1 = this.getRandomItem();
      const item2 = this.getRandomItem();
      currentPlayer.useItem(item1);
      otherPlayer.useItem(item2);

      const damage = currentPlayer.power;
      otherPlayer.hit(damage);

      console.log(
        `Player ${currentPlayer.name} hits Player ${otherPlayer.name} with power ${damage}`
      );
      currentPlayer.showStatus();
      otherPlayer.showStatus();

      turn++;
    }

    const winner =
      this.players[0].health > 0 ? this.players[0] : this.players[1];
    console.log(`Player ${winner.name} wins!`);
  }
}

// Usage example
const player1 = new Player("Baarak");
const player2 = new Player("Gaara");
const shootingGame = new ShootingGame(player1, player2);
shootingGame.start();
