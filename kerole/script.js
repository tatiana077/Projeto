// Base de dados apontando para imagens na pasta local "capas/"
const initialBooks = [
  // --- PÁGINA 1 (10 Livros - 2 linhas de 5) ---
  {
    id: 1,
    title: "A Fúria dos Reis",
    author: "George R. R. Martin",
    owner: "Tatiana Ramos Vargas",
    location: "Gurupi - TO (Centro)",
    coords: [-11.7292, -49.0686],
    deposit: "R$ 80,00",
    cover: "capas/furia-dos-reis.jpg",
    realPhotos: ["capas/furia-dos-reis.jpg"],
    synopsis: "Livro em excelente estado de conservação, capa dura. Segundo volume da saga As Crônicas de Gelo e Fogo."
  },
  {
    id: 2,
    title: "Capitães da Areia",
    author: "Jorge Amado",
    owner: "Mariana Silva",
    location: "Gurupi - TO (Vila Nova)",
    coords: [-11.7340, -49.0620],
    deposit: "R$ 45,00",
    cover: "capas/capitaes-da-areia.jpg",
    realPhotos: ["capas/capitaes-da-areia.jpg"],
    synopsis: "Exemplar em bom estado, páginas levemente amareladas. Clássico da literatura nacional."
  },
  {
    id: 3,
    title: "Dom Casmurro",
    author: "Machado de Assis",
    owner: "Carlos Eduardo",
    location: "Gurupi - TO (Setor Waldir Lins)",
    coords: [-11.7220, -49.0750],
    deposit: "R$ 35,00",
    cover: "capas/dom-casmurro.jpg",
    realPhotos: ["capas/dom-casmurro.jpg"],
    synopsis: "Edição de capa brochura, ótimo estado para estudo."
  },
  {
    id: 4,
    title: "O Pequeno Príncipe",
    author: "Antoine de Saint-Exupéry",
    owner: "Ana Clara",
    location: "Gurupi - TO (Parque das Acácias)",
    coords: [-11.7380, -49.0710],
    deposit: "R$ 30,00",
    cover: "capas/pequeno-principe.jpg",
    realPhotos: ["capas/pequeno-principe.jpg"],
    synopsis: "Livro seminovo, ilustrado e bem conservado."
  },
  {
    id: 5,
    title: "Ensaio Sobre a Cegueira",
    author: "José Saramago",
    owner: "Lucas Mota",
    location: "Gurupi - TO (Setor Engenho do Porto)",
    coords: [-11.7250, -49.0590],
    deposit: "R$ 50,00",
    cover: "capas/ensaio-cegueira.jpg",
    realPhotos: ["capas/ensaio-cegueira.jpg"],
    synopsis: "Capa brochura em excelente estado de conservação."
  },
  {
    id: 6,
    title: "1984",
    author: "George Orwell",
    owner: "Fernanda Costa",
    location: "Gurupi - TO (Jardim América)",
    coords: [-11.7190, -49.0650],
    deposit: "R$ 40,00",
    cover: "capas/1984.jpg",
    realPhotos: ["capas/1984.jpg"],
    synopsis: "Clássico distópico sem rasuras ou marcações."
  },
  {
    id: 7,
    title: "O Senhor dos Anéis",
    author: "J.R.R. Tolkien",
    owner: "Tatiana Ramos Vargas",
    location: "Gurupi - TO (Centro)",
    coords: [-11.7292, -49.0686],
    deposit: "R$ 90,00",
    cover: "capas/senhor-dos-aneis.jpg",
    realPhotos: ["capas/senhor-dos-aneis.jpg"],
    synopsis: "Edição especial de colecionador."
  },
  {
    id: 8,
    title: "A Metamorfose",
    author: "Franz Kafka",
    owner: "Mariana Silva",
    location: "Gurupi - TO (Vila Nova)",
    coords: [-11.7340, -49.0620],
    deposit: "R$ 25,00",
    cover: "capas/metamorfose.jpg",
    realPhotos: ["capas/metamorfose.jpg"],
    synopsis: "Edição de bolso compacta e muito prática."
  },
  {
    id: 9,
    title: "O Ladrão de Raios",
    author: "Rick Riordan",
    owner: "Gabriel Souza",
    location: "Gurupi - TO (Setor União)",
    coords: [-11.7310, -49.0780],
    deposit: "R$ 40,00",
    cover: "capas/ladrao-de-raios.jpg",
    realPhotos: ["capas/ladrao-de-raios.jpg"],
    synopsis: "Primeiro livro da saga Percy Jackson."
  },
  {
    id: 10,
    title: "Orgulho e Preconceito",
    author: "Jane Austen",
    owner: "Juliana Mendes",
    location: "Gurupi - TO (Residencial Sevilha)",
    coords: [-11.7420, -49.0580],
    deposit: "R$ 38,00",
    cover: "capas/orgulho-e-preconceito.jpg",
    realPhotos: ["capas/orgulho-e-preconceito.jpg"],
    synopsis: "Edição luxo traduzida em português."
  },

  // --- PÁGINA 2 (10 Livros - 2 linhas de 5) ---
  {
    id: 11,
    title: "O Alquimista",
    author: "Paulo Coelho",
    owner: "Thiago Oliveira",
    location: "Gurupi - TO (Setor Sol Nascente)",
    coords: [-11.7120, -49.0620],
    deposit: "R$ 30,00",
    cover: "capas/alquimista.jpg",
    realPhotos: ["capas/alquimista.jpg"],
    synopsis: "Clássico da ficção e inspiração."
  },
  {
    id: 12,
    title: "A Revolução dos Bichos",
    author: "George Orwell",
    owner: "Fernanda Costa",
    location: "Gurupi - TO (Jardim América)",
    coords: [-11.7190, -49.0650],
    deposit: "R$ 28,00",
    cover: "capas/revolucao-dos-bichos.jpg",
    realPhotos: ["capas/revolucao-dos-bichos.jpg"],
    synopsis: "Fábula política indispensável."
  },
  {
    id: 13,
    title: "O Hobbit",
    author: "J.R.R. Tolkien",
    owner: "Carlos Eduardo",
    location: "Gurupi - TO (Setor Waldir Lins)",
    coords: [-11.7220, -49.0750],
    deposit: "R$ 45,00",
    cover: "capas/hobbit.jpg",
    realPhotos: ["capas/hobbit.jpg"],
    synopsis: "A prévia de O Senhor dos Anéis em ótimo estado."
  },
  {
    id: 14,
    title: "A Hora da Estrela",
    author: "Clarice Lispector",
    owner: "Beatriz Lima",
    location: "Gurupi - TO (Setor Malvinas)",
    coords: [-11.7160, -49.0700],
    deposit: "R$ 32,00",
    cover: "capas/hora-da-estrela.jpg",
    realPhotos: ["capas/hora-da-estrela.jpg"],
    synopsis: "Obra-prima de Clarice Lispector."
  },
  {
    id: 15,
    title: "Vidas Secas",
    author: "Graciliano Ramos",
    owner: "Rafael Alves",
    location: "Gurupi - TO (Setor Pedroso)",
    coords: [-11.7270, -49.0550],
    deposit: "R$ 35,00",
    cover: "capas/vidas-secas.jpg",
    realPhotos: ["capas/vidas-secas.jpg"],
    synopsis: "Clássico do modernismo brasileiro."
  },
  {
    id: 16,
    title: "O Cortiço",
    author: "Aluísio Azevedo",
    owner: "Lucas Mota",
    location: "Gurupi - TO (Setor Engenho do Porto)",
    coords: [-11.7250, -49.0590],
    deposit: "R$ 30,00",
    cover: "capas/cortico.jpg",
    realPhotos: ["capas/cortico.jpg"],
    synopsis: "Romance naturalista marco da literatura brasileira."
  },
  {
    id: 17,
    title: "Grande Sertão: Veredas",
    author: "João Guimarães Rosa",
    owner: "Tatiana Ramos Vargas",
    location: "Gurupi - TO (Centro)",
    coords: [-11.7292, -49.0686],
    deposit: "R$ 60,00",
    cover: "capas/grande-sertao.jpg",
    realPhotos: ["capas/grande-sertao.jpg"],
    synopsis: "Exemplar em excelente estado de conservação."
  },
  {
    id: 18,
    title: "O Ateneu",
    author: "Raul Pompeia",
    owner: "Ana Clara",
    location: "Gurupi - TO (Parque das Acácias)",
    coords: [-11.7380, -49.0710],
    deposit: "R$ 28,00",
    cover: "capas/ateneu.jpg",
    realPhotos: ["capas/ateneu.jpg"],
    synopsis: "Livro bem conservado, ideal para estudos de vestibulares."
  },
  {
    id: 19,
    title: "Iracema",
    author: "José de Alencar",
    owner: "Mariana Silva",
    location: "Gurupi - TO (Vila Nova)",
    coords: [-11.7340, -49.0620],
    deposit: "R$ 25,00",
    cover: "capas/iracema.jpg",
    realPhotos: ["capas/iracema.jpg"],
    synopsis: "Lenda do Ceará em edição comentada."
  },
  {
    id: 20,
    title: "Macunaíma",
    author: "Mário de Andrade",
    owner: "Gabriel Souza",
    location: "Gurupi - TO (Setor União)",
    coords: [-11.7310, -49.0780],
    deposit: "R$ 35,00",
    cover: "capas/macunaima.jpg",
    realPhotos: ["capas/macunaima.jpg"],
    synopsis: "O herói sem nenhum caráter em edição especial."
  },

  // --- PÁGINA 3 (7 Livros) ---
  {
    id: 21,
    title: "Memórias Póstumas de Brás Cubas",
    author: "Machado de Assis",
    owner: "Carlos Eduardo",
    location: "Gurupi - TO (Setor Waldir Lins)",
    coords: [-11.7220, -49.0750],
    deposit: "R$ 40,00",
    cover: "capas/bras-cubas.jpg",
    realPhotos: ["capas/bras-cubas.jpg"],
    synopsis: "Um dos maiores clássicos do Realismo brasileiro."
  },
  {
    id: 22,
    title: "E Não Sobrou Nenhum",
    author: "Agatha Christie",
    owner: "Rodrigo Nunes",
    location: "Gurupi - TO (Setor Aeroporto)",
    coords: [-11.7350, -49.0820],
    deposit: "R$ 32,00",
    cover: "capas/e-nao-sobrou-nenhum.jpg",
    realPhotos: ["capas/e-nao-sobrou-nenhum.jpg"],
    synopsis: "Romance policial repleto de mistério."
  },
  {
    id: 23,
    title: "O Ano da Morte de Ricardo Reis",
    author: "José Saramago",
    owner: "Lucas Mota",
    location: "Gurupi - TO (Setor Engenho do Porto)",
    coords: [-11.7250, -49.0590],
    deposit: "R$ 42,00",
    cover: "capas/ricardo-reis.jpg",
    realPhotos: ["capas/ricardo-reis.jpg"],
    synopsis: "Obra aclamada do prêmio Nobel José Saramago."
  },
  {
    id: 24,
    title: "O Alienista",
    author: "Machado de Assis",
    owner: "Beatriz Lima",
    location: "Gurupi - TO (Setor Malvinas)",
    coords: [-11.7160, -49.0700],
    deposit: "R$ 22,00",
    cover: "capas/alienista.jpg",
    realPhotos: ["capas/alienista.jpg"],
    synopsis: "Novela satírica sobre a loucura e a razão."
  },
  {
    id: 25,
    title: "Os Maias",
    author: "Eça de Queirós",
    owner: "Juliana Mendes",
    location: "Gurupi - TO (Residencial Sevilha)",
    coords: [-11.7420, -49.0580],
    deposit: "R$ 36,00",
    cover: "capas/os-maias.jpg",
    realPhotos: ["capas/os-maias.jpg"],
    synopsis: "Clássico da literatura portuguesa."
  },
  {
    id: 26,
    title: "Fogo Morto",
    author: "José Lins do Rego",
    owner: "Thiago Oliveira",
    location: "Gurupi - TO (Setor Sol Nascente)",
    coords: [-11.7120, -49.0620],
    deposit: "R$ 38,00",
    cover: "capas/fogo-morto.jpg",
    realPhotos: ["capas/fogo-morto.jpg"],
    synopsis: "A decadência dos engenhos de açúcar no Nordeste."
  },
  {
    id: 27,
    title: "O Guarani",
    author: "José de Alencar",
    owner: "Rafael Alves",
    location: "Gurupi - TO (Setor Pedroso)",
    coords: [-11.7270, -49.0550],
    deposit: "R$ 30,00",
    cover: "capas/o-guarani.jpg",
    realPhotos: ["capas/o-guarani.jpg"],
    synopsis: "Romance indianista fundamental da cultura brasileira."
  }
];

// Configuração para 10 livros por página
let currentPage = 1;
const booksPerPage = 10;
let filteredBooks = [...initialBooks];
let selectedCoverDataUrl = "";

// Histórico de conversas
let chats = [
  {
    user: "Tatiana Ramos Vargas",
    messages: [
      { text: "Olá! Gostaria de solicitar o empréstimo do livro A Fúria dos Reis.", type: "sent" },
      { text: "Oi! O livro está disponível sim. Podemos combinar no centro de Gurupi.", type: "received" }
    ]
  },
  {
    user: "Mariana Silva",
    messages: [
      { text: "Oi Mariana, você ainda tem o livro Capitães da Areia?", type: "sent" },
      { text: "Tenho sim! Posso fazer o empréstimo esta semana.", type: "received" }
    ]
  }
];

let selectedBook = null;
let activeChatUser = null;
let mapInitialized = false;

document.addEventListener("DOMContentLoaded", () => {
  renderPaginatedBooks();
  renderChatList();
  
  // Inicia a aplicação direto na tela de login
  switchTab("login");
});

// Alternador de Abas Atualizado
function switchTab(tabId) {
  document.querySelectorAll(".tab-content").forEach(el => el.classList.remove("active"));
  document.querySelectorAll(".nav-btn").forEach(el => el.classList.remove("active"));

  const targetTab = document.getElementById(`tab-${tabId}`);
  const targetNav = document.getElementById(`nav-${tabId}`);
  if (targetTab) targetTab.classList.add("active");
  if (targetNav) targetNav.classList.add("active");

  // Controla a visibilidade dos menus e botões da barra superior
  const navLinksContainer = document.querySelector(".nav-links");
  const loginBtn = document.getElementById("nav-login");

  if (navLinksContainer) {
    if (tabId === 'login') {
      // Oculta os botões de navegação e o botão "Entrar" do topo na tela de login
      navLinksContainer.querySelectorAll(".nav-btn").forEach(btn => {
        if (btn.id !== 'nav-perfil') {
          btn.style.display = 'none';
        }
      });
      if (loginBtn) loginBtn.style.display = 'none';
    } else {
      // Exibe os botões de navegação para as demais telas
      navLinksContainer.querySelectorAll(".nav-btn").forEach(btn => {
        btn.style.display = 'inline-block';
      });
    }
  }

  if (tabId === 'mapa' && !mapInitialized) {
    initMap();
    mapInitialized = true;
  }
}

// Manipulação do Login
function handleLogin(e) {
  e.preventDefault();

  // Substitui a área de autenticação pelo ícone de perfil no canto superior direito
  const authSection = document.getElementById("userAuthSection");
  if (authSection) {
    authSection.style.display = "inline-block";
    authSection.innerHTML = `
      <button class="nav-btn" id="nav-perfil" onclick="switchTab('perfil')" title="Meu Perfil" style="display: flex; align-items: center; gap: 6px;">
        <i class="fa-solid fa-circle-user" style="font-size: 20px; color: #ffd54f;"></i>
        <span>Perfil</span>
      </button>
    `;
  }

  // Redireciona para a página inicial e libera o acesso
  switchTab("inicio");
}

// Renderizar Grade de Livros com Paginação
function renderPaginatedBooks() {
  const grid = document.getElementById("booksGrid");
  grid.innerHTML = "";

  const startIndex = (currentPage - 1) * booksPerPage;
  const endIndex = startIndex + booksPerPage;
  const pageBooks = filteredBooks.slice(startIndex, endIndex);

  if (pageBooks.length === 0) {
    grid.innerHTML = `<p style="grid-column: 1/-1; text-align:center; padding: 30px;">Nenhum livro encontrado.</p>`;
  } else {
    pageBooks.forEach(book => {
      const card = document.createElement("div");
      card.className = "book-card";
      card.innerHTML = `
        <img src="${book.cover}" alt="${book.title}" onerror="this.onerror=null; this.src='capas/furia-dos-reis.jpg';">
        <h3>${book.title}</h3>
        <p class="author">${book.author}</p>
        <p class="owner"><i class="fa-solid fa-user"></i> ${book.owner}</p>
        <button class="btn-read" onclick="viewBookDetails(${book.id})">Quero Ler</button>
      `;
      grid.appendChild(card);
    });
  }

  renderPaginationControls();
}

// Renderizar Botões da Paginação
function renderPaginationControls() {
  const paginationDiv = document.getElementById("pagination");
  paginationDiv.innerHTML = "";

  const totalPages = Math.ceil(filteredBooks.length / booksPerPage);
  if (totalPages <= 1) return;

  const firstBtn = document.createElement("button");
  firstBtn.className = "page-btn";
  firstBtn.innerText = "« Primeira Página";
  firstBtn.disabled = currentPage === 1;
  firstBtn.onclick = () => {
    currentPage = 1;
    renderPaginatedBooks();
  };
  paginationDiv.appendChild(firstBtn);

  for (let i = 1; i <= totalPages; i++) {
    const pageBtn = document.createElement("button");
    pageBtn.className = `page-btn ${i === currentPage ? 'active' : ''}`;
    pageBtn.innerText = i;
    pageBtn.onclick = () => {
      currentPage = i;
      renderPaginatedBooks();
    };
    paginationDiv.appendChild(pageBtn);
  }

  const lastBtn = document.createElement("button");
  lastBtn.className = "page-btn";
  lastBtn.innerText = "Última Página »";
  lastBtn.disabled = currentPage === totalPages;
  lastBtn.onclick = () => {
    currentPage = totalPages;
    renderPaginatedBooks();
  };
  paginationDiv.appendChild(lastBtn);
}

// Filtro de Busca
function filterBooks() {
  const query = document.getElementById("searchInput").value.toLowerCase();
  filteredBooks = initialBooks.filter(b => 
    b.title.toLowerCase().includes(query) || 
    b.author.toLowerCase().includes(query) ||
    b.owner.toLowerCase().includes(query)
  );
  currentPage = 1;
  renderPaginatedBooks();
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

  const mainImg = document.getElementById("detailImgMain");
  mainImg.src = selectedBook.cover;

  const thumbsGrid = document.getElementById("detailThumbnails");
  thumbsGrid.innerHTML = "";
  selectedBook.realPhotos.forEach((photoUrl, index) => {
    const img = document.createElement("img");
    img.src = photoUrl;
    img.className = `thumb-img ${index === 0 ? 'active' : ''}`;
    img.onclick = () => {
      mainImg.src = photoUrl;
      document.querySelectorAll(".thumb-img").forEach(t => t.classList.remove("active"));
      img.classList.add("active");
    };
    thumbsGrid.appendChild(img);
  });

  switchTab("detalhes");
}

// Ver Perfil do Dono
function viewOwnerProfile() {
  if (!selectedBook) return;
  document.getElementById("profileName").innerText = selectedBook.owner;
  document.getElementById("profileCity").innerText = selectedBook.location;

  const ownerBooks = initialBooks.filter(b => b.owner === selectedBook.owner);
  const grid = document.getElementById("profileBooksGrid");
  grid.innerHTML = "";
  ownerBooks.forEach(book => {
    const card = document.createElement("div");
    card.className = "book-card";
    card.innerHTML = `
      <img src="${book.cover}">
      <h3>${book.title}</h3>
      <p class="author">${book.author}</p>
      <button class="btn-read" onclick="viewBookDetails(${book.id})">Quero Ler</button>
    `;
    grid.appendChild(card);
  });

  switchTab("perfil");
}

// Abre o modal de caução
function solicitarEIniciarChat() {
  if (!selectedBook) return;

  document.getElementById("modalBookTitle").innerText = selectedBook.title;
  document.getElementById("modalBookDeposit").innerText = selectedBook.deposit;
  
  const modal = document.getElementById("depositModal");
  if (modal) {
    modal.style.display = "flex";
  }
}

// Fecha o modal de caução
function closeDepositModal() {
  const modal = document.getElementById("depositModal");
  if (modal) {
    modal.style.display = "none";
  }
}

// Confirma o caução e redireciona para o chat sem duplicar mensagens
function confirmDepositAndStartChat(e) {
  if (e) e.preventDefault();

  closeDepositModal();

  if (!selectedBook) return;
  
  activeChatUser = selectedBook.owner;
  
  let existingChat = chats.find(c => c.user === activeChatUser);
  const confirmationText = `Caução no valor de ${selectedBook.deposit} retido com sucesso para o livro "${selectedBook.title}". Podemos combinar a entrega!`;

  if (!existingChat) {
    chats.unshift({
      user: activeChatUser,
      messages: [
        { text: confirmationText, type: "sent" }
      ]
    });
  } else {
    const lastMsg = existingChat.messages[existingChat.messages.length - 1];
    if (!lastMsg || lastMsg.text !== confirmationText) {
      existingChat.messages.push({
        text: confirmationText,
        type: "sent"
      });
    }
  }

  renderChatList();
  openChat(activeChatUser);
  switchTab("chat");
}

function renderChatList() {
  const list = document.getElementById("chatList");
  list.innerHTML = "";

  chats.forEach(chat => {
    const lastMsg = chat.messages[chat.messages.length - 1]?.text || "";
    const li = document.createElement("li");
    li.className = `chat-item ${chat.user === activeChatUser ? 'active' : ''}`;
    li.onclick = () => openChat(chat.user);
    li.innerHTML = `
      <i class="fa-solid fa-circle-user avatar"></i>
      <div class="chat-item-info">
        <strong>${chat.user}</strong>
        <p style="font-size:12px; color:#666; white-space:nowrap; overflow:hidden; text-overflow:ellipsis; max-width:180px;">${lastMsg}</p>
      </div>
    `;
    list.appendChild(li);
  });
}

function openChat(userName) {
  activeChatUser = userName;
  document.getElementById("chatActiveUser").innerText = userName;

  const chat = chats.find(c => c.user === userName);
  const messagesDiv = document.getElementById("chatMessages");
  messagesDiv.innerHTML = "";

  if (chat) {
    chat.messages.forEach(msg => {
      const div = document.createElement("div");
      div.className = `message ${msg.type}`;
      div.innerText = msg.text;
      messagesDiv.appendChild(div);
    });
  }
  
  renderChatList();
  messagesDiv.scrollTop = messagesDiv.scrollHeight;
}

function sendMessage() {
  const input = document.getElementById("chatInput");
  const text = input.value.trim();
  if (!text || !activeChatUser) return;

  const chat = chats.find(c => c.user === activeChatUser);
  if (chat) {
    chat.messages.push({ text, type: "sent" });
    openChat(activeChatUser);
  }

  input.value = "";
}

// Inicializar Mapa
function initMap() {
  const gurupiCoords = [-11.7292, -49.0686];
  const map = L.map('map').setView(gurupiCoords, 13);

  L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
    attribution: '© OpenStreetMap'
  }).addTo(map);

  initialBooks.forEach(book => {
    L.marker(book.coords).addTo(map)
      .bindPopup(`
        <div style="text-align:center;">
          <strong>${book.owner}</strong><br>
          <em>${book.title}</em><br>
          <small>${book.location}</small>
        </div>
      `);
  });
}

// Prévia de Capa no Cadastro
function previewBookCover(event) {
  const file = event.target.files[0];
  if (file) {
    const reader = new FileReader();
    reader.onload = function(e) {
      selectedCoverDataUrl = e.target.result;
      const previewBox = document.getElementById("coverPreviewBox");
      const previewImg = document.getElementById("coverPreviewImg");
      previewImg.src = selectedCoverDataUrl;
      previewBox.style.display = "block";
    };
    reader.readAsDataURL(file);
  }
}

function handleBookSubmit(e) {
  e.preventDefault();
  const title = document.getElementById("newTitle").value;
  const author = document.getElementById("newAuthor").value;
  const deposit = document.getElementById("newDeposit").value;
  const synopsis = document.getElementById("newSynopsis").value;

  const bookCover = selectedCoverDataUrl || "capas/furia-dos-reis.jpg";

  const newBook = {
    id: Date.now(),
    title,
    author,
    owner: "Tatiana Ramos Vargas",
    location: "Gurupi - TO (Centro)",
    coords: [-11.7292, -49.0686],
    deposit,
    cover: bookCover,
    realPhotos: [bookCover],
    synopsis
  };

  initialBooks.unshift(newBook);
  filteredBooks = [...initialBooks];
  currentPage = 1;
  renderPaginatedBooks();

  alert("Livro cadastrado com sucesso!");

  document.getElementById("bookForm").reset();
  document.getElementById("coverPreviewBox").style.display = "none";
  selectedCoverDataUrl = "";

  switchTab("inicio");
}