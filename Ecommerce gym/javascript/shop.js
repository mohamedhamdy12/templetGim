/*start click shopify to show items*/

let showShop = document.getElementById("show-shop");
let shopify = document.getElementById("shopify");
let timesCircle =document.getElementById("times-circle");
let overlay = document.getElementById("overlay");
let allMarket = document.getElementById("allmarkt")
 let smalMarket = document.getElementsByClassName("market")[0]


shopify.onclick = function(){
    showShop.style.transform= "translate(0,0)"
    overlay.classList.add("overlay")
      overlay.style.display = "block"
}
timesCircle.onclick = function(){
        showShop.style.transform= "translate(880px , 0)"
          overlay.classList.remove("overlay")
        overlay.style.display = "none"
}
/*start click shopify to show items*/
/*start click add item */
let add = document.querySelectorAll("#add");



/*start click add item */
/*start upadateTotalPrice */
const upadateTotalPrice = () =>{
    const allProdactinMarkt = document.querySelectorAll(`#market`)
    let total = 0
    allProdactinMarkt.forEach(function(item){
        const price =Number(item.getElementsByClassName("mPraice")[0].innerHTML.replace("$",""))
        const quantity =Number( item.getElementsByClassName("mQuantity")[0].value);
       total =total + (price*quantity)
    })
     total = total.toFixed(2)
    document.getElementById("totalprice").innerText = ` $ ${total} `
}
let changeMarket =document.getElementById("show-shop");

    changeMarket.addEventListener("change", function(){
          upadateTotalPrice()
       
    })

/*end upadateTotalPrice */


/*start add prodact item */
let market = document.getElementById("allmarkt")

add.forEach(function(item){
    item.addEventListener("click",function(){
        showShop.style.transform= "translate(0,0)"
          overlay.classList.add("overlay")
      overlay.style.display = "block"
  const parent =  item.parentElement.parentElement;
  const photo = parent.getElementsByClassName("img-shop")[0].innerHTML;
 const name = parent.getElementsByClassName("name")[0].innerHTML;
 const price = parent.getElementsByClassName("saill")[0].innerHTML;

        
        market.innerHTML += `

 <div class="market" id="market">
            <div class="market-img">
            <p id="exit-item" ><i class="fas fa-times-circle exit-item"></i></p>    
        ${photo}
            </div>
            <div class="market-about">
                <h3>${name}</h3>
                <p class="mPraice">${price}</p>
            </div>
              <div class="quantity">
                    <label for="quantity"></label>
                  <input type="number" id="quantity" name="quantity" min="1" max="5" value="1" class="mQuantity">
                </div>
        </div>


`
        upadateTotalPrice()
    })
})

/*end add prodact item */
allMarket.addEventListener("click",function(eo){
    if(eo.target.classList.contains("exit-item")){
        
       eo.target.parentElement.parentElement.parentElement.remove()
         upadateTotalPrice()
    }
})

/*start delete item and upadateTotalPrice */








