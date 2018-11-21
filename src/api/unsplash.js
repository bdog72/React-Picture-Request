import axios from 'axios';

export default axios.create({
  baseURL: 'https://api.unsplash.com',
  headers: {
    Authorization:
      'Client-ID 7ee6dd098823690689e634c3aabac45c9d134e26204a918779ae82255c74962b'
  }
});
