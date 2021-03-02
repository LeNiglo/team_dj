const nextEnv = require('next-env');
const dotenvLoad = require('dotenv-load');

dotenvLoad();

const withNextEnv = nextEnv();

module.exports = withNextEnv({
  publicRuntimeConfig: {
    API_URL: process.env.API_URL
  }
});
