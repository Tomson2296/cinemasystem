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

const registerUser = () =>{ // rejestracja użytkownika
    //const users = JSON.parse(localStorage.getItem("users"))
    //console.log(users)
    const usersArray = []
    const usersLength = userSystem.users.length
    for(let i = 0; i<usersLength;i++){
        usersArray[i] = userSystem.users[i]
    }

    const login = document.getElementById("username").value
    const sameUser = usersArray.filter((item)=>{
        return item.login == login
    })

    const email = document.getElementById("email").value
    const sameEmail = usersArray.filter((item)=>{
        return item.email == email
    })

    if(sameUser.length == 0 && sameEmail.length == 0){
        const name = document.getElementById("name").value
        const login = document.getElementById("username").value
        const surname = document.getElementById("surname").value
        const email = document.getElementById("email").value
        const password = document.getElementById("password").value
        const phone = document.getElementById("phone").value
        const id = usersLength+1;
        /*
        let sameId = usersArray.filter(item=>{
            return item.id == id
        })
        while(sameId.length != 0){
            id = Math.floor(Math.random()*1024)
            sameId = usersArray.filter(item=>{
                return item.id == id
            })
        }
        */
        const newUser = new User(id, name, surname, email, login, password,phone)
        usersArray.push(newUser)

        //const stringifiedUsers = JSON.stringify(usersArray)
        //localStorage.setItem("users", stringifiedUsers)
        //console.log(localStorage)

        UI.scrollTo(document.getElementsByClassName("banner")[0])
        alert("Użytkownik zarejestrowany!")
    }
    else if(sameUser.length == 1 && sameEmail.length == 0){
        alert("Istnieje już użytkownik o podanym loginie!")
    }
    else {
        alert("Istnieje już użytkownik o podanym mailu!")
    }
}

