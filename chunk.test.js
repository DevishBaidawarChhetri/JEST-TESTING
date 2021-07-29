const chunkArray = require('./chunk');

test('Chunk Array function exists', () => {
  expect(chunkArray).toBeDefined();
});

test('Chunk an array of 10 values with length of 2', ()=> {
  const numners = [1,2,3,4,5,6,7,8,9,10,11];
  const len = 2;
  const chunkedArr = chunkArray(numners, len);
  expect(chunkedArr).toEqual([[1,2],[3,4],[5,6],[7,8],[9,10],[11]]);
});