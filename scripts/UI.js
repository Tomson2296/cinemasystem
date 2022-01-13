class Ui{
    constructor(){
        this.cartState = false
    }
    init = () =>{
        movieSystem.fetchMovies()
        userSystem.fetchUsers()
        voucherSystem.fetchVouchers()

        //inicjalizacja button
        document.getElementById("login-button").addEventListener("click", checkLogin)
        document.getElementById("loginNav").addEventListener("click", ()=>{UI.scrollTo(document.getElementsByClassName("login")[0])})
        document.getElementById("registerNav").addEventListener("click", ()=>{UI.scrollTo(document.getElementsByClassName("register")[0])})
        document.getElementsByClassName("lbutton")[2].addEventListener("click", UI.changeCart)
        document.getElementById("register-button").addEventListener("click", validateRegisterUser)
        document.getElementById("buy-button").addEventListener("click", ()=>{
            loggedUser.tickets = []
            UI.updateCart()
            alert("Kupiono bilety!")
        })
        document.getElementById("reservation-button").addEventListener("click", ()=>{
            loggedUser.reservations = []
            UI.updateCart()
            alert("Zarezerwowano!")
        })

        console.log("loaded")
    }
    changeCart = () =>{
        if(this.cartState){
            this.hideCart()
            this.cartState = false
        }
        else {
            this.showCart()
            this.cartState = true
        }
    }
    showCart = () =>{
        document.getElementsByClassName("cart")[0].classList.add("cart-show")
    }
    hideCart = () =>{
        document.getElementsByClassName("cart")[0].classList.remove("cart-show")
    }
    scrollTo = (target) => { // efekt przesuwania przeglądarki
        target.scrollIntoView({
            behavior: 'smooth',
            block: 'start'
        })
    }
    updateCart = () =>{ // odtwarzanie koszyka na podstawie danych użytkownika - generacja dynamiczna biletów
        const user = loggedUser

        document.getElementsByClassName("cart-content")[0].innerHTML = ""

        for(let i = 0;i<user.tickets.length;i++){
            const film = movieSystem.movies.filter((item)=>{
                return item.id == user.tickets[i].movieId
            })[0]
            
            //console.log(film)
            //console.log(movieSystem.movies)
            //console.log(user.tickets[i])

            // generowanie biletu w kasie
            const ticketTile = document.createElement("div")
            ticketTile.classList.add("ticket-tile")

            const title = document.createElement("h3")
            title.innerText = film.title

            const select = document.createElement("select")
            select.name = "select-nr-" + user.tickets[i].id
            const date = new Date()

            for(let j = 0;j<4;j++){
                const option = document.createElement("option")
                
                const pickedDate = date.getDate()+Math.floor(Math.random()*6)
                option.innerText = pickedDate + "/" + date.getMonth()+1 +"/" + date.getFullYear() + ", godz. " + (Math.floor(Math.random()*12)+12) + ":00"
                option.value = pickedDate + "/" + date.getMonth()+1 +"/" + date.getFullYear() + ", godz. " + (Math.floor(Math.random()*12)+12) + ":00"

                select.appendChild(option)
            }
            
            //generowanie pól wyboru w bilecie
            const rowSelect = document.createElement("select")
            rowSelect.name = "rowselect-nr-" + user.tickets[i].id

            for(let j = 1;j<16;j++){
                const option = document.createElement("option")

                option.innerText = j
                option.value = j

                rowSelect.appendChild(option)
            }
            rowSelect.addEventListener("select", function(){
                loggedUser.user.tickets[i].setSeat(rowSelect.value, placeSelect.value)
            })

            const placeSelect = document.createElement("select")
            placeSelect.name = "placeselect-nr-" + user.tickets[i].id

            for(let j = 1; j<24;j++){
                const option = document.createElement("option")

                option.innerText = j
                option.value = j

                placeSelect.appendChild(option)
            }

            placeSelect.addEventListener("select", function(){
                loggedUser.user.tickets[i].setSeat(rowSelect.value, placeSelect.value)
            })

            const kindSelect = document.createElement("select")
            kindSelect.name = "kindselect-nr-" + user.tickets[i].id

            for(let j = 1;j<3;j++){
                const option = document.createElement("option")

                option.innerText = j
                option.value = j

                kindSelect.appendChild(option)
            }
            kindSelect.addEventListener("select", function(){
                loggedUser.user.tickets[i].kindSeat(kindSelect.value)
            })

            const Organizer = document.createElement("div")

            let description = document.createElement("p")
            description.innerText = "Rząd"
            Organizer.appendChild(description)
            Organizer.appendChild(rowSelect)

            description = document.createElement("p")
            description.innerText = "Miejsce"
            Organizer.appendChild(description)
            Organizer.appendChild(placeSelect)

            description = document.createElement("p")
            description.innerText = "Rodzaj biletu (1-normalny, 2-ulgowy)"
            Organizer.appendChild(description)
            Organizer.appendChild(kindSelect)

            let price = document.createElement("p")
            price.classList.add("price")
            if(kindSelect.value==1)
            {
                price.innerText = "\$" + 19.99
            }
            else
            {
                price.innerText="\$" + 0.99
            }

            //obsługa elementu do usuwania biletu

            const binIcon = document.createElement("div")
            binIcon.classList.add("bin-icon")
            binIcon.classList.add("to-remove-"+user.tickets[i].id)

            binIcon.addEventListener("click", function(){
                loggedUser.removeTicket(this.classList[1].split("-")[2])
                UI.updateCart()
            })

            ticketTile.appendChild(title)
            ticketTile.appendChild(select)
            ticketTile.appendChild(Organizer)
            ticketTile.appendChild(price)
            ticketTile.appendChild(binIcon)

            document.getElementsByClassName("cart-content")[0].appendChild(ticketTile)
        }
        
        let sum = 0
        for(let i = 0;i<user.tickets.length;i++) sum += user.tickets[i].price
        document.getElementsByClassName("sum-of-tickets")[0].innerText = "\$" + sum.toFixed(2)
        

    }
    generateFilmList = () =>{ // generowanie listy filmów
        const filmlist = document.getElementsByClassName("film-list")[0]
        for(let i = 0;i<movieSystem.movies.length;i++){
            const newFilm = document.createElement("div")
            newFilm.classList.add("film")
    
            const newFilmTitle = document.createElement("h2")
            newFilmTitle.innerText = movieSystem.movies[i].title
    
            const newFilmReleaseDate = document.createElement("p")
            newFilmReleaseDate.innerText = "Data wydania: " + movieSystem.movies[i].date 

            const newFilmDirector = document.createElement("p")
            newFilmDirector.innerText = "Reżyser: " + movieSystem.movies[i].director

            const newFilmType = document.createElement("p")
            newFilmType.innerText = "Gatunek filmowy: " + movieSystem.movies[i].movieType

            const newFilmDuration = document.createElement("p")
            newFilmDuration.innerText = "Czas trwania filmu: " + movieSystem.movies[i].length + " minut"

            const buyButton = document.createElement("div")
            buyButton.classList.add("lbutton")
            buyButton.id = "buy-ticket-"+movieSystem.movies[i].id
            buyButton.innerText = "Kup bilet"
    
            newFilm.appendChild(newFilmTitle)
            newFilm.appendChild(newFilmReleaseDate)
            newFilm.appendChild(newFilmDirector)
            newFilm.appendChild(newFilmType)
            newFilm.appendChild(newFilmDuration)
            newFilm.appendChild(buyButton)
            filmlist.appendChild(newFilm)
        }
    }

    generateVoucherList=()=>{
        const Voucherlist = document.getElementsByClassName("voucher-list")[0]
        for(let i = 0;i<voucherSystem.vouchers.length;i++){
            const newVoucher = document.createElement("div")
            newVoucher.classList.add("Voucher")

            const newVoucherTitle = document.createElement("h2")
            newVoucherTitle.innerText =  voucherSystem.vouchers[i].title

            const newVoucherPrice = document.createElement("p")
            newVoucherPrice.innerText ="Cena vouchera: " +voucherSystem.vouchers[i].price

            const buyButton = document.createElement("div")
            buyButton.classList.add("lbutton")
            buyButton.id = "buy-voucher-"+voucherSystem.vouchers[i].id
            buyButton.innerText = "Kup voucher"

            newVoucher.appendChild(newVoucherTitle)
            newVoucher.appendChild(newVoucherPrice)
            newVoucher.appendChild(buyButton)
            Voucherlist.appendChild(newVoucher)
        }
    }
}
let loggedUser = null
const UI = new Ui()

document.addEventListener('DOMContentLoaded', (event) => {
    UI.init()
});
