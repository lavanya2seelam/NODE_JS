const { Pool } = require("pg");
const pool = new Pool({
    user: "postgres",
    host: "localhost",
    database: "RESTAPI",
    password: "kdpl@123",
    port: 5432,
});

function create(tablename) {
    return new Promise((success, reject) => {
        pool.query(`CREATE TABLE IF NOT EXISTS ${tablename}(id SERIAL PRIMARY KEY, name VARCHAR(20) NOT NULL,email varchar(30),fee integer not null)`, (err, res) => {
            if (err) {
                console.log(err);
                reject(err);
            } else {
                console.log("Table created successfully");
                success(res);
            }
        });
    });
}

function insert(name,email,fee) {
    return new Promise((success, reject) => {
        pool.query(`INSERT INTO student (name,email,fee) VALUES ($1,$2,$3)`, [name,email,fee], (err, res) => {
            if (err) {
                console.log(err);
                reject(err);
            } else {
                console.log("Row inserted successfully");
                success(res);
            }
        });
    });
}

function update(id, name) {
    return new Promise((success, reject) => {
        pool.query(`UPDATE student SET name = $2 WHERE id = $1`, [id, name], (err, res) => {
            if (err) {
                console.log(err);
                reject(err);
            } else {
                console.log("Row updated successfully");
                success(res);
            }
        });
    });
}

function delete1(id) {
    return new Promise((success, reject) => {
        pool.query(`DELETE FROM student WHERE id = $1`, [id], (err, res) => {
            if (err) {
                console.log(err);
                reject(err);
            } else {
                console.log("Row deleted successfully");
                success(res);
            }
        });
    });
}

function select() {
    return new Promise((success, reject) => {
        pool.query(`SELECT * FROM student`, (err, rows) => {
            if (err) {
                console.log(err);
                reject(err);
            } else {
                console.log("Rows selected successfully");
                success(rows);  // Return only the rows
            }
        });
    });
}

module.exports = {
    pool, create, insert, update, delete1, select
};
