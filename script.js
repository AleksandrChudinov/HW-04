const btnLoadImages = document.getElementById("load-images-button");
const gallery = document.getElementById("gallery");
const loader = document.getElementById("loader");
const URL = "https://api.thecatapi.com/v1/images/search?limit=10";

async function getUrlsArray() {
  try {
    const response = await fetch(URL);
    const data = await response.json();
    return data.map((object) => object.url);
  } catch (error) {
    alert("Что-то сломалось");
    return [];
  }
}
async function loadImages() {
  gallery.style.filter = "blur(10px)";
  loader.style.display = "block";
  const urlsArray = await getUrlsArray();
  urlsArray.forEach((url) => {
    const img = document.createElement("img");
    gallery.appendChild(img);
    img.src = url;
    img.addEventListener("click", () => {
      window.open(img.src, "_blank");
    });
  });
  loader.style.display = "none";
  gallery.style.filter = "none";
  gallery.style.display = "flex";
}
btnLoadImages.addEventListener("click", loadImages);
