
const WHATSAPP_NUMBER = "864685359";


const navToggle = document.getElementById("navToggle");
const navLinks = document.querySelector(".nav-links");

navToggle.addEventListener("click", () => {
  navLinks.classList.toggle("open");
});

navLinks.querySelectorAll("a").forEach((link) => {
  link.addEventListener("click", () => navLinks.classList.remove("open"));
});

const form = document.getElementById("contactForm");

form.addEventListener("submit", (event) => {
  event.preventDefault();

  const nome = document.getElementById("nome").value.trim();
  const mensagem = document.getElementById("mensagem").value.trim();

  if (!nome || !mensagem) return;

  const texto = `Olá! Meu nome é {nome}.\n\n{mensagem}`;
  const url = `https://wa.me/{864685359}

  window.open(url, "_blank");
  form.reset();
});
