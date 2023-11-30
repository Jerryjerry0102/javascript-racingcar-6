export const CAR_NAME_INFO = Object.freeze({
  length: Object.freeze({
    min: 1,
    max: 5,
  }),
  errorMessage: (invalidName) =>
    `[ERROR] 자동차 이름은 1에서 5글자 사이어야 합니다. (입력된 이름: ${invalidName})`,
});

export const ROUNDS_INFO = Object.freeze({
  errorMessage: (invalidRound) =>
    `[ERROR] 올바른 횟수를 입력하세요 (입력된 횟수: ${invalidRound})`,
});
