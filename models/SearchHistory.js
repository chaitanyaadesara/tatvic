const mongoose = require('mongoose')

const SearchHistory = new mongoose.Schema({
    searchText: String,
}, {
    timestamps: true
});

module.exports = mongoose.model('SearchHistory', SearchHistory);
