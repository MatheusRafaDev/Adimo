
document.addEventListener('DOMContentLoaded', function () {

    var logoutButton = document.querySelector('.logout-button');
    var modal = document.getElementById('myModal');
    var confirmButton = document.getElementById('confirmButton');
    var closeModal = document.getElementById('closeModal');
  

    function showModal() {
      modal.style.display = 'block';
    }

    function closeModalFunction() {
      modal.style.display = 'none';
    }
  
  
    function confirmLogout() {
      showModal();
    }

    logoutButton.addEventListener('click', confirmLogout);
    closeModal.addEventListener('click', closeModalFunction);
  

    window.addEventListener('click', function (event) {
      if (event.target === modal) {
        closeModalFunction();
      }
    });

    confirmButton.addEventListener('click', function () {
    
      console.log('Logout confirmed!');
     
      closeModalFunction();
    });
  });
  function toggleCredentials() {
    var credentialsContainer = document.getElementById('credentialsContainer');
    var showCredentialsButton = document.getElementById('showCredentialsButton');
  
    if (credentialsContainer.style.display === 'none') {
      credentialsContainer.style.display = 'block';
      showCredentialsButton.innerText = 'Ocultar Login e Senha';
    } else {
      credentialsContainer.style.display = 'none';
      showCredentialsButton.innerText = 'Mostrar Login e Senha';
    }
  }