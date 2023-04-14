var express = require('express');
const book_controlers= require('../controllers/book');
var router = express.Router();

/* GET home page. 
router.get('/', function(req, res, next) {
  res.render('book', { title: 'Search Results Book' });

});*/
router.get('/', book_controlers.book_view_all_Page );
// for a specific Costume.
// GET request for one costume.
//router.get('/book/:id', book_controlers.book_detail);
module.exports = router;
