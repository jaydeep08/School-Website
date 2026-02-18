document.addEventListener("DOMContentLoaded", () => {

  // DARK MODE
  const toggle = document.getElementById("themeToggle");

  if (toggle) {
    toggle.onclick = () => {
      document.body.classList.toggle("dark");
    };
  }

});

// SCROLL
function scrollToSection(id) {
  const el = document.getElementById(id);
  if (el) {
    el.scrollIntoView({ behavior: "smooth" });
  }
}

// FORM
function submitForm(e) {
  e.preventDefault();
  alert("Message sent!");
}
