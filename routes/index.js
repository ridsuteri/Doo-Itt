const express=require('express');

const router=express.Router();

const homeController=require('../controllers/home_controller');

console.log('Router loaded');

router.get('/',homeController.home);
router.post('/add-task',homeController.add);
router.get('/delete-task',homeController.delete);

module.exports=router;