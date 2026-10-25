
let contactName = "";
let contactEmail = "";
let contactMessage = "";

const contactForm = document.querySelector(".contact-form");

contactForm.addEventListener("submit", function(event) {
    event.preventDefault();

    contactName = document.getElementById("name").value.trim();
    contactEmail = document.getElementById("email").value.trim();
    contactMessage = document.getElementById("message").value.trim();

    // Sanitize the input before using it
    contactName = contactName.replace(/[<>]/g, "");
    contactEmail = contactEmail.replace(/[<>]/g, "");
    contactMessage = contactMessage.replace(/[<>]/g, "");

    console.log("Name:", contactName);
    console.log("Email:", contactEmail);
    console.log("Message:", contactMessage);

    alert("Your message has been received!");
});
let visitorCount = localStorage.getItem("visitorCount");

if (visitorCount === null) {
    visitorCount = 1;
} else {
    visitorCount = Number(visitorCount) + 1;
}

localStorage.setItem("visitorCount", visitorCount);

document.getElementById("visitor-count").textContent = visitorCount;

const carouselImages = [
    "haihai.png",
    "media/gallery2.jpg",
    "media/gallery3.jpg"
];

let currentImageIndex = 0;

const carouselImage = document.getElementById("carousel-image");
const prevButton = document.getElementById("prev-btn");
const nextButton = document.getElementById("next-btn");

function showCarouselImage() {
    carouselImage.src = carouselImages[currentImageIndex];
}

nextButton.addEventListener("click", function() {
    currentImageIndex++;

    if (currentImageIndex >= carouselImages.length) {
        currentImageIndex = 0;
    }

    showCarouselImage();
});

prevButton.addEventListener("click", function() {
    currentImageIndex--;

    if (currentImageIndex < 0) {
        currentImageIndex = carouselImages.length - 1;
    }

    showCarouselImage();
});
