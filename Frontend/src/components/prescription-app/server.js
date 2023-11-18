// server.js
const express = require('express');
const bodyParser = require('body-parser');

const app = express();
const PORT = process.env.PORT || 3000;

// Middleware to parse JSON data
app.use(bodyParser.json());

// Serve static files (HTML, CSS, JS)
app.use(express.static('public'));

// Endpoint for handling prescription form submissions
app.post('/generate-prescription', (req, res) => {
    const { patientName, medicationName, dosage, instructions } = req.body;

    // Validate if all fields are present
    if (!patientName || !medicationName || !dosage || !instructions) {
        return res.status(400).json({ error: 'All fields are required.' });
    }

    // Process the prescription data as needed
    const prescriptionData = {
        patientName,
        medicationName,
        dosage,
        instructions,
    };

    // In a real-world scenario, you might want to store the prescriptionData in a database.

    // Send the prescription data as JSON response
    res.json({ success: true, data: prescriptionData });
});

// Start the server
app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
});