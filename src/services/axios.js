import axios from 'axios';

// eslint-disable-next-line import/prefer-default-export
export function getMessage() {
  return axios.get('http://localhost:3000/message').then((response) => response.data);
}
