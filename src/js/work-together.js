document.addEventListener('DOMContentLoaded', function () {
  const form = document.getElementById('contact-form');
  const emailInput = document.getElementById('email');
  const emailWrapper = document.querySelector('.email-wrapper');
  const emailMessage = document.querySelector('.email-message');
  const messageElement = document.getElementById('message');

  const commentsInput = document.getElementById('comments');
  const commentsWrapper = document.querySelector('.comments-wrapper');
  const commentsMessage = document.querySelector('.comments-message');

  const modal = document.getElementById('modal');
  const backdrop = document.querySelector('.backdrop');
  const closeModalBtn = document.querySelector('.close-modal');
  const spinner = document.getElementById('spinner');

  function validateEmail() {
    const emailValue = emailInput.value.trim();
    const emailPattern = new RegExp(emailInput.pattern);

    if (emailPattern.test(emailValue)) {
      emailInput.classList.remove('invalid');
      emailInput.classList.add('valid');
      messageElement.textContent = 'Success!';
      messageElement.classList.remove('error');
      messageElement.classList.add('success');
      return true;
    } else {
      emailInput.classList.remove('valid');
      emailInput.classList.add('invalid');
      messageElement.textContent = 'Invalid email, try again.';
      messageElement.classList.remove('success');
      messageElement.classList.add('error');
    }
  }
  function validateComments() {
    const commentsValue = commentsInput.value.trim();
    if (commentsValue.length > 0) {
      commentsInput.classList.remove('invalid');
      commentsInput.classList.add('valid');
      return true;
    } else {
      commentsInput.classList.remove('valid');
      commentsInput.classList.add('invalid');
      return false;
    }
  }

  emailInput.addEventListener('input', validateEmail);
  commentsInput.addEventListener('input', validateComments);

  form.addEventListener('submit', function (event) {
    event.preventDefault();
    const isEmailValid = validateEmail();
    const isCommentsValid = validateComments();

    validateEmail();

    if (isEmailValid && isCommentsValid) {
      // Показ спіннера
      spinner.classList.remove('hidden');

      setTimeout(function () {
        spinner.classList.add('hidden');
        backdrop.classList.add('is-open');
        document.body.classList.add('no-scroll'); // Заблокувати прокрутку

        // Скидання форми та класів
        form.reset();
        emailInput.classList.remove('valid', 'invalid');
        commentsInput.classList.remove('valid', 'invalid');
        messageElement.textContent = '';
      }, 2000);
    }
  });

  closeModalBtn.addEventListener('click', function () {
    backdrop.classList.remove('is-open');
    document.body.classList.remove('no-scroll');
  });

  backdrop.addEventListener('click', function (event) {
    if (event.target === backdrop) {
      backdrop.classList.remove('is-open');
      document.body.classList.remove('no-scroll');
    }
  });

  document.addEventListener('keydown', function (event) {
    if (event.key === 'Escape') {
      backdrop.classList.remove('is-open');
      document.body.classList.remove('no-scroll');
    }
  });
});
