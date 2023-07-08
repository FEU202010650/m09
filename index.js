const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');

const courseRoutes = require('./routes/courseRoutes');

const app = express();

mongoose.connect('mongodb+srv://202010650:OCIfyXCTw9AEyASC@sandbox.btzyzmi.mongodb.net/an22_sample_database', {
  useNewUrlParser: true,
  useUnifiedTopology: true
});
mongoose.connection.once('open', () => {
  console.log('Now connected to MongoDB Atlas');
});

app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use('/users', courseRoutes);

const port = process.env.PORT || 4000;
app.listen(port, () => {
  console.log(`Server running on localhost:${port}`);
});
