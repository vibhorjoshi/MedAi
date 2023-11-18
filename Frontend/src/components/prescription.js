function generatePrescription() {
    const patientName = document.getElementById('patient-name').value;
    const medicationName = document.getElementById('medication-name').value;
    const dosage = document.getElementById('dosage').value;
    const instructions = document.getElementById('instructions').value;

    // Validate if all fields are filled
    if (!patientName || !medicationName || !dosage || !instructions) {
        alert('Please fill in all fields before generating the prescription.');
        return;
    }

    // Send form data to the backend
    fetch('/generate-prescription', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({
                patientName,
                medicationName,
                dosage,
                instructions,
            }),
        })
        .then(response => response.json())
        .then(data => {
            if (data.success) {
                // Display success message or handle it as needed
                alert('Prescription generated successfully!');
            } else {
                // Display error message or handle it as needed
                alert('Error generating prescription. Please try again.');
            }
        })
        .catch(error => {
            console.error('Error:', error);
            alert('An unexpected error occurred. Please try again.');
        });
}