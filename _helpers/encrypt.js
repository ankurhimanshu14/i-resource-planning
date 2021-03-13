const bcrypt = require('bcrypt');

function encrypt(arg, salt) {
    const encryption = bcrypt.hash(arg, salt)
    return encryption
};

module.exports = encrypt;