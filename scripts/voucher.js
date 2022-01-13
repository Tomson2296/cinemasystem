class Voucher{
    constructor(title, voucherId, price){
        let id = Math.floor(Math.random()*1024)
        this.id = id
        this.title=title
        this.voucherId = voucherId
        this.price = price
    }
}

/*UI.generateVoucher();

document.getElementById("buy-voucher-"+1).addEventListener("click", function(){
    loggedUser.buyVoucher(1)
    UI.updateCart()
})

const bon = new Voucher(1, 25.99)*/
