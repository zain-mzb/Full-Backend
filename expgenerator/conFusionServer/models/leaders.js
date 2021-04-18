const mongoose = require('mongoose');
const Schema = mongoose.Schema;

require('mongoose-currency').loadType(mongoose);

const Currency = mongoose.Types.Currency;

const leaderSchema = new Schema(
{
  name: {
    type: String,
    required: true
  },
  image: {
    type: String,
    required: true
  },
  designation: {
    type: String,
    default: ''
  },
  abbr: {
    type: String,
    required: true,
  },
  description: {
    type: String,
    default: false
  },
  featured: {
    type: String,
    required: true
  }
});

var Leaders = mongoose.model("Leader", leaderSchema);

module.exports = Leaders;


