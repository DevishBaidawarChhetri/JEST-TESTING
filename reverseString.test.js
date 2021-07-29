const reverseString = require('./reverseString');

// toBeDefined
test('reverseString function exists', () => {
  expect(reverseString).toBeDefined();
})


test('String Reverses', () => {
  expect(reverseString('Hello')).toEqual('olleh');
});