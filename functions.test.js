const functions = require('./functions');

// toBe
test('Adds 2 + 2 to equal to 4', () => {
  expect(functions.add(2,2)).toBe(4);
});

// not
test('Adds 2 + 2 to not equal to 5', () => {
  expect(functions.add(2,2)).not.toBe(5);
});

// toBeNull
test('Should be null', () => {
  expect(functions.isNull()).toBeNull();
});

// toBeFalsy
test('Should be falsy', () => {
  expect(functions.checkValue(undefined)).toBeFalsy();
});

// toEqula
test('Should be Devish Chhetri Object', () => {
  expect(functions.createUser()).toEqual({
    firstName: 'Devish',
    lastName: 'Chhetri'
  });
});

// Less than and greater than
test('Should be under than 1600', () => {
  const load1 = 800;
  const load2 = 800;
  expect(load1 + load2).toBeLessThanOrEqual(1600);
});

// Regex
test('There is no I in team', () => {
  expect('team').not.toMatch(/I/i);
});

// Arrays
test('Admin should be in usernames', () => {
  usernames = ['admin', 'devish', 'chhetri'];
  expect(usernames).toContain('admin');
});