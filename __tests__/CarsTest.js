import {
  CAR_NAME_INFO,
  MOVING_CONDITION_INFO,
  RANDOM_NUMBER_INFO,
} from '../src/constant/Info';
import Car from '../src/domain/Car';
import MovingCondition from '../src/domain/MovingCondition';
import RandomNumberGenerator from '../src/domain/RandomNumberGenerator';
import Cars from '../src/service/Cars';

describe('자동차들 클래스 테스트', () => {
  describe('case1', () => {
    const a = new Car('a', CAR_NAME_INFO);
    const b = new Car('b', CAR_NAME_INFO);
    const c = new Car('c', CAR_NAME_INFO);
    const cars = new Cars(
      [a, b, c],
      new MovingCondition(MOVING_CONDITION_INFO),
      new RandomNumberGenerator(RANDOM_NUMBER_INFO),
    );
    a.move();
    b.move(), b.move(), b.move(), b.move();
    c.move(), c.move();

    test('cars.getRoundResult, car.getName, car.getPosition', () => {
      const roundResult = cars.getRoundResult();

      expect(roundResult).toStrictEqual([
        { name: a.getName(), position: a.getPosition() },
        { name: b.getName(), position: b.getPosition() },
        { name: c.getName(), position: c.getPosition() },
      ]);

      expect(roundResult).toStrictEqual([
        { name: 'a', position: 1 },
        { name: 'b', position: 4 },
        { name: 'c', position: 2 },
      ]);
    });

    test('cars.getWinners 우승자 한명', () => {
      expect(cars.getWinners()).toStrictEqual([b.getName()]);
    });
  });

  describe('case2', () => {
    const a = new Car('a', CAR_NAME_INFO);
    const b = new Car('b', CAR_NAME_INFO);
    const c = new Car('c', CAR_NAME_INFO);
    const cars = new Cars(
      [a, b, c],
      new MovingCondition(MOVING_CONDITION_INFO),
      new RandomNumberGenerator(RANDOM_NUMBER_INFO),
    );
    a.move();
    b.move(), b.move();
    c.move(), c.move();

    test('cars.getRoundResult, car.getName, car.getPosition', () => {
      const roundResult = cars.getRoundResult();

      expect(roundResult).toStrictEqual([
        { name: a.getName(), position: a.getPosition() },
        { name: b.getName(), position: b.getPosition() },
        { name: c.getName(), position: c.getPosition() },
      ]);

      expect(roundResult).toStrictEqual([
        { name: 'a', position: 1 },
        { name: 'b', position: 2 },
        { name: 'c', position: 2 },
      ]);
    });

    test('cars.getWinners 우승자 여러명', () => {
      expect(cars.getWinners()).toStrictEqual([b.getName(), c.getName()]);
    });
  });
});
