/*//in voucher.js
class Voucher{
    constructor(voucherId, price){
        let id = Math.floor(Math.random()*1024)
        let sameId = loggedUser.tickets.filter(item=>{
            return item.id == id
        })
        while(sameId.length != 0){
            id = Math.floor(Math.random()*1024)
            sameId = loggedUser.tickets.filter(item=>{
                return item.id == id
            })
        }
        this.id = id
        this.voucherId = voucherId
        this.price = price
    }
    
}


//in voucher.js

class VoucherSystem{
    constructor(vouchers){
        this.vouchers = vouchers
        this.dataUrl = "https://pastebin.com/YSfCM2bq"
        
    }
    addVoucher = (id,title, price) =>{ // dodawanie filmów do pamięci
        const newVoucher = new Voucher(id, price)
        this.voucher.push(newVoucher)
    }
    fetchVouchers = () => { // pobieranie danych o filmach z api
        fetch(this.dataUrl).then((response) =>{
            return response.json();
        }).then((data) =>{
            for(let i = 0; i<data.count;i++){
                const bonus = data.results[i]
                this.addVoucher(bonus.episode_id,bonus.title, film.price)
            }
            //console.log(voucherSystem)
            UI.generateVoucherList()
            for(let i = 1;i<=voucherSystem.vouchers.length;i++){
                document.getElementById("buy-ticket-"+i).addEventListener("click", function(){
                    loggedUser.buyVoucher(i)
                    UI.updateCart()
                })
            }
        }).catch(function(err) {
            console.log(err);
        });
    }
}
const voucherSystem = new VoucherSystem([])


//in UI

generateVoucherList=()=>{
        
    const voucherlist = document.getElementsByClassName("voucher-list")[0]
    for(let i = 0;i<voucherSystem.vouchers.length;i++){
        const newVoucher = document.createElement("div")
        newVoucher.classList.add("Voucher")

        const newVoucherTitle = document.createElement("h2")
        newVoucherTitle.innerText = voucherSystem.vouchers[i].title

        const newVoucherPrice = document.createElement("p")
        newVoucherPrice.classList.add("price")
        newVoucherPrice.innerText = voucherSystem.vouchers[i].price

        const buyButton = document.createElement("div")
        buyButton.classList.add("lbutton")
        buyButton.id = "buy-ticket-"+voucherSystem.vouchers[i].id
        buyButton.innerText = "Kup voucher"


        newVoucher.appendChild(newVoucherTitle)
        newVoucher.appendChild(newVoucherPrice)
        newVoucher.appendChild(buyButton)
        voucherlist.appendChild(newVoucher)

    }



    //in user
    buyVoucher=(id)=>{
        const newVoucher= new Voucher(id , 29.99);
    }

    removeVoucher = (id) =>{
        const newVoucher = this.vouchers.filter(item =>{
            return item.id != id
        })
        this.vouchers = newVouchers
    }
    */