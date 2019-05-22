const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const ResourceSchema = new Schema({
    titel: {
        type: String,
        required: true
    },

    description: {
        type: String,
        required: true
    },

    tags: [{
        type: String
    }],

    resource:
        [{
            length: { type: String },
            url: { type: String },
            type: { type: String },
            date: { type: String }
        }]
});

const Resource = mongoose.model("resource", ResourceSchema, "resources");
module.exports = Resource;


