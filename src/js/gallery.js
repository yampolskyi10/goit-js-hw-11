
function createImageGallery(images) {
    const galleryElement = document.querySelector('.gallery');
  
 
    galleryElement.innerHTML = '';
  
    images.forEach((image) => {
      const imageCard = createImageCard(image);
      galleryElement.appendChild(imageCard);
    });
  
   
    const lightbox = new SimpleLightbox('.photo-card a');
    lightbox.refresh();
  }
  
  
  function createImageCard(image) {
    const cardElement = document.createElement('div');
    cardElement.classList.add('photo-card');
  
    const imageElement = document.createElement('img');
    imageElement.src = image.largeImageURL;
    imageElement.alt = image.tags;
    imageElement.loading = 'lazy';
  
    const infoElement = document.createElement('div');
    infoElement.classList.add('info');
 
  
    cardElement.appendChild(imageElement);
    cardElement.appendChild(infoElement);
  
    return cardElement;
  }
 
  export { createImageGallery };
  