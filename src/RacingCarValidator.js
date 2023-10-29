class RacingCarValidator {
  #maxLength;
  constructor(maxLength) {
    this.#maxLength = maxLength;
  }

  validateNameList(array) {
    if (
      array.every((v) => this.isMaxLength(v)) &&
      RacingCarValidator.isUnique(array)
    )
      return true;
    return false;
  }

  isMaxLength(string) {
    return string.length <= this.#maxLength;
  }

  static isUnique(array) {
    return array.length === new Set(array).size;
  }
}

export default RacingCarValidator;
