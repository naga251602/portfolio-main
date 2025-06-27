const menubtn = document.getElementById('menubtn');

menubtn.addEventListener('click', function () {
    const nav_links = document.querySelector('.nav-links');

    if (nav_links.style.display === "") {
        nav_links.style.display = 'flex';
    } else {
        nav_links.style.display = '';
    }
})