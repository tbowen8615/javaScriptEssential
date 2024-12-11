// Declare and initialize input values
const username = document.getElementById('name').value;
const age = document.getElementById('age').value;
const email = document.getElementById('email').value;
const job = document.getElementById('job').value;
const designation = document.getElementById('designation').value;
const productType = document.getElementById('productType').value;
const feedback = document.getElementById('feedbackText').value;

// Function to handle feedback submission
function submitFeedback() {
    // Populate user feedback details in the display section
    document.getElementById('userName').innerHTML = username;
    document.getElementById('userAge').innerHTML = age;
    document.getElementById('userEmail').innerHTML = email;
    document.getElementById('userJob').innerHTML = job;
    document.getElementById('userDesignation').innerHTML = designation;
    document.getElementById('userProductChoice').innerHTML = productType;
    document.getElementById('userFeedback').innerHTML = feedback;

    // Display user info section
    document.getElementById('userInfo').style.display = 'block';
    alert('Thank you for your valuable feedback');
}

// Attach event listeners
const submitButton = document.getElementById('submitBtn');
submitButton.onclick = submitFeedback;

// Handle Enter key press to submit feedback
document.addEventListener('keydown', function(event) {
    if (event.key === 'Enter') {
        submitFeedback();
    }
});