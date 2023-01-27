const json_mng = async () => {                      /*        ACA ES EL JSON CAPO               */
    const resp = await fetch('./Vapes.JSON')
    const data = await resp.json()
    vapes = data;
};
json_mng();

for (let clk of btn) {
    clk.addEventListener("click", cart_mng);
}





