


async function searchImages(searchQuery, currentPage, perPage) {
    const apiKey = '40480914-f5b9761491a6395ad02f7dc1d'; 
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
  
 
  export { searchImages };
  