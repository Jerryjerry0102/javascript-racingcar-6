class MovingCondition {
  #threshold;

  constructor({ threshold }) {
    this.#threshold = threshold;
  }

  isSatisfied(number) {
    return number >= this.#threshold;
  }
}

export default MovingCondition;
