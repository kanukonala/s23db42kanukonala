var express = require('express');
const book_controlers= require('../controllers/book');
var router = express.Router();

/* GET home page. 
router.get('/', function(req, res, next) {
  res.render('book', { title: 'Search Results Book' });

});*/

router.get('/', book_controlers.book_view_all_Page );
/* GET detail costume page */
router.get('/detail', book_controlers.book_view_one_Page);

/* GET create costume page */
router.get('/create', book_controlers.book_create_Page);

/* GET create update page */
router.get('/update', book_controlers.book_update_Page);

/* GET delete costume page */
router.get('/delete', book_controlers.book_delete_Page);


// for a specific Costume.
// GET request for one costume.
//router.get('/book/:id', book_controlers.book_detail);
module.exports = router;

