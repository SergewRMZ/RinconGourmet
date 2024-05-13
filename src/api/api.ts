import axios from 'axios';

const usersApi = axios.create({
  baseURL: `http://localhost:3000/api/auth`
});

const reservationsApi = axios.create({
  baseURL: `http://localhost:3000/api/reservation`
});

export { 
  usersApi,
  reservationsApi
};