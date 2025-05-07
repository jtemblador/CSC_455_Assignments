require('dotenv').config();
const mongoose = require('mongoose');

// connect
mongoose.connect(process.env.MONGO_URL, {
  useNewUrlParser: true,
  useUnifiedTopology: true
});

const db = mongoose.connection;
db.on('error', console.error.bind(console, 'Connection error:'));
db.once('open', async () => {
  console.log('✅ Connected to MongoDB');
  
// define schema
  const studentSchema = new mongoose.Schema({
    name: String,
    age: Number,
    enrolled: Boolean,
    favoriteLanguages: [String]
  });
  
  // create model
  const Student = mongoose.model('Student', studentSchema);
  
  // insert
  await Student.create({
    name: 'Jose',
    age: 26,
    enrolled: true,
    favoriteLanguages: ['C++', 'Python']
  });
  console.log('✅ Inserted one student record.');
  
  // query/display
  const students = await Student.find({ enrolled: true });
  console.log('✅ Enrolled Students:', students);
  
  mongoose.connection.close();
});