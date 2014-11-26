var express = require('express');
var router = express.Router();
var mongoose = require( 'mongoose' );
var Comment = mongoose.model('Comment');

/* GET form. */
router.get('/', function(req, res) {
    Comment.find(function(err, comments){
        res.render(
            'form',
            {title : 'My funky form', comments : comments}
        );
    });
});

/* POST form. */
router.post('/', function(req, res) {
    new Comment({title : req.body.comment})
        .save(function(err, comment) {
            console.log("++++++"+comment);
            res.redirect('form');
        });
});

module.exports = router;