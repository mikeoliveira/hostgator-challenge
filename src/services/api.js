import axios from 'axios';

const api = axios.create({
  //baseURL: 'https://api.github.com',
  baseURL: 'https://7ac2b8ab-f3e5-4534-863d-90dd424a6405.mock.pstmn.io/prices'
});

export default api;