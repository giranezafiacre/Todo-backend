import pool from './config';

export const query = async (myQuery, values = []) => pool.connect()
    .then(client => client
        .query(myQuery, values)
        .then(res => {
            client.release();
            return res.rows;
        }));
export default query;
