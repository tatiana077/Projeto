// Base de Dados Simulada dos Livros
const initialBooks = [
  {
    id: 1,
    title: "A Fúria dos Reis",
    author: "George R. R. Martin",
    owner: "Tatiana Ramos Vargas",
    location: "Gurupi - TO",
    deposit: "R$ 80,00",
    cover: "https://covers.openlibrary.org/b/id/8231856-L.jpg",
    synopsis: "O segundo livro da aclamada série As Crônicas de Gelo e Fogo. Sete facções disputam o Trono de Ferro num reino dividido pela guerra civil."
  },
  {
    id: 2,
    title: "Capitães da Areia",
    author: "Jorge Amado",
    owner: "Mariana Silva",
    location: "Gurupi - TO",
    deposit: "R$ 45,00",
    cover: "https://covers.openlibrary.org/b/id/10522851-L.jpg",
    synopsis: "A vida de um grupo de crianças abandonadas nas ruas de Salvador, destacando a amizade, a sobrevivência e as injustiças sociais."
  },
  {
    id: 3,
    title: "Dom Casmurro",
    author: "Machado de Assis",
    owner: "Carlos Eduardo",
    location: "Gurupi - TO",
    deposit: "R$ 35,00",
    cover: "https://covers.openlibrary.org/b/id/11145321-L.jpg",
    synopsis: "Bento Santiago narra sua história e a dúvida tormentosa sobre a fidelidade de Capitu na clássica obra da literatura brasileira."
  },
  {
    id: 4,
    title: "O Pequeno Príncipe",
    author: "Antoine de Saint-Exupéry",
    owner: "Ana Clara",
    location: "Gurupi - TO",
    deposit: "R$ 30,00",
    cover: "https://covers.openlibrary.org/b/id/12833521-L.jpg",
    synopsis: "Uma fábula poética sobre o amor, a amizade e o verdadeiro sentido da vida sob o olhar de um jovem príncipe vindo de um asteroide."
  },
  {
    id: 5,
    title: "Ensaio Sobre a Cegueira",
    author: "José Saramago",
    owner: "Lucas Mota",
    location: "Gurupi - TO",
    deposit: "R$ 50,00",
    cover: "https://covers.openlibrary.org/b/id/8225261-L.jpg",
    synopsis: "Uma epidemia de cegueira branca se espalha por uma cidade não nomeada, revelando o melhor e o pior da natureza humana."
  },
  {
    id: 6,
    title: "1984",
    author: "George Orwell",
    owner: "Fernanda Costa",
    location: "Gurupi - TO",
    deposit: "R$ 40,00",
    cover: "https://covers.openlibrary.org/b/id/7222246-L.jpg",
    synopsis: "Um romance distópico sobre a vigilância constante do Grande Irmão e o controle total do estado sobre o indivíduo."
  }
];

let selectedBook = null;
let mapInitialized = false;

// Inicialização ao carregar a página
document.addEventListener("DOMContentLoaded", () => {
  renderBooks(initialBooks);
});

// Navegação entre Abas
function switchTab(tabId) {
  document.querySelectorAll(".tab-content").forEach(el => el.classList.remove("active"));
  document.querySelectorAll(".nav-btn").forEach(el => el.classList.remove("active"));

  const targetTab = document.getElementById(`tab-${tabId}`);
  if (targetTab) targetTab.classList.add("active");

  if (tabId === 'mapa' && !mapInitialized) {
    initMap();
    mapInitialized = true;
  }
}

// Renderizar Grade de Livros
function renderBooks(books) {
  const grid = document.getElementById("booksGrid");
  grid.innerHTML = "";

  books.forEach(book => {
    const card = document.createElement("div");
    card.className = "book-card";
    card.innerHTML = `
      <img src="${book.cover}" alt="${book.title}" onerror="this.src='https://via.placeholder.com/180x220?text=Sem+Capa'">
      <h3>${book.title}</h3>
      <p class="author">${book.author}</p>
      <p class="owner"><i class="fa-solid fa-user"></i> ${book.owner}</p>
      <button class="btn-read" onclick="viewBookDetails(${book.id})">Quero Ler</button>
    `;
    grid.appendChild(card);
  });
}

// Filtrar Livros
function filterBooks() {
  const query = document.getElementById("searchInput").value.toLowerCase();
  const filtered = initialBooks.filter(b => 
    b.title.toLowerCase().includes(query) || 
    b.author.toLowerCase().includes(query) ||
    b.owner.toLowerCase().includes(query)
  );
  renderBooks(filtered);
}

// Ver Detalhes do Livro
function viewBookDetails(bookId) {
  selectedBook = initialBooks.find(b => b.id === bookId);
  if (!selectedBook) return;

  document.getElementById("detailTitle").innerText = selectedBook.title;
  document.getElementById("detailAuthor").innerText = selectedBook.author;
  document.getElementById("detailOwner").innerText = selectedBook.owner;
  document.getElementById("detailLocation").innerText = selectedBook.location;
  document.getElementById("detailDeposit").innerText = selectedBook.deposit;
  document.getElementById("detailSynopsis").innerText = selectedBook.synopsis;
  document.getElementById("detailImg").src = selectedBook.cover;

  switchTab("detalhes");
}

// Solicitar Livro
function solicitarLivro() {
  alert(`Solicitação enviada para ${selectedBook.owner}! Abra a aba Conversas para alinhar os detalhes.`);
  switchTab("chat");
}

// Enviar Mensagem no Chat
function sendMessage() {
  const input = document.getElementById("chatInput");
  const text = input.value.trim();
  if (!text) return;

  const messagesDiv = document.getElementById("chatMessages");
  const newMsg = document.createElement("div");
  newMsg.className = "message sent";
  newMsg.innerText = text;
  messagesDiv.appendChild(newMsg);

  input.value = "";
  messagesDiv.scrollTop = messagesDiv.scrollHeight;
}

// Inicializar Mapa de Gurupi-TO
function initMap() {
  const gurupiCoords = [-11.7292, -49.0686];
  const map = L.map('map').setView(gurupiCoords, 14);

  L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
    attribution: '© OpenStreetMap'
  }).addTo(map);

  // Marcadores de Leitores/Livros
  L.marker([-11.7292, -49.0686]).addTo(map)
    .bindPopup('<b>Tatiana Ramos Vargas</b><br>Livro: A Fúria dos Reis')
    .openPopup();

  L.marker([-11.7340, -49.0620]).addTo(map)
    .bindPopup('<b>Mariana Silva</b><br>Livro: Capitães da Areia');

  L.marker([-11.7220, -49.0750]).addTo(map)
    .bindPopup('<b>Carlos Eduardo</b><br>Livro: Dom Casmurro');
}

// Handlers de Formulário
function handleLogin(e) {
  e.preventDefault();
  alert("Login efetuado com sucesso!");
  switchTab("inicio");
}

function handleBookSubmit(e) {
  e.preventDefault();
  const title = document.getElementById("newTitle").value;
  const author = document.getElementById("newAuthor").value;
  const deposit = document.getElementById("newDeposit").value;

  const newBook = {
    id: Date.now(),
    title,
    author,
    owner: "Seu Nome (Você)",
    location: "Gurupi - TO",
    deposit,
    cover: "https://via.placeholder.com/180x220?text=Livro+Cadastrado",
    synopsis: "Livro cadastrado recentemente pela comunidade."
  };

  initialBooks.unshift(newBook);
  renderBooks(initialBooks);
  alert("Livro cadastrado na rede com sucesso!");
  switchTab("inicio");
}