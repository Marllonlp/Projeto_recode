var menu = `
<nav class="navbar navbar-expand-lg border-bottom shadow-sm mb-3" id="menu">
<div class="container">
    <a class="navbar-brand" href="index.html"><strong><img src="imagens/Logo.png" id="logo"></strong></a>
    <!-- Botão de menu responsivo -->
    <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav">
        <!-- icone -->
        <span class="navbar-toggler-icon"></span>
    </button>

    <!-- Menu -->
    <!--"navbarNav" abre o botão-->
    <div class="collapse navbar-collapse" id="navbarNav">
        <!--Barra de pesquisa-->
        <main>
            <form class="d-flex" role="search">
                <input class="form-control barra-pesquisa" type="search" placeholder="Search"
                    aria-label="Search">
                <button class="btn btn-close-white" type="submit"><img src="imagens/icon_pesquisa.png"
                        id="icon_pesquisa"></button>
            </form>
        </main>
        <ul class="navbar-nav flex-grow-1">
            <li class="nav-item">
                <a href="#" class="nav-link">Categoria</a>
            </li>
            <li class="nav-item">
                <a href="#" class="nav-link">Promoções</a>
            </li>
            <li class="nav-item">
                <a href="#" class="nav-link">Povos</a>
            </li>
            <li class="nav-item">
                <a href="#" class="nav-link"></a>
            </li>
        </ul>
        <!-- Alinha à direita de forma flutuante "align-self-end" -->
        <div class="align-self-end">
            <ul class="navbar-nav">
                <li class="nav-item">
                    <a href="menu.html" class="nav-link">Cadastre - se</a>
                </li>
                <li class="nav-item">
                    <a href="menu.html" class="nav-link">Login</a>
                </li>
                <li class="nav-item">
                    <a href="#" class="nav-link"><img src="imagens/icon-compras.png" id="icon-compras"></a>
                </li>
            </ul>
        </div>
    </div>
</div>
</nav>
<style>
#logo {
    max-width: 100px;
}

#menu {
    background-color: #C0C0C0;
}

#icon-compras {
    width: 24px;
    height: 24px;
}

#icon_pesquisa {
    width: 20px;
}

.barra-pesquisa {
    width: 350px;
    border-radius: 0.6em;
    margin-top: 3px;
}

.nav-item .nav-link {
    color: #000000;
}

.nav-item .nav-link:hover {
    color: #ffffff;
}
</style>
`;
document.addEventListener("DOMContentLoaded", function () {
    // Aguarde o DOM ser completamente carregado
    document.querySelector(".menu").innerHTML = menu;
});