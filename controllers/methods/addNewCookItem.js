const db = require('../../models/cookList_DB.js');



module.exports = async (req, res, next) => {
    const {id,name,date,description,img} = req.body;
    let result = await db.addNewCookItem(id,name,date,description,img);
    if(id === result.id){
        res.status(201).json(`${result.name} - was added to cook list :)`);
    }else{
        res.status(404).json(`${result.name} - was failed to added on cook list :(`);
    }
}