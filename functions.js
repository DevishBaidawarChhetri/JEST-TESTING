const functions = {
  add: (num1, num2) => num1 + num2,
  isNull: () => null,
  checkValue: (value) => value,
  createUser: () => {
    const user = { firstName: 'Devish'};
    user['lastName'] = 'Chhetri';
    return user;
  }
}

module.exports = functions;