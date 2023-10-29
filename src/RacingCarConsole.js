import { Console } from '@woowacourse/mission-utils';
import RacingCarValidator from './RacingCarValidator.js';

class RacingCarConsole {
  #validator;
  #DELIMITER;
  #NAMELIST_QUERY;
  #NUMBER_QUERY;
  #RESULT;
  #WINNER;
  #ERROR;
  #ADVANCED_MARK = '-';

  constructor(koreanDelimiter, delimiter, maxLength) {
    this.#validator = new RacingCarValidator(maxLength);
    this.#DELIMITER = delimiter;
    this.#NAMELIST_QUERY = `경주할 자동차 이름을 입력하세요.(이름은 ${koreanDelimiter}(${delimiter}) 기준으로 구분)`;
    this.#NUMBER_QUERY = '시도할 횟수는 몇 회인가요?';
    this.#RESULT = '실행 결과';
    this.#WINNER = '최종 우승자 : ';
    this.#ERROR = `[ERROR] 이름은 ${koreanDelimiter}(${delimiter})를 기준으로 구분하며 서로 다른 이름으로 ${maxLength}자 이하만 가능합니다.`;
  }

  printWinner(winnerList) {
    const winnerString = winnerList.join(', ');
    Console.print(`${this.#WINNER}${winnerString}`);
  }

  printResultMessage() {
    Console.print('');
    Console.print(this.#RESULT);
  }

  printResult(temp) {
    temp.forEach(([name, advancedDegree]) => {
      Console.print(`${name} : ${this.#ADVANCED_MARK.repeat(advancedDegree)}`);
    });
    Console.print('');
  }

  async askCarMap() {
    const string = await Console.readLineAsync(this.#NAMELIST_QUERY);
    const nameList = RacingCarConsole.stringToArray(string, this.#DELIMITER);
    if (!this.#validator.validateNameList(nameList))
      throw new Error(this.#ERROR);
    const carMap = RacingCarConsole.arrayToMap(nameList);
    return carMap;
  }

  async askNumberOfAttempts() {
    const answer = await Console.readLineAsync(this.#NUMBER_QUERY);
    return answer;
  }

  static stringToArray(string, delimiter) {
    return string.replace(/ /g, '').split(delimiter);
  }

  static arrayToMap(array) {
    const map = new Map();
    array.forEach((v) => {
      map.set(v, 0);
    });
    return map;
  }
}

export default RacingCarConsole;
