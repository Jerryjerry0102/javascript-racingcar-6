import RacingCar from './RacingCar.js';
import RacingCarConsole from './RacingCarConsole.js';

class App {
  #KOREANDELIMITER = '쉼표';
  #DELIMITER = ',';
  #MAX_LENGTH = 5;

  async play() {
    const racingCar = new RacingCar(
      new RacingCarConsole(
        this.#KOREANDELIMITER,
        this.#DELIMITER,
        this.#MAX_LENGTH,
      ),
    );
    await racingCar.start();
  }
}

export default App;
