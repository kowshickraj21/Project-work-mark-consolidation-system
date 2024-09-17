const mongoose = require('mongoose');

const studentSchema = new mongoose.Schema({
  id: {
    type: String,
    required: true,
    unique: true
  },
  GuideId: {
    type: mongoose.Schema.Types.String,
    ref: 'Guide',
    required: true
  },
  Semester: {
    type: Number,
    required: true
  },
  GuideMarks: {
    type: Number,
    required: true
  },
  TotalMarks: {
    type: Number,
    required: true
  },
  Moderation: {
    type: Boolean,
    default: false
  },
  ModerationMarks: {
    type: Number,
    required: true
  }
});

const Student = mongoose.model('Student', studentSchema);

const addStudent = async (studentData) => {
  const student = new Student(studentData);
  await student.save();
  console.log('Student added:', student);
};

const getStudents = async () => {
  const students = await Student.find()
    .populate('Guide_id')
    .populate({
      path: 'Moderation', 
      model: 'Moderation'
    })
    .exec();
  console.log('All students:', students);
};

module.exports = { Student, addStudent, getStudents };
