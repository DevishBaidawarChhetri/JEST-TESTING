const axios = require("axios");

const functions = {
  add: (num1, num2) => num1 + num2,
  isNull: () => null,
  checkValue: (value) => value,
  createUser: () => {
    const user = { firstName: 'Devish'};
    user['lastName'] = 'Chhetri';
    return user;
  },
  fetchUser: () => 
    axios
      .get('https://jsonplaceholder.typicode.com/users/1')
      .then(response => response.data)
      .catch(error => error.response.data)
}




module.exports = functions;