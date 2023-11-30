import { Console } from '@woowacourse/mission-utils';

const OutputView = {
  printWinners(winners) {
    if (winners.length === 1) {
      Console.print(`\n최종 우승자: ${winners[0]}`);
    } else {
      Console.print(`\n최종 우승자: ${winners.join(', ')}`);
    }
  },

  printRoundResults(roundResults) {
    Console.print('\n실행 결과');
    Console.print(this.formatRoundResults(roundResults));
  },

  formatRoundResults(roundResults) {
    return roundResults
      .map((roundResult) => this.formatRoundResult(roundResult))
      .join('\n\n');
  },

  formatRoundResult(roundResult) {
    return roundResult
      .map(({ name, position }) => `${name} : ${'-'.repeat(position)}`)
      .join('\n');
  },
};

export default OutputView;
