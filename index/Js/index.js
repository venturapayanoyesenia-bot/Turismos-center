const hamburger = document.getElementById('hamburger');
const sidebar = document.getElementById('sidebar');
const overlay = document.getElementById('overlay');
const closeBtn = document.getElementById('closeBtn');

hamburger.addEventListener('click', () => {
    sidebar.classList.add('show');
    overlay.classList.add('show');
});

closeBtn.addEventListener('click', closeMenu);
overlay.addEventListener('click', closeMenu);

function closeMenu() {
    sidebar.classList.remove('show');
    overlay.classList.remove('show');
}
