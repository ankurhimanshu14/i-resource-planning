const mysql = require('mysql');
const config = require('./config');

const connection = mysql.createConnection(config);

const queryFunction = (statement, ...rest ) => {
    return new Promise((resolve, reject) => {
        connection.query(statement, ...rest, (err, results, fields) => {
            if(err) {
                reject(new Error(err));
            } else {
                resolve(results);
            }
        })
    })
}

module.exports = queryFunction;