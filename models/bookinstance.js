var mongoose = require('mongoose');
const { DateTime } = require('luxon');

var Schema = mongoose.Schema;

var BookInstanceSchema = new Schema(
    {
        book: { type: Schema.Types.ObjectId, ref: 'Book', required: true },
        imprint: { type: String, required: true },
        status: {
            type: String,
            required: true,
            enum: ['Available', 'Maintance', 'Loaned', 'Reserved'],
            default: 'Maintenance'
        },
        due_back: { type: Date, default: Date.now() },
    });

// Virtual for bookInstance Url
BookInstanceSchema
    .virtual('url')
    .get(function () {
        return '/catalog/bookinstance/' + this._id;
    });
// Virtual for bookinstance due_back
BookInstanceSchema
    .virtual('due_back_formatted')
    .get(function () {
        return DateTime.fromJSDate(this.due_back).toLocaleString(DateTime.DATE_MED);
    });

//Export Model
module.exports = mongoose.model('BookInstance', BookInstanceSchema);