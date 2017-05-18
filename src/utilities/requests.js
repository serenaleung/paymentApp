/* global fetch */
const DOMAIN = 'http://192.168.1.178:3000';
const API_TOKEN = 'VsCX1aVMoaksC-9foiEp3jx1Am9XixizGfev03bj4yU';

function getUsers() {
  return fetch(`${DOMAIN}/api/v1/users?api_token=${API_TOKEN}`)
    .then(res => (console.info(res), res))
    .then(function (res) { return res.json() })
    .catch(console.error)
}


//
// function getQuestions () {
//   return fetch(`${DOMAIN}/api/v1/questions?api_token=${API_TOKEN}`)
//     .then(function (res) { return res.json() });
// }
//
// function getQuestion (id) {
//   return fetch(`${DOMAIN}/api/v1/questions/${id}?api_token=${API_TOKEN}`)
//     .then(function (res) { return res.json() });
// }
//
// function postQuestion (questionParams) {
//   return fetch(
//     `${DOMAIN}/api/v1/questions?api_token=${API_TOKEN}`,
//     {
//       method: 'POST',
//       headers: { 'Content-Type': 'application/json' },
//       body: JSON.stringify({question: questionParams})
//     }
//   );
// }

// export { getQuestions, getQuestion, postQuestion };
export { getUsers };
