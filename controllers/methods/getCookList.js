const db = require('../../models/cookList_DB.js');



module.exports = async (req, res, next) => {
    const {length,typeSort} = req.query;
    let result = await db.getAllRecipe(+length,typeSort);
    if(result.length){
        res.status(200).json(result);
    }else{
        res.status(404).json(`Your cook list items not found :(`);
    }   
}