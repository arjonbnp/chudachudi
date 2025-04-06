const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');

const app = express();
const PORT = process.env.PORT || 3000;

app.use(bodyParser.json());

// MongoDB Connection
mongoose.connect('mongodb://localhost:27017/pcdbd', { useNewUrlParser: true, useUnifiedTopology: true })
  .then(() => console.log("Connected to MongoDB"))
  .catch((err) => console.log("MongoDB connection error: ", err));

// Crime Schema and Model
const crimeSchema = new mongoose.Schema({
    caseID: String,
    crimeType: String,
    location: String,
    date: String,
    description: String,
});

const Crime = mongoose.model('Crime', crimeSchema);

// Route to add a new crime record
app.post('/add-crime', async (req, res) => {
    const { caseID, crimeType, location, date, description } = req.body;

    const newCrime = new Crime({
        caseID,
        crimeType,
        location,
        date,
        description,
    });

    try {
        await newCrime.save();
        res.status(201).json({ message: "Crime record added successfully!" });
    } catch (error) {
        res.status(500).json({ message: "Error adding crime record", error });
    }
});

// Route to fetch all crimes
app.get('/get-crimes', async (req, res) => {
    try {
        const crimes = await Crime.find();
        res.status(200).json(crimes);
    } catch (error) {
        res.status(500).json({ message: "Error fetching crimes", error });
    }
});

// Server running
app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});
