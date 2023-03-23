function fin(){
    let base =
    `<div class="fin"></div>
        
    <h3><a href="./index1.html">Home</a></h3>
    <h3><a href="./index2.html">About</a></h3>
    <h3><a href="./index3.html">Contact</a></h3>`;

  let pie_del_dom = document.querySelector(".pie");

  pie_del_dom.innerHTML = base;

}

fin();