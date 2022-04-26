import Validator from '../validatorClass';

test('should return name', () => {
  const name = new Validator('name').validateUsername();
  expect(name).toEqual('name');
});

test('should get error if name heve three number in a row', () => {
  const expected = 'Ошибка! Имя не должно содержать подряд более трёх цифр';

  expect(() => new Validator('name333name').validateUsername()).toThrow(expected);
});

test('Name does not start or end with numbers, dashes, or underscores', () => {
  const expected = 'Ошибка! Имя не должно начинаться и заканчиваться с цифры, тире или символами подчёркивания';

  expect(() => new Validator('_name33name').validateUsername()).toThrow(expected);
  expect(() => new Validator('name33name_').validateUsername()).toThrow(expected);
  expect(() => new Validator('name33name-').validateUsername()).toThrow(expected);
  expect(() => new Validator('-name33name').validateUsername()).toThrow(expected);
});

test('Name must have only latin characters', () => {
  const expected = 'Ошибка! Имя должно содержать только латинские буквы';

  expect(() => new Validator('тname').validateUsername()).toThrow(expected);
});

test('Name does not have spaces', () => {
  const expected = 'Ошибка! Имя должно содержать только латинские буквы';

  expect(() => new Validator('name name').validateUsername()).toThrow(expected);
});
