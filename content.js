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
                <h1>Round-the-clock Assignment Help</h1>
                <p>At Online Tutors Hub, we ensure that no stone is left unturned when it comes to providing the best tutoring and academic support. As your vigilant academic guides, our expert tutors are available around the clock to offer assistance and guidance at every stage of your learning journey. Whether you need help understanding complex concepts or personalized study support, we're here to support you every minute of the way.</p>`;
            break;
        case 'Certified Expert':
            dynamicContent.innerHTML = `
                <h1>Assignment Help Across a Wide Range of Subjects</h1>
                <p>Stuck in a maze of subjective assignments? No worries as our assignment help service stands on top. Whether you want to explore literature's charms or unravel science mysteries, our online assignment help will ensure excellence and open a world of knowledge to you.</p>`;
            break;
        case 'Expert':
            dynamicContent.innerHTML = `
                <h1>Certified Assignment Writers</h1>
                <p>You'll paint success on your scholastic canvas with accuracy, expertise, and unrivalled assignment help when you have 5,689 PhD assignment writers on your side. With the best assignment writers team, we serve as a versatile assignment help service ensuring high distinction across a wide range of assignments.</p>`;
            break;
        case 'Reward':
            dynamicContent.innerHTML = `
                <h1>1:1 Expert Session</h1>
                <p>Our online assignment help conduct 1:1 expert sessions for assignment writing, so you can clear your doubts and ask questions. You'll receive personalized attention and support to enhance your knowledge and expertise, keeping you one step ahead to achieve your academic goals.</p>`;
            break;
        case 'Plagiarism-free':
            dynamicContent.innerHTML = `
                <h1>Plagiarism-Free and AI-Verified Work</h1>
                <p>At Online Tutors Hub, With our assignment help online, innovation meets integrity. Our online assignment help team is committed to delivering AI-verified and plagiarism-free assignments, to ensure you have assignments paved with originality where knowledge can bloom and your ideas can flourish.</p>`;
            break;
        default:
            dynamicContent.innerHTML = `
                <h1>Support Services</h1>
                <p>We provide comprehensive support services for all our clients, ensuring their satisfaction.</p>`;
    }
}
