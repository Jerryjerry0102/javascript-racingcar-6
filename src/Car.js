import { Random } from '@woowacourse/mission-utils';

class Car {
  #name;
  #position;

  constructor(name, nameInfo) {
    this.#validateCarName(name, nameInfo);
    this.#name = name;
    this.#position = 0;
  }

  move() {
    const randomValue = Random.pickNumberInRange(0, 9);
    if (randomValue >= 4) this.#position += 1;
  }

  getPosition() {
    return this.#position;
  }

  getName() {
    return this.#name;
  }

  #validateCarName(name, { length, errorMessage }) {
    if (!(length.min <= name.length && name.length <= length.max)) {
      throw new Error(errorMessage(name));
    }
  }
}

export default Car;
