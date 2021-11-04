const addition = require('./index')
test('ajouter 1 et 2 doit être égal à 3', () => {
    expect(addition(1, 2)).toBe(3);
  });