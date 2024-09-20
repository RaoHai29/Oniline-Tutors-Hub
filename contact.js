
function SendMail() {
    let subject = document.getElementById("subject");
    let subjectText = subject.options[subject.selectedIndex].text;

    let params = {
        name: document.querySelector('input[name="name"]').value,
        email: document.querySelector('input[name="email"]').value,
        phone: document.querySelector('input[name="phone"]').value,
        university: document.querySelector('input[name="university"]').value,
        subject: document.querySelector('select[name="subject"]').value,
        due_date: document.querySelector('input[name="due_date"]').value,
        word_count: document.querySelector('input[name="word_count"]').value,
        description: document.querySelector('textarea[name="description"]').value,
        user_subject: subjectText
    };

    // Validate form fields
    if (params.user_name === '' || params.user_email === '' || params.user_phone === '' || params.user_subject === '') {
        alert('Please fill in all required fields.');
        return;
    }

    emailjs.send('service_fdymjts', 'template_dp0tsaw', params)
        .then(function (response) {
            console.log('Email sent successfully!', response.status, response.text);
            // Redirect to payment page
            window.location.href = 'index.html';
        }, function (error) {
            console.error('Error sending email:', error);
            alert('Error sending email. Please try again later.');
        });
}

// Initialize EmailJS SDK
(function () {
    emailjs.init("OM0y_huMFAZvCoLZZ");
})();
