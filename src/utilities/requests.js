/* global fetch */
// const DOMAIN = 'http://192.168.1.178:3000';
// const DOMAIN = 'http://192.168.43.16:3000';
const DOMAIN = 'http://192.168.1.75:3000';
const API_TOKEN = 'QdSJ76ObfOKJv8rTHhTmFQZjkhrGIK16I5UtOvCKFkw';

function getUsers() {
  return fetch(`${DOMAIN}/api/v1/users?api_token=${API_TOKEN}`)
    .then(res => (console.info(res), res))
    .then(function (res) { return res.json() })
    .catch(console.error)
}

// function getMessages () {
//   return fetch(`${DOMAIN}/api/v1/questions?api_token=${API_TOKEN}`)
//     .then(function (res) { return res.json() });
// }
//
// function getMessage (id) {
//   return fetch(`${DOMAIN}/api/v1/questions/${id}?api_token=${API_TOKEN}`)
//     .then(function (res) { return res.json() });
// }


// export { getUsers, getMessages, getMessage, postMessageRequest };
export { postMessageRequest };
