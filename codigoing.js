function redirectToPage() {
    window.location.href = 'index.html';
}

document.getElementById('redirectButton').addEventListener('click', redirectToPage);

function redirectToPage() {
    window.location.href = 'campoing.html';
}

document.getElementById('redirectButton').addEventListener('click', redirectToPage);

let lastScrollTop = 0;
const header = document.querySelector('header');

window.addEventListener('scroll', function() {
    const scrollTop = window.pageYOffset || document.documentElement.scrollTop;

    if (scrollTop > lastScrollTop) {
        // Rolando para baixo
        header.classList.add('hidden');
    } else {
        // Rolando para cima
        header.classList.remove('hidden');
    }
    lastScrollTop = scrollTop;
});