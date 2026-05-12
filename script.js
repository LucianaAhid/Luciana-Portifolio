window.onload = () => {
    window.scrollTo(0, 0)
}
// MENU MOBILE
const toggle = document.getElementById("menu-toggle");
const menu = document.getElementById("menu");

toggle.addEventListener("click", () => {
  menu.classList.toggle("active");
});

//  scrollsuave
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
anchor.addEventListener("click", function(e) {
   e.preventDefault();
  document.querySelector(this.getAttribute("href"))
  .scrollIntoView({ behavior: "smooth" });
});
});

const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add('show')
        } else {
            entry.target.classList.remove('show')
        }
    })
})

document.querySelectorAll('.fade, .fade-left').forEach(el => observer.observe(el))

// validação form
const form = document.getElementById("contactForm");
const status = document.getElementById("status");

form.addEventListener("submit", async function(e) {
e.preventDefault();

status.innerText = "Enviando...";

const formData = new FormData(form);

const response = await fetch("https://api.web3forms.com/submit", {
method: "POST",
body: formData
});

const result = await response.json();

if (result.success) {
status.innerText = "Mensagem enviada com sucesso!";
form.reset();
} else {
status.innerText = "Erro ao enviar. Tente novamente.";
}
});

window.addEventListener("scroll", () => {
  const header = document.querySelector("header");
  header.classList.toggle("scrolled", window.scrollY > 700)
})