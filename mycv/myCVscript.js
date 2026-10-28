
let contactName = "";
let contactEmail = "";
let contactMessage = "";

const contactForm = document.querySelector(".contact-form");


if (contactForm) {
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
}
let visitorCount = localStorage.getItem("visitorCount");

if (visitorCount === null) {
    visitorCount = 1;
} else {
    visitorCount = Number(visitorCount) + 1;
}

localStorage.setItem("visitorCount", visitorCount);

const visitorElement = document.getElementById("visitor-count");

if (visitorElement) {
    visitorElement.textContent = visitorCount;
}


const carouselImage = document.getElementById("carousel-image");
const prevButton = document.getElementById("prev-btn");
const nextButton = document.getElementById("next-btn");

const carouselImages = [
    "haihai.png",
    "media/gallery2.jpg",
    "media/gallery3.jpg"
];

let currentImageIndex = 0;

function showCarouselImage() {
    if (carouselImage) {
        carouselImage.src = carouselImages[currentImageIndex];
    }
}

if (carouselImage && prevButton && nextButton) {
    showCarouselImage();

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
}



async function updateTime() {
  const cityElement = document.getElementById("city");
  const timeElement = document.getElementById("time");

  if (!cityElement || !timeElement) {
    console.error("World Clock elements not found");
    return;
  }

  try {
    const response = await fetch(
      "https://timeapi.io/api/Time/current/zone?timeZone=Asia/Bangkok"
    );

    if (!response.ok) {
      throw new Error("Could not get time from API");
    }

    const data = await response.json();

    cityElement.textContent = "Bangkok, Thailand";
    const date = new Date(data.dateTime);

timeElement.textContent = date.toLocaleString("en-GB", {
  day: "2-digit",
  month: "short",
  year: "numeric",
  hour: "2-digit",
  minute: "2-digit",
  second: "2-digit",
  hour12: false,
  timeZone: "Asia/Bangkok"
});
  } catch (error) {
    cityElement.textContent = "Bangkok, Thailand";
    timeElement.textContent = "Unable to load time";
    console.error("Clock error:", error);
  }
}

updateTime();
setInterval(updateTime, 60000);
