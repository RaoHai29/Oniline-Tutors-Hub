function SendMail() {
    let subject = document.getElementById("subject");
    let subjectText = subject.options[subject.selectedIndex].text;

    let params = {
        user_name: document.querySelector("input[name='name']").value,
        user_email: document.querySelector("input[name='email']").value,
        user_phone: document.querySelector("input[name='phone']").value,
        user_subject: subjectText
    };

    // Validate form fields
    if (params.user_name === '' || params.user_email === '' || params.user_phone === '' || params.user_subject === '') {
        alert('Please fill in all required fields.');
        return;
    }

    emailjs.send('service_cjplvge', 'template_eqrcoot', params)
        .then(function(response) {
            console.log('Email sent successfully!', response.status, response.text);
            // Redirect to payment page
            window.location.href = 'index.html';
        }, function(error) {
            console.error('Error sending email:', error);
            alert('Error sending email. Please try again later.');
        });
}

// Initialize EmailJS SDK
(function() {
    emailjs.init("OM0y_huMFAZvCoLZZ"); 
})();
