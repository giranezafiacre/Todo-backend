import pool from './config';

export const createTables = () => {
    const querry = `CREATE TABLE IF NOT EXISTS
    todos(
        id serial,
        title character varying(20) NOT NULL,
        completed boolean NOT NULL,
        PRIMARY KEY(id)
    );`;
    pool.query(querry)
    .then(() => console.log('Tables created'))
    .catch((err) => {
        console.log(err);
        pool.end();
    });
};
export default pool;
require('make-runnable');