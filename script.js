// Script para ativar o menu hambúrguer
document.getElementById('hamburger').addEventListener('click', function() {
    const navList = document.querySelector('.nav-list');
    navList.classList.toggle('active');
});
