
function displayImages(images) {
  const fragment = document.createDocumentFragment();
  images.forEach((image) => {
      const photoCard = document.createElement('div');
      photoCard.classList.add('photo-card');

      const imageElement = document.createElement('img');
      imageElement.src = image.webformatURL;
      imageElement.alt = image.tags;
      imageElement.loading = 'lazy';

      const infoDiv = document.createElement('div');
      infoDiv.classList.add('info');

      const infoItems = ['Likes', 'Views', 'Comments', 'Downloads'];
      infoItems.forEach((item) => {
          const infoItem = document.createElement('p');
          infoItem.classList.add('info-item');
          infoItem.innerHTML = `<b>${item}:</b> ${image[item.toLowerCase()]}`;
          infoDiv.appendChild(infoItem);
      });

      photoCard.appendChild(imageElement);
      photoCard.appendChild(infoDiv);
      fragment.appendChild(photoCard);
  });

  gallery.appendChild(fragment);

  if (currentPage * perPage < totalHits) {
      const loadMoreButton = document.createElement('button');
      loadMoreButton.classList.add('load-more');
      loadMoreButton.textContent = 'Load more';
      gallery.appendChild(loadMoreButton);

      loadMoreButton.addEventListener('click', () => {
          currentPage += 1;
          searchImages();
          loadMoreButton.style.display = 'none';
      });
  }
}
