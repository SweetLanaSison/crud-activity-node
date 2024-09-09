const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
require('dotenv').config();

const app = express();
const PORT = process.env.PORT || 5000;

app.use(cors());
app.use(express.json());
app.use('/api', require('./routes/StudentRoutes'));

mongoose.connect(process.env.MONGO_URI, {userNewUrlParser: true, useUnifiedTopology: true})
.then(() => console.log('MongoDB connected'))
.catch((error) => console.log('MongoDB connection error', error));

app.listen(PORT, () => {
    console.log('Server is running on port ${PORT}');
});