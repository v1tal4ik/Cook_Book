const db = require('../../models/cookList_DB.js');



module.exports = async (req, res, next) => {
    let result = await db.getCookListCounter();
    res.status(200).json(result.length);
}