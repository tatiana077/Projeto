const lista = document.getElementById('livros');
const formLivro = document.getElementById('formLivro');

document.addEventListener('DOMContentLoaded', () => {
  const livrosSalvos = JSON.parse(localStorage.getItem('livros')) || [];
  livrosSalvos.forEach(livro => adicionarLivro(livro));
});

if (formLivro) {
  formLivro.addEventListener('submit', function(e) {
    e.preventDefault();

    const titulo = document.getElementById('titulo').value;
    const autor = document.getElementById('autor').value;
    const fotoInput = document.getElementById('foto');
    const foto = URL.createObjectURL(fotoInput.files[0]);
    const dono = document.getElementById('dono').value;
    const contato = document.getElementById('contato').value;
    const valor = document.getElementById('valor').value;

    const livro = { titulo, autor, foto, dono, contato, valor };
    salvarLivro(livro);
    adicionarLivro(livro);

    formLivro.reset();
  });
}

function adicionarLivro(livro) {
  const card = document.createElement('div');
  card.classList.add('card');

  const img = document.createElement('img');
  img.src = livro.foto;

  const h3 = document.createElement('h3');
  h3.textContent = livro.titulo;

  const pAutor = document.createElement('p');
  pAutor.textContent = "Autor: " + livro.autor;

  const pDono = document.createElement('p');
  pDono.textContent = "Dono: " + livro.dono;

  const pContato = document.createElement('p');
  pContato.textContent = "Contato: " + livro.contato;

  const pValor = document.createElement('p');
  pValor.textContent = "Valor em caso de não devolução: R$ " + livro.valor;

  card.appendChild(img);
  card.appendChild(h3);
  card.appendChild(pAutor);
  card.appendChild(pDono);
  card.appendChild(pContato);
  card.appendChild(pValor);

  lista.appendChild(card);
}

function salvarLivro(livro) {
  const livros = JSON.parse(localStorage.getItem('livros')) || [];
  livros.push(livro);
  localStorage.setItem('livros', JSON.stringify(livros));
}

function carregarMeusLivros(usuario) {
  const lista = document.getElementById('listaMeusLivros');
  const livros = JSON.parse(localStorage.getItem('livros')) || [];
  const meusLivros = livros.filter(livro => livro.dono === usuario);

  meusLivros.forEach(livro => {
    const card = document.createElement('div');
    card.classList.add('card');

    const img = document.createElement('img');
    img.src = livro.foto;

    const h3 = document.createElement('h3');
    h3.textContent = livro.titulo;

    const pAutor = document.createElement('p');
    pAutor.textContent = "Autor: " + livro.autor;

    const pValor = document.createElement('p');
    pValor.textContent = "Valor em caso de não devolução: R$ " + livro.valor;

    const btnExcluir = document.createElement('button');
    btnExcluir.textContent = "Excluir";
    btnExcluir.classList.add('btn-excluir');
    btnExcluir.onclick = () => excluirLivro(livro.id);

    card.appendChild(img);
    card.appendChild(h3);
    card.appendChild(pAutor);
    card.appendChild(pValor);
    card.appendChild(btnExcluir);

    lista.appendChild(card);
  });
}

function excluirLivro(id) {
  let livros = JSON.parse(localStorage.getItem('livros')) || [];
  livros = livros.filter(livro => livro.id !== id);
  localStorage.setItem('livros', JSON.stringify(livros));
  location.reload();
}
