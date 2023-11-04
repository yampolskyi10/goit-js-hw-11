// pixabay.js

// Функція для взаємодії з API Pixabay та пошуку зображень
async function searchImages(searchQuery, currentPage, perPage) {
    const apiKey = 'ВАШ_КЛЮЧ_API_PIXABAY'; // Замініть 'ВАШ_КЛЮЧ_API_PIXABAY' на свій ключ API Pixabay
    const url = `https://pixabay.com/api/?key=${apiKey}&q=${searchQuery}&image_type=photo&orientation=horizontal&safesearch=true&page=${currentPage}&per_page=${perPage}`;
  
    try {
      const response = await axios.get(url);
      const data = response.data;
      const images = data.hits;
      return images;
    } catch (error) {
      console.error('Error:', error);
      return [];
    }
  }
  
  // Експортуємо функцію, щоб її можна було використовувати в іншому JavaScript-файлі
  export { searchImages };
  