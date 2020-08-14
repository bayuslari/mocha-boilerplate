import supertest from 'supertest';
import { api } from './constants/api';
const request = supertest(api.auth);

const getMovieList = (key, search) => request.get('')
 .set('Content-Type', 'application/json')
 .set('Accept', 'application/json')
 .query({apikey : key, s : search})

const Login = (email, password) => request.post('')
 .set('Content-Type', 'application/json')
 .send({email: email, password: password})

module.exports = {
   getMovieList,
   Login
}
