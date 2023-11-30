import Game from './service/Game.js';

class App {
  async play() {
    await new Game().main();
  }
}

export default App;
