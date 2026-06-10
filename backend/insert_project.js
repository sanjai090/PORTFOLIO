const mongoose = require('mongoose');
require('dotenv').config();

// Mongoose Schema & Model
const projectSchema = new mongoose.Schema({
  title: String,
  description: String,
  live_url: String,
  github_url: String
});

const Project = mongoose.model('Project', projectSchema);

mongoose.connect(process.env.MONGO_URI)
  .then(async () => {
    console.log('Connected to MongoDB.');

    const projects = [
      {
        title: 'ACADEMIC ANALYZER',
        description: 'A comprehensive dashboard for academic analysis.',
        live_url: 'https://svheccgpa.onrender.com/',
        github_url: 'https://github.com/sanjai090/ACADEMIC-DASHBOARD'
      },
      {
        title: 'CGPA CALCULATOR',
        description: 'Calculate your GPA and CGPA easily, accurately, and instantly.',
        live_url: 'https://sanjai090.github.io/CGPA/',
        github_url: 'https://github.com/sanjai090/CGPA'
      },
      {
        title: 'PORTFOLIO',
        description: 'Personal portfolio showcasing my projects, skills, and achievements.',
        live_url: '',
        github_url: 'https://github.com/sanjai090/PORTFOLIO'
      }
    ];

    try {
      // Optional: Clear existing projects before inserting
      await Project.deleteMany({});
      
      const results = await Project.insertMany(projects);
      console.log('Successfully inserted projects!', results);
    } catch (err) {
      console.error('Error inserting projects:', err);
    } finally {
      mongoose.connection.close();
    }
  })
  .catch((err) => {
    console.error('Error connecting to MongoDB:', err);
  });
