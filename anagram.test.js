const isAnagram = require('./anagram');

test(`isAnagram function exists`, () => {
  expect(typeof isAnagram).toEqual('function');
});

test(`"cinema" is Anagram of "iceman"`, () => {
  expect(isAnagram('cinema', 'iceman')).toBeTruthy();
});

test(`"Dormitory" is Anagram of "dirty room##"`, () => {
  expect(isAnagram('Dormitory', 'dirty room##')).toBeTruthy();
});

test(`"Hello" is not an Anagram of "Aloha"`, () => {
  expect(isAnagram('Hello', 'dirty Aloha')).toBeFalsy();
});