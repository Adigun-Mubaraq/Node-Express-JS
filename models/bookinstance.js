var mongoose = require('mongoose');

var Schema = mongoose.Schema;

var BookInstanceSchema = new Schema(
    {
        book: {type: Schema.Types.ObjectId, ref: 'Book', required: true},
        imprint: {type: String, required : true},
        status: {
            type: String, 
            required: true,
            enum: ['Available', 'Maintance', 'Loaned', 'Reserved'],
            default: 'Maintenance'
        },
        due_back: {type: Date, default: Date.now()},
    });

// Virtual for bookInstance Url
BookInstanceSchema
.virtual('url')
.get(function(){
    return '/catalog/bookinstance/' + this._id;
});

//Export Model
module.exports = mongoose.model('BookInstance', BookInstanceSchema);