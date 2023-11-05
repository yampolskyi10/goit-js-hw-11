
function showSuccessNotification(message) {
    notiflix.Notify.success(message);
  }
  
  
  function showErrorNotification(message) {
    notiflix.Notify.failure(message);
  }
  

  

  export { showSuccessNotification, showErrorNotification };

  
  import { showSuccessNotification, showErrorNotification } from './notification.js';



showSuccessNotification('Зображення успішно завантажено.');
showErrorNotification('Сталася помилка при завантаженні зображень.');
