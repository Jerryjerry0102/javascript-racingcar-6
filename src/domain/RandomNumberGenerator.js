import { Random } from '@woowacourse/mission-utils';

class RandomNumberGenerator {
  #startInclusive;
  #endInclusive;

  constructor(randomNumberRange) {
    this.#startInclusive = randomNumberRange.startInclusive;
    this.#endInclusive = randomNumberRange.endInclusive;
  }

  generate() {
    return Random.pickNumberInRange(this.#startInclusive, this.#endInclusive);
  }
}

export default RandomNumberGenerator;
