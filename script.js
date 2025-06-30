// script.js

const gallery = document.getElementById("gallery");
const imageUrlInput = document.getElementById("imageUrl");
const addImageBtn = document.getElementById("addImageBtn");
const deleteImageBtn = document.getElementById("deleteImageBtn");

let selectedImage = null;

addImageBtn.addEventListener("click", () => {
  const url = imageUrlInput.value.trim();
  if (!url) {
    alert("Por favor ingresa una URL válida.");
    return;
  }

  const img = document.createElement("img");
  img.src = url;
  img.alt = "Imagen agregada";
  img.className = "img-thumbnail border border-2";
  img.style.maxWidth = "150px";
  img.style.cursor = "pointer";

  img.addEventListener("click", () => {
    if (selectedImage) {
      selectedImage.classList.remove("border-primary");
    }
    selectedImage = img;
    img.classList.add("border-primary");
  });

  gallery.appendChild(img);
  imageUrlInput.value = "";
});

deleteImageBtn.addEventListener("click", () => {
  if (selectedImage) {
    gallery.removeChild(selectedImage);
    selectedImage = null;
  } else {
    alert("Selecciona una imagen para eliminar.");
  }
});
