const express = require('express');
const router = express.Router();
const controllers = require('../../../../controllers/index');

router.get('/cooklist',controllers.getCookList);
router.get('/cooklist/item',controllers.getCookListByInputValue);
router.get('/cooklist/count',controllers.getCookListCounter);

router.post('/cooklist/',controllers.addNewCookItem);
router.put('/cooklist/:id',controllers.updateCookItemById);
router.post('/cooklist/image/',controllers.saveImage);

module.exports = router;