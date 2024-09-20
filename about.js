const images = [
    './images/happy-4.jpg', 
    './images/happy.jpeg', 
    './images/happy-3.jpg', 
    './images/happy-2.jpg', 
    './images/happy-1.jpg'
];

let currentIndex = 0;

function changeImage() {
   
    const imgElement = document.getElementById('image-slider');
    
  
    imgElement.src = images[currentIndex];
    
  
    currentIndex = (currentIndex + 1) % images.length; // Loop back to the first image
}


setInterval(changeImage, 2500);
