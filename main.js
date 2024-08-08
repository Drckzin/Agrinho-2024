function redirectToPage() {
    window.location.href = 'campoing.html';
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
        header.classList.add('hidden');
    } else {
        header.classList.remove('hidden');
    }
    lastScrollTop = scrollTop;
});