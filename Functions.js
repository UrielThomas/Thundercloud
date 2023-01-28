function cart_push(cart_product) {
    price=cart_product.precio+price
    box.innerHTML = ""
    cart.forEach(cart_obj => {
        ident = cart_obj.nombre;
        let div = document.createElement('div');
        div.classList.remove("novape")
        div.classList.add('vape', ident);
        div.innerHTML +=
            `<p>${ident}</p>
        <p>$${cart_obj.precio}</p> 
        <p id = ${ident} >${cart_obj.cantidad}</p>
        <button  id = "${cart_obj.id}" class = "dlt" >X</button>`;
        dom_price.innerText="Precio total: $"+price;
        let inbox = document.getElementById('inbox')
        inbox.appendChild(div);
        let lcl = JSON.stringify(cart)
        localStorage.setItem('cart',lcl);
        // let lcl_price = JSON.stringify(price)
        // localStorage.setItem('price',lcl_price);
    });
}


box.addEventListener("click",(e)=>{
    e.stopPropagation
    let rmv_btn = e.target
    if(e.target.classList.contains("dlt")){
        cart_remove(e.target.id,rmv_btn);
    }

});





function cart_remove(btn_id, rmv_btn) {

    let cart_index = cart.findIndex(ers => ers.id == btn_id);
    cart.splice(cart_index, 1);
    rmv_btn.parentNode.classList.add('novape')
    price=price-(vapes[btn_id].precio*vapes[btn_id].cantidad);
    vapes[btn_id].cantidad = 0
    console.log(price)
    dom_price.innerText="Precio total: $"+price;

}

function cart_mng(e) {

    let on_click = e.target
    let outer = on_click.parentNode;
    product = outer.querySelector("h2").textContent;
    switch (product.toLowerCase()) {
        case "vape1":
            vapes[0].cantidad++
            cart_product=vapes[0]
            if (!cart.includes(cart_product)) {
                cart.push(cart_product)
            }
            cart_push(cart_product);
            break
        case "vape2":
            vapes[1].cantidad++
            cart_product=vapes[1]
            if (!cart.includes(cart_product)) {
                cart.push(cart_product)
            }
            cart_push(cart_product)
            break
        case "vape3":
            vapes[2].cantidad++
            cart_product=vapes[2]
            if (!cart.includes(cart_product)) {
                cart.push(cart_product)
            }
            cart_push(cart_product)
            break
        case "vape4":
            vapes[3].cantidad++
            cart_product=vapes[3]
            if (!cart.includes(cart_product)) {
                cart.push(cart_product)
            }
            cart_push(cart_product)
            break
        case "vape5":
            vapes[4].cantidad++
            cart_product=vapes[4]
            if (!cart.includes(cart_product)) {
                cart.push(cart_product)
            }
            cart_push(cart_product)
            break
        case "vape6":
            vapes[5].cantidad++
            cart_product=vapes[5]
            if (!cart.includes(cart_product)) {
                cart.push(cart_product)
            }
            cart_push(cart_product)
            break
    }
}









