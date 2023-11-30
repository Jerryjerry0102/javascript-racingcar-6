class Car {
  #name;
  #position;

  constructor(name, nameInfo) {
    this.#validateCarName(name, nameInfo);
    this.#name = name;
    this.#position = 0;
  }

  move() {
    this.#position += 1;
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
