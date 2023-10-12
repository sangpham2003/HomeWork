const lightbox = document.getElementById("lightbox");
const closeButton = document.getElementById("close-button");
const lightboxImage = document.getElementById("lightbox-image");
const imageDescription = document.getElementById("image-description");
const imageGallery = document.querySelectorAll(".image-gallery img");

imageGallery.forEach((img) => {
    img.addEventListener("click", () => {
        lightbox.style.display = "flex";
        lightboxImage.src = img.src;
        imageDescription.textContent = img.alt;
    });
});

closeButton.addEventListener("click", () => {
    lightbox.style.display = "none";
});

lightbox.addEventListener("click", (e) => {
    if (e.target === lightbox) {
        lightbox.style.display = "none";
    }
});
