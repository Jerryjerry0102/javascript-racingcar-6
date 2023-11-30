class Cars {
  #cars;
  #movingCondition;
  #randomNumberGenerator;

  constructor(cars, movingCondition, randomNumberGenerator) {
    this.#cars = cars;
    this.#movingCondition = movingCondition;
    this.#randomNumberGenerator = randomNumberGenerator;
  }

  raceRound() {
    this.#cars.forEach((car) => {
      const randomNumber = this.#randomNumberGenerator.generate();
      if (this.#movingCondition.isSatisfied(randomNumber)) car.move();
    });
  }

  getRoundResult() {
    return this.#cars.map((car) => ({
      name: car.getName(),
      position: car.getPosition(),
    }));
  }

  getWinners() {
    return this.#cars
      .filter((car) => car.getPosition() === this.#getMaxPosition())
      .map((car) => car.getName());
  }

  #getMaxPosition() {
    return Math.max(...this.#cars.map((car) => car.getPosition()));
  }
}

export default Cars;
