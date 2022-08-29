function Navegation() {
    const nav = document.querySelector('.navigation')
        if (nav) {
                nav.insertAdjacentHTML('beforeend',
                `
                <ul>
                    <li class="list">
                        <a href="pages/sobre.html">
                            <span > <ion-icon name="people-outline"></ion-icon> </span>
                        </a>
                    </li>
                    <li class="list">
                        <a href="pages/modulo01.html">
                            <span> 1 </span>
                        </a>
                    </li>
                    <li class="list">
                        <a href="pages/erro404.html">
                            <span> <ion-icon name="beer-outline"></ion-icon> </span>
                        </a>
                    </li>
                    <div class="indicator"></div>
                </ul>
                `
                )
    }
}
Navegation()
