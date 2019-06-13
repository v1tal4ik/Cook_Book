const db = require('../../models/cookList_DB.js');
const formidable = require('formidable');
const path = require('path');
const fs = require('fs');


module.exports = async (req, res, next) => {
    
     const form = new formidable.IncomingForm();

        form.uploadDir = path.join(process.cwd(), './build/img/cookIcon');
      //form.uploadDir = path.join(process.cwd(), './public/img/cookIcon');

    form.parse(req, (err, fields, files) => {
        if(err){
            res.send({path: '/img/no-photo.png'});
        }else{
            let old_path = files['image'].path;
            let new_path = path.join('./build/img/cookIcon', files['image'].name);
            //let new_path = path.join('./public/img/cookIcon', files['image'].name);
             fs.renameSync(old_path, new_path);
             let res_path = new_path.substring(6);
             res.send({path: res_path});
        }
    });
}