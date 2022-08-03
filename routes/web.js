const express = require('express')
const Blogcontroller = require('../controller/Blogcontroller');

const router = express.Router();

router.get('/getall',Blogcontroller.getall);
router.post('/bloginsert',Blogcontroller.bloginsert);
router.get('/blogview/:id',Blogcontroller.blogview);
router.put('/blogupdate/:id',Blogcontroller.updateblogs);
router.get('/blogdelete/:id',Blogcontroller.blogdelete);
router.post('/contactinsert',Blogcontroller.contactinsert)
router.get('/contactall',Blogcontroller.getcontact);







module.exports = router;

