const addBtn = document.getElementById("add-image");
const removeBtn = document.getElementById("remove-image");
const imageUrl = document.getElementById("image-url");
const gallery = document.getElementById("gallery");
let selectedImage = null;

addBtn.addEventListener("click", () => {
  const url = imageUrl.value.trim();
  if (!url) {
    alert("Ingresa una URL válida.");
    return;
  }

  const img = document.createElement("img");
  img.src = url;
  img.alt = "Imagen de galería";
  img.addEventListener("click", () => {
    if (selectedImage) {
      selectedImage.classList.remove("selected");
    }
    img.classList.add("selected");
    selectedImage = img;
  });
  gallery.appendChild(img);
  imageUrl.value = "";
});

removeBtn.addEventListener("click", () => {
  if (selectedImage) {
    gallery.removeChild(selectedImage);
    selectedImage = null;
  } else {
    alert("Selecciona una imagen primero.");
  }
});
