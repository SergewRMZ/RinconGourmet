import axios from 'axios';

const Api = axios.create({
  baseURL: `http://localhost:3000/api`
});


const usersApi = axios.create({
  baseURL: `http://localhost:3000/api/auth`
});

const reservationsApi = axios.create({
  baseURL: `http://localhost:3000/api/reservation`
});

export { 
  usersApi,
  reservationsApi, 
  Api
};
