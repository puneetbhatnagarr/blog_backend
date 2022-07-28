const express = require('express')
const Blogcontroller = require('../controller/Blogcontroller');
const router = express.Router();

router.get('/getall',Blogcontroller.getall);
router.post('/bloginsert',Blogcontroller.bloginsert);
router.get('/blogview/:id',Blogcontroller.blogview)


module.exports = router;

