const bcrypt = require('bcrypt');

function comparePassword(clientPassword, hashPassword) {
    const result = bcrypt.compare(clientPassword, hashPassword)
    return result
};

module.exports = comparePassword;