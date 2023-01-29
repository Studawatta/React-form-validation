const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');

const app = express();

mongoose.set('strictQuery', false);

const connect = () => {
  try {
    mongoose.connect(
      'mongodb+srv://thisara:thisara@studentmanager.ujhopmi.mongodb.net/?retryWrites=true&w=majority'
    );
    console.log('Connected to MONGODB');
  } catch (error) {
    console.log(error);
  }
};
app.use(cors());
app.use(express.json());

app.listen(8800, () => {
  connect();
  console.log('Server is runnig');
});
