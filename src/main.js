// src/main.js
if ("serviceWorker" in navigator) {
  navigator.serviceWorker
    .register("/serviceWorker.js")
    .then((registration) => {
      console.log("Service worker registered:", registration);
    })
    .catch((error) => {
      console.error("Error registering service worker:", error);
    });
}

// Fetch an image and log whether it's fetched from cache or network
const imgElement = document.getElementById("my-image");
const imageUrl =
  "https://upload.wikimedia.org/wikipedia/commons/thumb/7/72/BillieEilishO2160622_%2844_of_45%29_%2852152978743%29_%28cropped%29.jpg/346px-BillieEilishO2160622_%2844_of_45%29_%2852152978743%29_%28cropped%29.jpg";

imgElement.addEventListener("click", () => {
  fetch(imageUrl)
    .then((response) => {
      if (response.ok) {
        console.log("Image fetched from network:", imageUrl);
      } else {
        console.log("Image fetch failed:", imageUrl);
      }
    })
    .catch((error) => {
      console.error("Image fetch error:", error);
    });
});
