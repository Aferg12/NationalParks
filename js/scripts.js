function toggleMenu() {
    document.getElementById("primarynav").classList.toggle("open");
}

const x = document.getElementById("hamburgerbtn");

x.onclick = toggleMenu;
