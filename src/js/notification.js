import notiflix from "notiflix";
function showSuccessNotification(message) {
    notiflix.Notify.success(message);
  }
  
  
  function showErrorNotification(message) {
    notiflix.Notify.failure(message);
  }
  

  

  export { showSuccessNotification, showErrorNotification };

  
  