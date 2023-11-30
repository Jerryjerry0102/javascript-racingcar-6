import Game from './Game.js';

class App {
  async play() {
    await new Game().main();
  }
}

export default App;
