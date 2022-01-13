class VoucherSystem{
    constructor(vouchers){
        this.vouchers = vouchers
       
    }

    addVoucher = (title,voucherId, price) =>{ // dodawanie voucherów do pamięci
        const newVoucher = new Voucher(title, voucherId, price)
        this.vouchers.push(newVoucher)
    }

    fetchVouchers = () => { // pobieranie danych o voucherach z api
        fetch("https://tomson2296.github.io/cinemasystem/database/vouchers.json").then((response) =>{
            return response.json();
        }).then((data) =>{
            console.log(data)
            for(let i = 0; i<data.length;i++){
                const voucher = data[i]
                this.addVoucher(voucher.title,voucher.voucherId, voucher.price)
                console.log(data)
            }
            //console.log(voucherSystem)
            UI.generateVoucherList()
            for(let i = 1;i<=voucherSystem.vouchers.length;i++){
                document.getElementById("buy-voucher-"+i).addEventListener("click", function(){
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
