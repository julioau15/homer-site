const pages = [
    {name: 'home', url: '../index.html'},
    {name: 'bart', url: '../html/bart.html'},
    {name: 'lisa', url: '../html/lisa.html'},
    {name: 'marge', url: '../html/marge.html'},
    {name: 'maggie', url: '../html/maggie.html'},
    {name: 'moe', url: '../html/moe.html'},
    {name: 'kwik', url: '../html/kwik.html'},
    {name: 'springfield', url: '../html/springfield.html'},
    {name: 'nuclear', url: '../html/nuclear.html'},
];

const search = document.getElementById('search');
const searchBox = document.getElementById('search-box');
const searchInput = document.getElementById('search-input');
const suggestions = document.getElementById('suggestions');


search.addEventListener('click', () => {
    searchBox.classList.toggle('hidden');
    searchInput.focus();
});

// Atualizar sugestões enquanto digita
  searchInput.addEventListener("input", () => {
    const query = searchInput.value.toLowerCase();
    suggestions.innerHTML = "";

    if (query.trim() === "") return;

    const filtered = pages.filter(p => p.name.toLowerCase().includes(query));
    filtered.forEach(p => {
      const li = document.createElement("li");
      li.textContent = p.name;
      li.addEventListener("click", () => window.location.href = p.url);
      suggestions.appendChild(li);
    });
  });

  // Pressionar Enter para ir à página correspondente
  searchInput.addEventListener("keydown", e => {
    if (e.key === "Enter") {
      const match = pages.find(p => p.name.toLowerCase() === searchInput.value.toLowerCase());
      if (match) window.location.href = match.url;
    }
  });

  function ajustarLink() {
    const link = document.getElementById("link");
    if (window.innerWidth <= 700) {
      link.href = "../html/moe.html";
    } else {
      link.href = "#";
    }
  }

  ajustarLink(); // chama ao carregar
  window.addEventListener("resize", ajustarLink);