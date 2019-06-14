const cookList = require('./cookListScema');

module.exports.getAllRecipe = (length,typeSort) =>(
    cookList.find({}).sort({date:(typeSort==='newest')?-1:1}).limit(length)
);

module.exports.getCookListByInputValue = (inputValue,typeSort) =>(
    cookList.find({name:{$regex: `${inputValue}`, $options:'i'}}).sort({date:(typeSort==='newest')?-1:1})
);

module.exports.getCookListCounter = () =>(
    cookList.find({})
);

module.exports.addNewCookItem = (id,name,date,description,img) =>{
    const cookItem = new cookList({
        id,
        date,
        name,
        description,
        img,
        versions:[]
    });
    return cookItem.save();
};

module.exports.updateCookItemById = (id,name,date,description,img) =>{
    return cookList.findOne({id},(err,doc)=>{
        if(err){return new Error('Sorry, there was error')};
        const oldVersion = {
            date:doc.date,
            name:doc.name,
            description:doc.description,
            img:doc.img
        }

        doc['date']= date;
        doc['description']= description;
        doc['img']= img;
        doc.versions.unshift(oldVersion);
        return doc.save();
    });
};