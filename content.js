function showContent(content) {
    let dynamicContent = document.getElementById('content-display');
    let images = document.querySelectorAll('.clickable-img');
  
    // Remove 'active' class from all images
    images.forEach((img) => {
        img.classList.remove('active');
    });

    // Add 'active' class to the clicked image and update content
    let activeImage = [...images].find(img => img.alt === content);
    activeImage.classList.add('active');
    
    // Update the content based on the clicked image
    switch (content) {
        case 'Support':
            dynamicContent.innerHTML = `
                <h1>Round-the-Clock Tutoring Support</h1>
                <p>At Online Tutors Hub, we ensure that no stone is left unturned when it comes to providing the best tutoring and academic support. As your vigilant academic guides, our expert tutors are available around the clock to offer assistance and guidance at every stage of your learning journey. Whether you need help understanding complex concepts or personalized study support, we're here to support you every minute of the way.</p>`;
            break;
        case 'Certified Expert':
            dynamicContent.innerHTML = `
                <h1>Expert Tutoring Across a Wide Range of Subjects</h1>
                <p>Feeling overwhelmed by complex assignments? Don’t worry—Online Tutors Hub is here to guide you through it all. Whether you're delving into the wonders of literature or exploring the intricacies of science, our expert tutors are ready to provide top-notch support. With our comprehensive tutoring services, you'll gain clarity, achieve excellence, and unlock a world of knowledge.</p>`;
            break;
        case 'Expert':
            dynamicContent.innerHTML = `
                <h1>Certified Tutoring Team</h1>
                <p>Achieve academic success with precision, expertise, and unparalleled support from our certified team at Online Tutors Hub. With a diverse group of highly qualified tutors, including PhDs and specialists across various fields, we provide exceptional tutoring services tailored to your needs. Our team is dedicated to helping you excel and achieve high distinction in every subject, ensuring that you receive the best support possible.</p>`;
            break;
        case 'Reward':
            dynamicContent.innerHTML = `
                <h1>1:1 Expert Tutoring Sessions</h1>
                <p>At Online Tutors Hub, we offer personalized 1:1 tutoring sessions to address your unique academic needs. Whether you need assistance with assignment writing or have specific questions, our expert tutors provide tailored support to clarify your doubts and enhance your understanding. With individualized attention, you'll stay ahead of the curve and make significant progress towards achieving your academic goals.</p>`;
            break;
        case 'Plagiarism-free':
            dynamicContent.innerHTML = `
                <h1>Plagiarism-Free and AI-Verified Study Material's</h1>
                <p>At Online Tutors Hub, we blend innovation with integrity to provide you with top-quality study material. Our expert team is dedicated to delivering AI-verified and plagiarism-free resources, ensuring that your study materials are original and reliable. With our support, you can trust that your learning materials are crafted to enhance your knowledge and help your ideas thrive.</p>`;
            break;
        default:
            dynamicContent.innerHTML = `
                <h1>Support Services</h1>
                <p>We provide comprehensive support services for all our clients, ensuring their satisfaction.</p>`;
    }
}
