import axios from 'axios';

const instance = axios.create({
  baseURL: 'https://react-my-burger-94948.firebaseio.com/',
});

export default instance;
