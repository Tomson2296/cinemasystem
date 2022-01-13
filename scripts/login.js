const checkLogin = () =>{ // sprawdzenie czy dane logowania pokrywają się z bazą danych
    const login = document.getElementById("login-username").value
    const password = document.getElementById("login-password").value
    //console.log(login)
    //console.log(password)
    const usersArray = []
    const usersLength = userSystem.users.length
    for(let i = 0; i<usersLength;i++){
        usersArray[i] = userSystem.users[i]
    }
    console.log(usersArray)
    //localStorage.setItem("users", JSON.stringify(usersArray))
    //console.log(localStorage)

    if(login.length == 0 || password.length == 0){
        alert("Podaj login i hasło!")
    }
    else{
        const userToLog = usersArray.filter(user=>{
            return user.login == login && user.password == password
        })
        //console.log(userToLog)
        if(userToLog.length == 1){
            alert("Zalogowano!")
            loggedUser = new User(userToLog[0].id,userToLog[0].name,userToLog[0].surname,userToLog[0].email,userToLog[0].login,userToLog[0].password,userToLog[0].phone)
            loggedUser.loginUser()
        }
        else{
            alert("Nie ma takiego użytkownika lub podano błędne dane!")
        }
    }
}

const setFields = () =>{ // do testów
    document.getElementById("name").value = "Jakub"
    document.getElementById("username").value = "test"
    document.getElementById("surname").value = "Jakub"
    document.getElementById("email").value = "Jakub"
    document.getElementById("password").value = 12345678
    document.getElementById("phone").value = 12345678
    registerUser()
}