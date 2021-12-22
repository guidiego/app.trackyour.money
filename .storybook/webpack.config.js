const path = require('path');
const resolve = (dir) => path.resolve(__dirname, dir);

console.log(resolve('../src'));
module.exports = ({
   config
}) => {

  config.resolve.alias = {
    ...config.resolve.alias,
    '~': resolve('../src'),
  };

  return config;
};
