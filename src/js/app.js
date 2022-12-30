export default class Settings {
  constructor() {
    this.defaultSettings = new Map();
    this.defaultSettings.set('theme', 'dark');
    this.defaultSettings.set('music', 'trance');
    this.defaultSettings.set('dificulty', 'easy');
  }

  changeSetting(param1, param2) {
    const map = this.defaultSettings;

    const themeRepo = ['dark', 'light', 'gray'];
    const musicRepo = ['trance', 'pop', 'rock', 'chillout', 'off'];
    const dificultyRepo = ['easy', 'normal', 'hight', 'nightmare'];

    function addSetting(arg, arg2) {
      delete map[arg];
      map.set(arg, arg2);
    }

    if (param1 === 'theme') {
      if (themeRepo.includes(param2)) {
        addSetting(param1, param2);
      }
    } else if (param1 === 'music') {
      if (musicRepo.includes(param2)) {
        addSetting(param1, param2);
      }
    } else if (param1 === 'dificulty') {
      if (dificultyRepo.includes(param2)) {
        addSetting(param1, param2);
      }
    } else {
      return 'Вводимые настройки отсутствуют!';
    }
    return this.defaultSettings;
  }

  get settings() {
    return this.defaultSettings;
  }
}
