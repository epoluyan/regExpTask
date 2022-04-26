export default class Validator {
  constructor(name) {
    this.name = name;
  }

  validateUsername() {
    if ((/\d{3}/).test(this.name)) {
      throw new Error('Ошибка! Имя не должно содержать подряд более трёх цифр');
    } else if ((/^\d|^-|^_|\d$|-$|_$/).test(this.name)) {
      throw new Error('Ошибка! Имя не должно начинаться и заканчиваться с цифры, тире или символами подчёркивания');
    } else if (!(/^[a-zA-Za-zA-Z0-9-_]+$/).test(this.name)) {
      throw new Error('Ошибка! Имя должно содержать только латинские буквы без пробелов');
    } else {
      return this.name;
    }
  }
}
