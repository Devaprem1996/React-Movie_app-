const mongoose = require("mongoose");

const postSchema = new mongoose.Schema({
    Title: {
        type: String,
        required:true
    },
    Poster: {
        type: String,
        required:false
    },
    Type: {
        type: String,
        required:true
    },
    
})

const Posts = mongoose.model("Posts", postSchema);

module.exports = Posts