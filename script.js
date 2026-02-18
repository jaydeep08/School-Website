// SCROLL
function scrollToSection(id) {
  document.getElementById(id)
    .scrollIntoView({ behavior: "smooth" });
}

// FORM
function submitForm(e) {
  e.preventDefault();
  alert("Message sent successfully!");
}

// DARK MODE
const toggle = document.getElementById("themeToggle");

toggle.onclick = () => {
  document.body.classList.toggle("dark");

  if (document.body.classList.contains("dark")) {
    toggle.textContent = "☀️";
  } else {
    toggle.textContent = "🌙";
  }
};
