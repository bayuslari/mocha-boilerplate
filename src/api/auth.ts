import supertest from 'supertest';
import dotenv from 'dotenv';

const env = require('dotenv').config();
const api = supertest(process.env.AUTH_BASE_URL);

const getMovieList = (key, search) => api.get('')
 .set('Content-Type', 'application/json')
 .set('Accept', 'application/json')
 .query({apikey : key, s : search})

const Login = (email, password) => api.post('')
 .set('Content-Type', 'application/json')
 .send({email: email, password: password})

module.exports = {
   getMovieList,
   Login
}
