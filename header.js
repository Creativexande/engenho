document.getElementById('menu-icon').addEventListener('click', function() {
    var navbar = document.querySelector('.navbar');
    navbar.classList.toggle('active');
    
    var menuIcon = document.getElementById('menu-icon');
    var closeIcon = document.getElementById('close-icon');
    
    if (navbar.classList.contains('active')) {
    menuIcon.style.display = 'none';
    closeIcon.style.display = 'block';
    } else {
    menuIcon.style.display = 'block';
    closeIcon.style.display = 'none';
    }
    });
    
    // Adicione um evento de clique a todos os itens do menu
    var menuItems = document.querySelectorAll('.navbar a');
    menuItems.forEach(function(item) {
    item.addEventListener('click', function() {
    // Verifique se a largura da tela é menor que 768 pixels (ou o valor que você considera como desktop)
    if (window.innerWidth <= 768) {
        var navbar = document.querySelector('.navbar');
        navbar.classList.remove('active');
    
        var menuIcon = document.getElementById('menu-icon');
        var closeIcon = document.getElementById('close-icon');
    
        menuIcon.style.display = 'block';
        closeIcon.style.display = 'none';
    }
    });
    });
    
    // Adicione um evento de clique ao ícone de fechar
    document.getElementById('close-icon').addEventListener('click', function() {
    var navbar = document.querySelector('.navbar');
    navbar.classList.remove('active');
    
    var menuIcon = document.getElementById('menu-icon');
    var closeIcon = document.getElementById('close-icon');
    
    menuIcon.style.display = 'block';
    closeIcon.style.display = 'none';
    });
    