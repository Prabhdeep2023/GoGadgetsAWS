// database module
var mysql = require('mysql2');

// development server
// var config = {
//    host: 'localhost',
//    user: 'root',
//    password: 'PD87@mysql',
//    database: 'aStore'
// };

// production server
var config = {
    host: 'awsmysqldb.csrznyoqg9ee.ap-southeast-2.rds.amazonaws.com',
    user: 'dbuser',
    password: 'Password123!',
    database: 'astore'
};

// init database
var pool = mysql.createPool(config);

//Fetch data
function RunQuery(sql, callback) {
    pool.getConnection(function (err, conn) {
        if (err) {
            ShowErrors(err);
        }
        conn.query(sql, function (err, rows, fields) {
            if (err) {
                ShowErrors(err);
            }
            conn.release();
            callback(rows);
        });
    });
}

//Throw errors
function ShowErrors(err) {
    throw err;
}

module.exports = {
    RunQuery: RunQuery
};