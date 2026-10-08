const chatBox = document.getElementById('chatBox');
const chatForm = document.getElementById('chatForm');

if (chatForm) {
  chatForm.addEventListener('submit', function(e) {
    e.preventDefault();
    const mensagem = document.getElementById('mensagem').value;

    const p = document.createElement('p');
    p.textContent = mensagem;
    chatBox.appendChild(p);

    chatForm.reset();
  });
}
