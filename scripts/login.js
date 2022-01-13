const checkLogin = () =>{ // sprawdzenie czy dane logowania pokrywają się z bazą danych
    const login = document.getElementById("login-username").value
    const password = document.getElementById("login-password").value 
    
    const users = JSON.parse(localStorage.getItem("users"))
    console.log(users)
    if(login.length == 0 || password.length == 0){
        alert("Podaj login i hasło!")
    }
    else if(users.length == 0) alert("Nie ma takiego użytkownika!")
    else{
        const userToLog = users.filter(item=>{
            return item.login == login && item.password == password
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