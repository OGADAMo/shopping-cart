let alltotal = 0;
function addToCart (element){
    let type = element.closest(".single-item");
    let price = type.querySelector(".price").innerText;
    let name = type.querySelector("h3").innerText;
    let quantity =  type.querySelector("input").value;
    let cartItems = document.querySelector(".cart-items");
    

    if(parseInt(quantity) > 0){
        let total = parseInt(price.substring(1, 3))*parseInt(quantity);
        alltotal += total;
        cartItems.innerHTML += `<div class="cart-single-item">
                                    <h3>${name}</h3>
                                    <p>${price}x${quantity}=$<span>${total}</span></p>
                                    <button class="remove-item" onclick="removeFromCart(this)">Ukloni</button>
                                </div>`;

        document.querySelector(".total").innerText = `Total: $${alltotal}`;
        element.innerText = "Dodano";
        element.setAttribute('disabled', 'disabled');
        
    }
    else {
        alert("Odaberi količinu!");
    }
} 

function removeFromCart(element) {
    let type = element.closest(".cart-single-item");
    let price = type.querySelector("p span").innerText
    let removed = document.querySelectorAll(".single-item")
    type.remove();

    alltotal -= parseInt(price);
    document.querySelector(".total").innerText = `Total: $${alltotal}`;

    removed.forEach (function (Item){
        itemName = Item.querySelector(".si-content h3").innerText;
        let removedItem = type.querySelector("h3").innerText;
        if (itemName === removedItem) {
            Item.querySelector(".actions button").removeAttribute("disabled");
            Item.querySelector(".actions button").innerText = "Dodaj";
            Item.querySelector(".actions input").value = 0;
        }
        console.log(itemName, removedItem)
        
    });
}