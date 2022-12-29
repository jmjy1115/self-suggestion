const images = ["unsplash0.jpg", "unsplash1.jpg", "unsplash2.jpg", "unsplash3.jpg", "unsplash4.jpg", "unsplash5.jpg", "unsplash6.jpg"];

const chosenImage = images[Math.floor(Math.random() * images.length)];

function newBgImage() {
  const bgImages = document.getElementById("bg-images")
  bgImages.style.backgroundImage = `url('img/${chosenImage}')`;
}

newBgImage();
