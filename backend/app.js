const express = require('express');
const cors = require('cors');
const mongoose = require('mongoose');
const contactRoutes = require('./routes/contacts.js');

const app = express();

app.use(cors());
app.use(express.json());

mongoose.connect(
  'mongodb+srv://devshukal:devshukal@cluster0.pajxs.mongodb.net/contacts_db?retryWrites=true&w=majority'
)
.then(() => console.log('MongoDB Atlas connected'))
.catch(err => console.log(err));

app.use('/api/contacts', contactRoutes);

app.use((err, req, res, next) => {
  res.status(400).json({ error: err.message });
});

app.listen(3000, () =>
  console.log('Backend running on http://localhost:5000')
);
