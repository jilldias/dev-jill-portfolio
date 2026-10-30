const projects = [
  {
    number: "01",
    symbol: '<img src="https://img.icons8.com/?size=100&id=123363&format=png&color=000000" alt="Ícone do projeto" width="24" height="24">',
    category: "Automação",
    title: "Gestão de Notebooks Educacionais",
    description: "Sistema de automação para registro e gerenciamento de empréstimos de notebooks educacionais utilizando QR Code e Google Workspace.",
    technologies: ["Python", "Google Workspace", "QR Code"],
    icons: ["devicon-python-plain colored", "devicon-google-plain colored"],
    url: "https://github.com/jilldias/gestao-de-usuarios-notebooks-educacionais"
  },
  {
    number: "02",
    symbol: '<img src="https://img.icons8.com/?size=100&id=174&format=png&color=000000" alt="Ícone de infraestrutura" width="24" height="24">',
    category: "Infraestrutura",
    title: "Jill Server | Homelab",
    description: "Servidor pessoal baseado em Debian, desenvolvido para integrar serviços de armazenamento, gerenciamento de mídia e aplicações próprias.",
    technologies: ["Debian", "Linux", "Podman", "Python"],
    icons: ["devicon-debian-plain colored", "devicon-linux-plain", "devicon-python-plain colored"],
    url: "https://github.com/jilldias/jillserver"
  },
  {
    number: "03",
    symbol: '<img src="https://img.icons8.com/?size=100&id=21888&format=png&color=000000" alt="Ícone de Back-End" width="24" height="24">',
    category: "Back-End",
    title: "Discoteca CRUD",
    description: "Aplicação de gerenciamento de dados com operações de criação, consulta, atualização e exclusão de registros, utilizando Java e banco de dados.",
    technologies: ["Java", "Spring Boot", "MariaDB"],
    icons: ["devicon-java-plain colored", "devicon-spring-original colored", "devicon-mariadb-original colored"],
    url: "https://github.com/jilldias/discoteca-crud"
  },
  {
    number: "04", symbol: "🛒", category: "Gestão comercial",
    title: "PDV | Ponto de Venda",
    description: "Sistema de ponto de venda em desenvolvimento, com cadastro de produtos, controle de estoque, registro de vendas, caixa e relatórios.",
    technologies: ["Java", "JavaFX", "Spring Boot", "MariaDB"],
    icons: ["devicon-java-plain colored", "devicon-spring-original colored", "devicon-mariadb-original colored"],
    url: "https://github.com/jilldias/pdv"
  }
];

const projectGrid = document.querySelector("#projectGrid");
projectGrid.innerHTML = projects.map(project => `
  <article class="glass-card project-card">
    <div class="project-top"><span class="project-symbol">${project.symbol}</span><span class="project-number">${project.number}</span></div>
    <span class="project-category">${project.category}</span>
    <h3>${project.title}</h3>
    <p>${project.description}</p>
    <div class="project-tech" aria-label="Tecnologias: ${project.technologies.join(", ")}">
      ${project.icons.map((icon, index) => `<i class="${icon}" title="${project.technologies[index] || "Tecnologia"}"></i>`).join("")}
    </div>
    <a class="project-link" href="${project.url}" target="_blank" rel="noopener noreferrer">Ver projeto ↗</a>
  </article>
`).join("");

const root = document.documentElement;
const themeToggle = document.querySelector("#themeToggle");
const savedTheme = localStorage.getItem("devjill-theme");
if (savedTheme === "light" || savedTheme === "dark") root.dataset.theme = savedTheme;

themeToggle.addEventListener("click", () => {
  root.dataset.theme = root.dataset.theme === "dark" ? "light" : "dark";
  localStorage.setItem("devjill-theme", root.dataset.theme);
});

const menuToggle = document.querySelector("#menuToggle");
const mainNav = document.querySelector("#mainNav");
menuToggle.addEventListener("click", () => {
  const isOpen = mainNav.classList.toggle("open");
  menuToggle.setAttribute("aria-expanded", String(isOpen));
});
mainNav.querySelectorAll("a").forEach(link => link.addEventListener("click", () => {
  mainNav.classList.remove("open");
  menuToggle.setAttribute("aria-expanded", "false");
}));

document.querySelector("#year").textContent = new Date().getFullYear();
