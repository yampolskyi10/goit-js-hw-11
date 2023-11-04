// gallery.js

// Функція для створення і відображення галереї зображень
function createImageGallery(images) {
    const galleryElement = document.querySelector('.gallery');
  
    // Очищення галереї перед відображенням нових зображень
    galleryElement.innerHTML = '';
  
    images.forEach((image) => {
      const imageCard = createImageCard(image);
      galleryElement.appendChild(imageCard);
    });
  
    // Ініціалізація галереї SimpleLightbox (якщо ви використовуєте бібліотеку)
    const lightbox = new SimpleLightbox('.photo-card a');
    lightbox.refresh();
  }
  
  // Функція для створення окремої картки зображення
  function createImageCard(image) {
    const cardElement = document.createElement('div');
    cardElement.classList.add('photo-card');
  
    const imageElement = document.createElement('img');
    imageElement.src = image.largeImageURL;
    imageElement.alt = image.tags;
    imageElement.loading = 'lazy';
  
    const infoElement = document.createElement('div');
    infoElement.classList.add('info');
  
    // Додайте інші елементи (наприклад, лайки, перегляди, коментарі, завантаження) на картку за потребою
  
    cardElement.appendChild(imageElement);
    cardElement.appendChild(infoElement);
  
    return cardElement;
  }
  
  // Експортуємо функції, щоб їх можна було використовувати в інших JavaScript-файлах
  export { createImageGallery };
  