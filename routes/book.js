var express = require('express');
const book_controlers= require('../controllers/book');
var router = express.Router();

/* GET home page. 
router.get('/', function(req, res, next) {
  res.render('book', { title: 'Search Results Book' });

});*/
router.get('/', book_controlers.book_view_all_Page );
module.exports = router;
