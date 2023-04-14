const form = document.querySelector('form');

form.addEventListener('submit', async (event) => {
  event.preventDefault();

  const formData = new FormData(event.target);
  const name = formData.get('name');
  const password = formData.get('password');

  try {
    const response = await fetch('/signup', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({ name, password })
    });

    if (response.ok) {
      alert('Cadastro realizado com sucesso!');
      window.location.href = '/login';
    } else {
      const data = await response.json();
      alert(data.message);
    }
  } catch (error) {
    console.error(error);
    alert('Ocorreu um erro durante o cadastro');
  }
});