var mongoose = require('mongoose');
var mongoURL = process.env.MLAB_URL || 'mongodb://localhost/fetcher'
mongoose.connect('mongodb://eric:shum@ds235768.mlab.com:35768/fullstack');

var db = mongoose.connection;

db.on('error', function() {
  console.log('mongoose connection error');
});

db.once('open', function() {
  console.log('mongoose connected successfully');
});

var emailSchema = mongoose.Schema({
  id: { type: Number, unique: true },
  name: String,
  email: String,
  subject: String,
  message: String,
});

let emailSave = mongoose.model('emailSave', emailSchema);

exports.save = (emailData) => {
  return emailSave.create(emailData)
}
