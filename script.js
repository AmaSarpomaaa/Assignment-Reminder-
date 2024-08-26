// Initialize Email.js with your user ID
emailjs.init("YOUR_USER_ID");

document.getElementById('assignmentForm').addEventListener('submit', function(event) {
    event.preventDefault();

    const className = document.getElementById('className').value;
    const assignmentName = document.getElementById('assignmentName').value;
    const dueDate = new Date(document.getElementById('dueDate').value);
    const email = document.getElementById('email').value;
    const now = new Date();
    const timeDifference = dueDate - now;

    // Check if the due date is within the next 24 hours
    if (timeDifference <= 24 * 60 * 60 * 1000) {
        const templateParams = {
            class_name: className,
            assignment_name: assignmentName,
            to_email: email,
            due_date: dueDate.toDateString()
        };

        emailjs.send('service_u5p366f', 'YOUR_TEMPLATE_ID', templateParams)
            .then(function(response) {
                document.getElementById('message').textContent = 'Reminder email sent!';
            }, function(error) {
                document.getElementById('message').textContent = 'Failed to send email. Please try again.';
            });
    } else {
        alert('Assignment is not due within 24 hours, so no email will be sent.');
    }
});
