import { MOVING_CONDITION_INFO } from '../src/constant/Info';
import MovingCondition from '../src/domain/MovingCondition';

describe('이동 조건 클래스 테스트', () => {
  const movingCondition = new MovingCondition(MOVING_CONDITION_INFO);

  test('이동 조건에 만족하는 경우 true 반환', () => {
    expect(movingCondition.isSatisfied(4)).toBeTruthy();
    expect(movingCondition.isSatisfied(5)).toBeTruthy();
    expect(movingCondition.isSatisfied(9)).toBeTruthy();
  });

  test('이동 조건에 만족하지 않는 경우 false 반환', () => {
    expect(movingCondition.isSatisfied(0)).toBeFalsy();
    expect(movingCondition.isSatisfied(3)).toBeFalsy();
  });
});
