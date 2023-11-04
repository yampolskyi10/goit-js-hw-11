// Підключення бібліотек та файлів
import axios from 'axios';
import notiflix from 'notiflix';

// Змінні для відстеження поточної сторінки та результатів
let currentPage = 1;
const perPage = 40;
let searchQuery = '';

// Пошук
const form = document.getElementById('search-form');
const gallery = document.querySelector('.gallery');
const loadMoreButton = document.querySelector('.load-more');

form.addEventListener('submit', async (e) => {
  e.preventDefault();
  gallery.innerHTML = ''; // Очищення галереї
  currentPage = 1;
  searchQuery = form.querySelector('input[name="searchQuery"]').value;
  searchImages();
});

async function searchImages() {
  const apiKey = 'YOUR_API_KEY';
  const url = `https://pixabay.com/api/?key=${apiKey}&q=${searchQuery}&image_type=photo&orientation=horizontal&safesearch=true&page=${currentPage}&per_page=${perPage}`;

  try {
    const response = await axios.get(url);
    const data = response.data;
    const images = data.hits;

    if (images.length === 0) {
      notiflix.Notify.failure("Sorry, there are no images matching your search query. Please try again.");
      return;
    }

    displayImages(images);
    checkLoadMoreButton(data.totalHits);
  } catch (error) {
    console.error('Error:', error);
  }
}

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
}

function checkLoadMoreButton(totalHits) {
  if (currentPage * perPage < totalHits) {
    loadMoreButton.style.display = 'block';
  } else {
    loadMoreButton.style.display = 'none';
    notiflix.Notify.info("We're sorry, but you've reached the end of search results.");
  }
}

loadMoreButton.addEventListener('click', () => {
  currentPage += 1;
  searchImages();
});

// Виклик функції при завантаженні сторінки
searchImages();
