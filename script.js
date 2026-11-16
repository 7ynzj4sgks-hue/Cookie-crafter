const menuToggle = document.getElementById("menuToggle");
const nav = document.getElementById("nav");
const orderButton = document.getElementById("orderButton");
const orderMessage = document.getElementById("orderMessage");

menuToggle.addEventListener("click", () => {
  const isOpen = nav.classList.toggle("open");
  menuToggle.setAttribute("aria-expanded", String(isOpen));
});

nav.querySelectorAll("a").forEach((link) => {
  link.addEventListener("click", () => {
    nav.classList.remove("open");
    menuToggle.setAttribute("aria-expanded", "false");
  });
});

orderButton.addEventListener("click", () => {
  orderMessage.textContent = "Thanks for your interest! Add your real contact or ordering details here.";
});

document.getElementById("year").textContent = new Date().getFullYear();
