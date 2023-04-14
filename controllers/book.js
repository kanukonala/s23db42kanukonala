var book = require('../models/book');
// List of all book
exports.book_list = async function(req, res) {
    try{
    thebook = await book.find();
    res.send(thebook);
    }
    catch(err){
    res.status(500);
    res.send(`{"error": ${err}}`);
    }
    };
    
// for a specific Costume.
// for a specific Costume.
exports.book_detail = async function(req, res) {
    console.log("detail" + req.params.id)
    try {
    result = await book.findById( req.params.id)
    res.send(result)
    } catch (error) {
    res.status(500)
    res.send(`{"error": document for id ${req.params.id} not found`);
    }
    };
    
// Handle Costume create on POST.
exports.book_create_post = async function(req, res) {
    console.log(req.body)
    let document = new book();
    // We are looking for a body, since POST does not have query parameters.
    // Even though bodies can be in many different formats, we will be picky
    // and require that it be a json object
    // {"costume_type":"goat", "cost":12, "size":"large"}
    document.book_name = req.body.book_name;
    document.year_published = req.body.year_published;
    document.author = req.body.author;
    try{
    let result = await document.save();
    res.send(result);
    }
    catch(err){
    res.status(500);
    res.send(`{"error": ${err}}`);
    }
    };
    
// Handle Costume delete form on DELETE.
exports.book_delete = function(req, res) {
res.send('NOT IMPLEMENTED: book delete DELETE ' + req.params.id);
};
// Handle Costume update form on PUT.
exports.book_update_put = async function(req, res) {
console.log(`update on id ${req.params.id} with body
${JSON.stringify(req.body)}`)
try {
let toUpdate = await book.findById( req.params.id)
// Do updates of properties
if(req.body.book_name)
toUpdate.book_name = req.body.book_name;
if(req.body.year_published) toUpdate.year_published = req.body.year_published;
if(req.body.author) toUpdate.author = req.body.author;
if(req.body.checkboxsale) toUpdate.sale = true;
else toUpdate.same = false;

let result = await toUpdate.save();
console.log("Sucess " + result)
res.send(result)
} catch (err) {
res.status(500)
res.send(`{"error": ${err}: Update for id ${req.params.id}
failed`);
}
};




// VIEWS
// Handle a show all view
exports.book_view_all_Page = async function(req, res) {
    try{
    book = await book.find();
    res.render('book', { title: 'book Search Results', results: thebook });
    }
    catch(err){
    res.status(500);
    res.send(`{"error": ${err}}`);
    }
    };
  
    
