document.addEventListener('DOMContentLoaded', function () {
  const form = document.getElementById('contact-form');

  const emailInput = document.getElementById('email');
  const messageElement = document.getElementById('message');

  const commentsInput = document.getElementById('comments');
  
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
      return false;
    }
  }
// -----------
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

  function openModal() {
    backdrop.classList.add('is-open');
    document.body.classList.add('no-scroll');
    document.addEventListener('keydown', handleEscape);
  }

  function closeModal() {
    backdrop.classList.remove('is-open');
    document.body.classList.remove('no-scroll');
    document.removeEventListener('keydown', handleEscape);
  }

  function handleEscape(event) {
    if (event.key === 'Escape') {
      closeModal();
    }
  }

  backdrop.addEventListener('click', function (event) {
    if (event.target === backdrop) {
      closeModal();
    }
  });

  closeModalBtn.addEventListener('click', closeModal);

  emailInput.addEventListener('input', validateEmail);
  commentsInput.addEventListener('input', validateComments);

  form.addEventListener('submit', async function (event) {
    event.preventDefault();

    const isEmailValid = validateEmail();
    const isCommentsValid = validateComments();

    if (!(isEmailValid && isCommentsValid)) return;

    spinner.classList.remove('hidden');

    const formData = {
      email: emailInput.value.trim(),
      comment: commentsInput.value.trim(),
    };

    try {
      const response = await fetch('https://portfolio-js.b.goit.study/api/requests', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(formData),
      });

      if (!response.ok) {
        throw new Error(`HTTP error! Status: ${response.status}`);
      }

      const result = await response.json();

      setTimeout(() => {
        spinner.classList.add('hidden');
        openModal();

        form.reset();
        emailInput.classList.remove('valid', 'invalid');
        commentsInput.classList.remove('valid', 'invalid');
        messageElement.textContent = '';
      }, 1000);
    } catch (error) {
      spinner.classList.add('hidden');
      messageElement.textContent = '❌ Submission failed. Try again.';
      messageElement.classList.remove('success');
      messageElement.classList.add('error');
      console.error('API Error:', error);
    }
  });
});










