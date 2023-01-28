const json_mng = async () => {                      /*        ACA ES EL JSON CAPO               */
    const resp = await fetch('./Vapes.JSON')
    const data = await resp.json()
    vapes = data;
};
json_mng();

for (let clk of btn) {
    clk.addEventListener("click", cart_mng);
}


box.addEventListener("click",(e)=>{
    e.stopPropagation
    let rmv_btn = e.target
    if(e.target.classList.contains("dlt")){
        cart_remove(e.target.id,rmv_btn);
    }

});



