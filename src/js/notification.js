// notifications.js

// Функція для відображення успішного повідомлення
function showSuccessNotification(message) {
    notiflix.Notify.success(message);
  }
  
  // Функція для відображення повідомлення про помилку
  function showErrorNotification(message) {
    notiflix.Notify.failure(message);
  }
  
  // Інші функції для відображення інших видів повідомлень, які вам потрібні
  
  // Експортуємо функції, щоб їх можна було використовувати в інших JavaScript-файлах
  export { showSuccessNotification, showErrorNotification };

  
  import { showSuccessNotification, showErrorNotification } from './notifications.js';

// Використання функцій для відображення повідомлень
showSuccessNotification('Зображення успішно завантажено.');
showErrorNotification('Сталася помилка при завантаженні зображень.');
