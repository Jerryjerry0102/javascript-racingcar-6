import ErrorMessage from '../src/ErrorMessage.js';
import Validator from '../src/Validator.js';

describe('ValidatorTest', () => {
  test('자동차 이름이 빈 값일 경우 EMPTY 에러 발생', () => {
    expect(() => Validator.validateCarNames([''])).toThrow(ErrorMessage.EMPTY);
  });
  test('자동차 이름이 빈 값이 아닐 경우 에러 발생하지 않음', () => {
    expect(() => Validator.validateCarNames(['jerry'])).not.toThrow();
    expect(() => Validator.validateCarNames(['jerry', 'tom'])).not.toThrow();
  });

  test('자동차 이름이 6자 이상일 경우 MAX_LENGTH 에러 발생', () => {
    expect(() => Validator.validateCarNames(['abcdef'])).toThrow(
      ErrorMessage.LENGTH,
    );
    expect(() => Validator.validateCarNames(['abc', 'abcdef'])).toThrow(
      ErrorMessage.LENGTH,
    );
  });
  test('자동차 이름이 5자 이하일 경우 에러 발생하지 않음', () => {
    expect(() => Validator.validateCarNames(['abcde'])).not.toThrow();
    expect(() => Validator.validateCarNames(['tom', 'jerry'])).not.toThrow();
  });

  test('시도할 횟수가 1에서 100 사이의 숫자가 아닌 경우 ONE_TO_HUNDRED 에러 발생', () => {
    expect(() => Validator.validateNumberOfRound(NaN)).toThrow(
      ErrorMessage.ONE_TO_HUNDRED,
    );
    expect(() => Validator.validateNumberOfRound(0)).toThrow(
      ErrorMessage.ONE_TO_HUNDRED,
    );
  });
  test('시도할 횟수가 1에서 100 사이의 숫자인 경우 에러 발생하지 않음', () => {
    expect(() => Validator.validateNumberOfRound(1)).not.toThrow();
    expect(() => Validator.validateNumberOfRound(100)).not.toThrow();
    expect(() => Validator.validateNumberOfRound(40)).not.toThrow();
  });
});
