const express = require("express");
const router = express.Router();
const Posts = require("../Models/posts") 

router.route("/read").get((req, res) => {
    Posts.find({}, (err, founditems) => {
        res.send(founditems)
    })
});

router.route("/createpost").post((req, res) => {
    
    const title = req.body.Title
    const type = req.body.Type
    const poster = req.body.Poster
    const newPost = new Posts({
        Title: title,
        Type: type,
        Poster:poster
    });
    newPost.save();
    console.log("posted");
})
module.exports = router