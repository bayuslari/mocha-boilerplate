const env = require('dotenv').config();

export const api = {
  auth: `${process.env.AUTH_BASE_URL}`
};

export default {
  api,
};
