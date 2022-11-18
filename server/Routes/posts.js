const express = require("express");
const router = express.Router();
const Posts = require("../Models/posts") 

router.route("/read").get((req, res) => {
    Posts.find({}, (err, founditems) => {
       res? res.send(founditems): console.log(err);
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

router.route("/update/:id").put( (req, res) => {
    Posts.findByIdAndUpdate({ _id: req.params.id }, {
        Title: req.body.Title,
        Poster: req.body.Poster,
        Type: req.body.Type
    })
        .then((doc => { console.log(doc) }))
        .catch((err) => { console.log(err) });
    
});

router.route("/delete/:id").delete((req, res) => {
    Posts.findByIdAndDelete({ _id: req.params.id })
        .then((item) => { console.log(item) })
        .catch((err)=>{console.log(err);})
})


module.exports = router