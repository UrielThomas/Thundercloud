const json_mng = async () => {                      /*        ACA ES EL JSON CAPO               */
    const resp = await fetch('./Vapes.JSON')
    const data = await resp.json()
    vapes = data;
};
json_mng();

for (let clk of btn) {
    clk.addEventListener("click", cart_mng);
}


window.onload = (event) => {

    let new_cart=localStorage.getItem('cart')
    let new_cart_2=JSON.parse(new_cart)
    cart=new_cart_2
    for (const new_product of new_cart_2) {
        cart_product = new_product
        console.log(cart_product)
        cart_push(cart_product)
    }
};


