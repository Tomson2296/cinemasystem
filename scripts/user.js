class User{
    constructor(id, name, surname, email, login, password, phone){
        this.id = id
        this.name = name
        this.surname = surname
        this.email = email
        this.login = login
        this.password = password
        this.phone = phone
        this.tickets = []
        this.reservations=[]
    }
    loginUser = () =>{
        document.getElementsByTagName("nav")[0].classList.add("not-shown")
        document.getElementsByClassName("login")[0].classList.add("not-shown")
        document.getElementsByClassName("register")[0].classList.add("not-shown")
        document.getElementsByClassName("welcome")[0].innerText += loggedUser.name + "!"
        document.getElementsByClassName("cart-control")[0].classList.remove("not-shown")
        document.getElementsByClassName("register-title")[0].classList.add("not-shown")
    }
    buyTicket = (id) =>{
        const newTicket = new Ticket(id, 1, 16.99, 0)
        this.tickets.push(newTicket)
    }
    removeTicket = (id) =>{
        const newTickets = this.tickets.filter(item =>{
            return item.id != id
        })
        this.tickets = newTickets
    }
}