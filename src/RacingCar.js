import { Random } from '@woowacourse/mission-utils';

class RacingCar {
  #console;
  #carMap;
  #attemptCount;
  constructor(console) {
    this.#console = console;
  }

  async start() {
    this.#carMap = await this.#console.askCarMap();
    this.#attemptCount = await this.#console.askNumberOfAttempts();
    this.#play();
    this.#console.printWinner(this.#getWinnerList());
  }

  #play() {
    this.#console.printResultMessage();
    while (this.#attemptCount) {
      this.#carMap.forEach((advancedDegree, name) => {
        const randomNumber = Random.pickNumberInRange(0, 9);
        if (randomNumber >= 4) this.#carMap.set(name, advancedDegree + 1);
      });
      this.#console.printResult([...this.#carMap]);
      this.#attemptCount -= 1;
    }
  }

  #getWinnerList() {
    const winnerList = [];
    const maxAdvancedDegree = this.#getMaxAdvancedDegree();
    this.#carMap.forEach((advancedDegree, name) => {
      if (advancedDegree === maxAdvancedDegree) winnerList.push(name);
    });
    return winnerList;
  }

  #getMaxAdvancedDegree() {
    return Math.max(...this.#carMap.values());
  }
}

export default RacingCar;
