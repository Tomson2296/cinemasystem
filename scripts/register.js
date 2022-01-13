const registerUser = () =>{ // rejestracja użytkownika
    const users = JSON.parse(localStorage.getItem("users"))
    //console.log(users)
    const login = document.getElementById("username").value
    const sameUser = users.filter((item)=>{
        return item.login == login
    })

    if(sameUser.length == 0){
        const name = document.getElementById("name").value
        const login = document.getElementById("username").value
        const surname = document.getElementById("surname").value
        const email = document.getElementById("email").value
        const password = document.getElementById("password").value
        const phone = document.getElementById("phone").value

        let id = Math.floor(Math.random()*1024)
        let sameId = users.filter(item=>{
            return item.id == id
        })
        while(sameId.length != 0){
            id = Math.floor(Math.random()*1024)
            sameId = users.filter(item=>{
                return item.id == id
            })
        }
        const newUser = new User(id, name, surname, email, login, password,phone)
        //console.log(newUser)
        users.push(newUser)
        const stringifiedUsers = JSON.stringify(users)

        localStorage.setItem("users", stringifiedUsers)
        UI.scrollTo(document.getElementsByClassName("banner")[0])
        alert("Użytkownik zarejestrowany!")
    }
    else{
        alert("Istnieje już użytkownik o podanym loginie!")
    }
}
const validateRegisterUser = () =>{ // sprawdzenie poprawności pól rejestracji
    const name = document.getElementById("name").value
    const login = document.getElementById("username").value
    const surname = document.getElementById("surname").value
    const email = document.getElementById("email").value
    const password = document.getElementById("password").value
    const phone = document.getElementById("phone").value

    let isValid = true
    
    console.log(name,login,surname,email,password,phone)
    if(!email.includes("@")) {
        alert("Zły format adresu email!")
        isValid = false
    }
    if(password.length<8) {
        alert("Hasło powinno posiadać co najmniej 8 znaków!")
        isValid = false
    }
    if(name.length == 0 || login.length == 0 || surname.length == 0 || email.length == 0 || password.length == 0 || phone.length == 0) {
        alert("Uzupełnij puste pola!")
        isValid = false
    }
    if(isValid){
        registerUser()
    }
}