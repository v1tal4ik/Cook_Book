const db = require('../../models/cookList_DB.js');



module.exports = async (req, res, next) => {
    const {inputValue,typeSort} = req.query;
    let result = await db.getCookListByInputValue(inputValue,typeSort);
    if(result.length){
        res.status(200).json(result);
    }else{
        res.status(404).json(`Your cook list items not found :(`);
    }   
}