const mongoose = require('mongoose');
mongoose.Promise = global.Promise;
const slug = require('slugs');

const schema = new mongoose.Schema({
    name: {
        type: String,
        trim: true,
        required: true
    },
    slug: String,
    description: {
        type: String,
        trim: true
    },
    tags: [String]
});

schema.pre('save', function(next) {
    if (this.isModified('name')) {
        this.slug = slug(this.name);
    }
    next();
})

module.exports = mongoose.model('Store', schema);