// Obtener elementos del DOM
const imageUrlInput = document.getElementById('imageUrl');
const addImageBtn = document.getElementById('addImageBtn');
const deleteImageBtn = document.getElementById('deleteImageBtn');
const gallery = document.getElementById('gallery');

// Agregar imagen al hacer clic en el botón
addImageBtn.addEventListener('click', () => {
  const url = imageUrlInput.value.trim();
  if (!url) return;

  const img = document.createElement('img');
  img.src = url;
  img.alt = "Imagen dinámica";

  // Evento para seleccionar la imagen
  img.addEventListener('click', () => {
    const selected = document.querySelector('#gallery img.selected');
    if (selected) selected.classList.remove('selected');
    img.classList.add('selected');
  });

  gallery.appendChild(img);
  imageUrlInput.value = '';
});

// Eliminar imagen seleccionada
deleteImageBtn.addEventListener('click', () => {
  const selected = document.querySelector('#gallery img.selected');
  if (selected) {
    gallery.removeChild(selected);
  }
});

// Atajo de teclado: Enter para agregar imagen
imageUrlInput.addEventListener('keydown', (event) => {
  if (event.key === 'Enter') {
    addImageBtn.click();
  }
});
