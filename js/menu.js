function inicio(){
    let componentes =
    `<img class="domi" src="https://1000marcas.net/wp-content/uploads/2020/01/Domino%E2%80%99s-logo.jpg" alt="">

        <div class="inicio">
            <h3><a href="./index1.html">Home</a></h3>
            <h3><a href="./index2.html">About</a></h3>
            <h3><a href="./index3.html">Contact</a></h3>
        </div>

    <div class="buton1"> <p>LOG IN</p> </div>
    <div class="buton1"> <p>SiGN UP</p> </div>`;

  let menu_del_dom = document.querySelector(".loko");

  menu_del_dom.innerHTML = componentes;

}

inicio();