const express=require('express');

const router=express.Router();

// required home controller module to handle the routes
const homeController=require('../controllers/home_controller');

console.log('Router loaded');

//for homepage 
router.get('/',homeController.home);

// for adding task
router.post('/add-task',homeController.add);

//for deleting task 
router.get('/delete-task',homeController.delete);

module.exports=router;