class Ticket{
    constructor(movieId,kind, price, seat){
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
        this.movieId = movieId
        this.kind= kind
        this.price = price
        this.seat = seat
    }
    setKind=()=>{

    }
    setSeat = () =>{
        
    }
}