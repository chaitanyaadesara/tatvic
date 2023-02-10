const mongoose = require('mongoose')

const User = new mongoose.Schema({
  googleId: {
    type: String,
    required: true,
  },
  email: {
    type: String,
    required: true,
  },
  displayName: {
    type: String,
    required: true,
  },
  firstName: {
    type: String,
    required: true,
  },
  lastName: {
    type: String,
    required: true,
  },
  image: {
    type: String,
  }
}, {
  timestamps: true
});

User.index({
  email: 1
});

module.exports = mongoose.model('User', User)
