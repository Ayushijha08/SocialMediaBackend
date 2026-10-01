const { Schema, default: mongoose } = require("mongoose");

const postSchema = new Schema({
    title: {
        type: String,
        required: true,
        unique: false,
        minLength: 3,
        maxLength: 50,
        trim: true  // 'Sa n j oy'
    },
    description: {
        type: String,
        required: true,
        trim: true,
        minLength: 3,
        maxLength: 100
    },
    creationDateTime: {
        type: String,
        required: true
    },
    userId: {
        type: Schema.Types.ObjectId,  // alphanumeric format
        required: true,
        ref: "user"
    },
    imageUrl: {
        type: String
    },
    isDeleted: {
        type: Boolean,
        deafult: false
    },
    deletionDateTime: {
        type: String,
    }
})

module.exports = mongoose.model("post", postSchema)