const crypto = require('crypto');

module.exports = () => {
  return 'proj_' + crypto.randomBytes(16).toString('hex');
};
