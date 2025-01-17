const mongoose = require('mongoose');

const roleSchema = new mongoose.Schema({
  roleName: { type: String, required: true, unique: true },
  permissions: [String],
});

module.exports = mongoose.model('Role', roleSchema);
