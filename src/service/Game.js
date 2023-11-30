import {
  CAR_NAME_INFO,
  MOVING_CONDITION_INFO,
  RANDOM_NUMBER_INFO,
  ROUNDS_INFO,
} from '../constant/Info.js';
import Car from '../domain/Car.js';
import MovingCondition from '../domain/MovingCondition.js';
import RandomNumberGenerator from '../domain/RandomNumberGenerator.js';
import InputView from '../ui/InputView.js';
import OutputView from '../ui/OutputView.js';
import Cars from './Cars.js';

class Game {
  #cars;
  #rounds;
  #roundResults = [];

  async main() {
    await this.#updateCars();
    await this.#updateRounds();

    this.#race();

    OutputView.printRoundResults(this.#roundResults);
    OutputView.printWinners(this.#cars.getWinners());
  }

  #race() {
    for (let round = 0; round < this.#rounds; round += 1) {
      this.#cars.raceRound();
      this.#roundResults.push(this.#cars.getRoundResult());
    }
  }

  async #updateRounds() {
    const rounds = await InputView.readRounds();
    this.#rounds = this.#validateRounds(rounds);
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
    const cars = carNames.map((name) => new Car(name, CAR_NAME_INFO));
    this.#cars = new Cars(
      cars,
      new MovingCondition(MOVING_CONDITION_INFO),
      new RandomNumberGenerator(RANDOM_NUMBER_INFO),
    );
  }
}

export default Game;
