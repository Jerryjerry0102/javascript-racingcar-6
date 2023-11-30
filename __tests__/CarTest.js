import { CAR_NAME_INFO } from '../src/constant/Info';
import Car from '../src/domain/Car';

describe('자동차 클래스 테스트', () => {
  describe('자동차 이름 검증', () => {
    test('자동차 이름이 1에서 5글자 사이면 예외 발생 X', () => {
      expect(() => new Car('jerry', CAR_NAME_INFO)).not.toThrow();
      expect(() => new Car('tom', CAR_NAME_INFO)).not.toThrow();
      expect(() => new Car('재리', CAR_NAME_INFO)).not.toThrow();
      expect(() => new Car('톰', CAR_NAME_INFO)).not.toThrow();
      expect(() => new Car('12345', CAR_NAME_INFO)).not.toThrow();
    });

    test('자동차 이름이 1에서 5글자 사이가 아니면 예외 발생', () => {
      expect(() => new Car('123456', CAR_NAME_INFO)).toThrow();
      expect(() => new Car('', CAR_NAME_INFO)).toThrow();
    });
  });

  describe('자동차 위치', () => {
    test('움직이지 않으면 위치는 0', () => {
      const car = new Car('tom12', CAR_NAME_INFO);
      expect(car.getPosition()).toBe(0);
    });

    test('한 번 움직이면 위치는 1', () => {
      const car = new Car('tom12', CAR_NAME_INFO);
      car.move();
      expect(car.getPosition()).toBe(1);
    });

    test('세 번 움직이면 위치는 3', () => {
      const car = new Car('tom12', CAR_NAME_INFO);
      car.move();
      car.move();
      car.move();
      expect(car.getPosition()).toBe(3);
    });
  });
});
