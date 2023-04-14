(() => {
  const refs = {
  openModalBtn: document.querySelector("[data-modal-open]"),
  closeModalBtn: document.querySelector("[data-modal-close]"),
  modal: document.querySelector("[data-modal]"),
  };
  const registrationBtn = document.querySelector('.registration-btn');
  
  refs.openModalBtn.addEventListener("click", toggleModal);
  refs.closeModalBtn.addEventListener("click", toggleModal);
  
  function toggleModal() {
  refs.modal.classList.toggle("is-hidden");
  }
  
  function handleFormSubmit(event) {
  event.preventDefault(); // чтобы страница не перезагружалась
  // ваш код обработки формы, например, отправка данных на сервер
  registrationBtn.classList.add('is-hidden'); // добавляем класс, который скроет кнопку
  refs.modal.classList.add("is-hidden"); // скрываем модальное окно после успешной отправки формы
  }
  
  const form = document.querySelector('form');
  form.addEventListener('submit', handleFormSubmit);
  })();
