const form = document.querySelector("form");
form.addEventListener("submit", function(e) {
  e.preventDefault();
  const name = document.getElementById("name").value.trim();
  const email = document.getElementById("email").value.trim();
  const message = document.getElementById("message").value.trim();
  if (name === "" || email === "" || message.length < 10) {
    alert("Veuillez remplir correctement tous les champs. Message ≥ 10 caractères.");
    return;
  }
  alert("Message envoyé avec succès !");
  form.reset();
});
document.querySelectorAll('.navbar a').forEach(anchor => {
  anchor.addEventListener('click', function(e) {
    e.preventDefault();
    const target = document.querySelector(this.getAttribute('href'));
    target.scrollIntoView({ behavior: 'smooth' });
  });
});
const backToTop = document.createElement("button");
backToTop.innerText = "↑ Haut";
backToTop.id = "backToTop";
document.body.appendChild(backToTop);
backToTop.style.position = "fixed";
backToTop.style.bottom = "20px";
backToTop.style.right = "20px";
backToTop.style.padding = "10px";
backToTop.style.display = "none";
backToTop.style.borderRadius = "50%";
backToTop.style.background = "#004aad";
backToTop.style.color = "white";
backToTop.style.cursor = "pointer";
backToTop.style.border = "none";
backToTop.style.boxShadow = "0 4px 6px rgba(0,0,0,0.2)";
window.addEventListener("scroll", () => {
  if (window.scrollY > 200) {
    backToTop.style.display = "block";
  } else {
    backToTop.style.display = "none";
  }
});
backToTop.addEventListener("click", () => {
  window.scrollTo({ top: 0, behavior: "smooth" });
});
