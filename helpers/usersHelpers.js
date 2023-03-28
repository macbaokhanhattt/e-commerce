const {db} = require('../config/dbconnect');



const checkValidId = async (id) => {
    let query = `SELECT id FROM "user" WHERE id = $1`;
    let values = [id];

    try {
        const result =  await db.query(query, values);
        if (result.rows.length > 0) {
            return true;
        } else {
            return false;
        }
    } catch (err) {
        console.error(err);
        return false;
    }
};


module.exports = {
    checkValidId
};
