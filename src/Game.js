import Car from './Car.js';
import { CAR_NAME_INFO, ROUNDS_INFO } from './constant/Info.js';
import InputView from './ui/InputView.js';
import OutputView from './ui/OutputView.js';

class Game {
  #cars;
  #rounds;

  async main() {
    await this.#updateCars();
    await this.#updateRounds();

    const roundResults = this.#race();
    OutputView.printRaceResult(roundResults);

    const winners = this.#announceWinners();
    OutputView.printWinners(winners);
  }

  #announceWinners() {
    const maxPosition = Math.max(...this.#cars.map((car) => car.getPosition()));
    const winners = this.#cars
      .filter((car) => car.getPosition() === maxPosition)
      .map((car) => car.getName());
    return winners;
  }

  #race() {
    const roundResults = [];
    for (let round = 0; round < this.#rounds; round += 1) {
      const roundResult = this.#runRaceRound();
      roundResults.push(roundResult);
    }
    return roundResults;
  }

  #runRaceRound() {
    return this.#cars.map((car) => {
      car.move();
      return { name: car.getName(), position: car.getPosition() };
    });
  }

  async #updateRounds() {
    this.#rounds = this.#validateRounds(await InputView.readRounds());
  }

  #validateRounds(round) {
    const number = Number(round);
    if (!(Number.isInteger(number) && number > 0)) {
      throw new Error(ROUNDS_INFO.errorMessage(round));
    }
    return number;
  }

  async #updateCars() {
    const carNames = await InputView.readCarNames();
    this.#cars = carNames.map((name) => new Car(name, CAR_NAME_INFO));
  }
}

export default Game;
