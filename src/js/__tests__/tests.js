import Settings from '../app';

test('Тест с ошибкой', () => {
  const received = new Settings().changeSetting('ccc', 'light');

  expect(received).toEqual('Вводимые настройки отсутствуют!');
});
