const express = require('express')
const Blogcontroller = require('../controller/Blogcontroller');
const Admincontroller = require('../controller/Admincontroller')
const router = express.Router();

router.get('/getall',Blogcontroller.getall);
router.post('/bloginsert',Blogcontroller.bloginsert);
router.get('/blogview/:id',Blogcontroller.blogview);
router.post('/contactinsert',Blogcontroller.contactinsert)
router.get('/contactall',Blogcontroller.getcontact);


// Admin site
router.get('/getadmin',Admincontroller.getadmin);
router.post('/admininsert',Admincontroller.admininsert);
router.get('/adminview/:id',Admincontroller.adminview);



module.exports = router;

