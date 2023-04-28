var express = require('express');
const book_controlers= require('../controllers/book');
var router = express.Router();
const secured = (req, res, next) => {
  if (req.user){
  return next();
  }
  req.session.returnTo = req.originalUrl;
  res.redirect("/login");
  }

/* GET home page. */
router.get('/', book_controlers.book_view_all_Page );

/* GET detail book page */
router.get('/detail', secured, book_controlers.book_view_one_Page);

/* GET create book page */
router.get('/create', secured, book_controlers.book_create_Page);

/* GET create update page */
router.get('/update', secured, book_controlers.book_update_Page);

/* GET delete book page */
router.get('/delete', secured, book_controlers.book_delete_Page);

// for a specific Costume.
// GET request for one costume.
//router.get('/book/:id', book_controlers.book_detail);
module.exports = router;

