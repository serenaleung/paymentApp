/* global fetch */
const DOMAIN = 'http://192.168.1.178:3000';
const API_TOKEN = '3H0xoOVzMVHjsh27C7e8PwQSrA_PaAFCgBn-rYKfjHM';

function getUsers() {
  return fetch(`${DOMAIN}/api/v1/users?api_token=${API_TOKEN}`)
  .then(res => (console.info(res), res))
  .then(function (res) { return res.json() })
  .catch(console.error)
}

export { getUsers };
