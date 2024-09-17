const mongoose = require('mongoose');

const guideSchema = new mongoose.Schema({
    GuideId: {
      type: String,
      required: true,
      unique: true
    },
    GuideName: {
        type: String,
        required: true,
    },
    Students: [{
      type: mongoose.Schema.Types.String,
      ref: 'Student'
    }]
  });

const Guide = mongoose.model('Guide', guideSchema);

module.exports = { Guide };