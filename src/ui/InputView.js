import { Console } from '@woowacourse/mission-utils';

const InputView = {
  async readCarNames() {
    const input = await Console.readLineAsync(
      '경주할 자동차 이름을 입력하세요.(이름은 쉼표(,) 기준으로 구분))\n',
    );
    this.validateInput(input);
    return input.split(',');
  },

  async readRounds() {
    const input = await Console.readLineAsync('시도할 횟수는 몇 회인가요?\n');
    this.validateInput(input);
    return input;
  },

  validateInput(input) {
    if (input === null || input === '') {
      throw new Error('[ERROR] 입력값이 비어있습니다.');
    }
  },
};

export default InputView;
