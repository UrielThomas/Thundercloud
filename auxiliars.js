/*Este es el filtro, simplemente recorro todos los divs con class name product y si tienen una clase que no coincida con el selector, se le aplica la propiedad display:none */
conf.addEventListener("click", function (event) {
    event.preventDefault
    const sel = document.getElementById("level")
    let lvlindx = sel.selectedIndex;
    let pr_lvl = document.getElementsByClassName('product')
    for (const l_v_l of pr_lvl) {
        l_v_l.classList.remove("nolvl")
        // console.log(l_v_l)
        if (lvlindx === 0 && !l_v_l.classList.contains("bgn")) {
            l_v_l.classList.add("nolvl");

        } else if (lvlindx === 1 && !l_v_l.classList.contains("mid")) {
            l_v_l.classList.add("nolvl");
        } else if (lvlindx === 2 && !l_v_l.classList.contains("adv")) {
            l_v_l.classList.add("nolvl");
        } else {
            l_v_l.classList.remove("nolvl");
        }
    }
});


/*Esta es una simple funcion para hacer la ventana del carro aparecer y desaparecer */
const shw_cart= document.getElementById("icon");
shw_cart.addEventListener("click",function(){
    if(bigBox.className == "cart"){
        bigBox.classList.remove("cart");
        bigBox.classList.add("nocart");
    }else if(bigBox.className == "nocart" ){
        bigBox.classList.remove("nocart");
        bigBox.classList.add("cart");
}});