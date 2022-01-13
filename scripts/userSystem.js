class UserSystem{
    constructor(users){
        this.users = users
        this.dataUrl = "https://tomson2296.github.io/cinemasystem/database/users.json"
    }

    addUser = (id, login, name, surname, email, password, phone) => {  // dodawanie userów do pamięci
        const newUser = new User(id, login, name, surname, email, password, phone)
        this.users.push(newUser)
    }

    fetchUsers = () => { // pobieranie danych o użytkownikach
        fetch(this.dataUrl).then((response) =>{
            return response.json();
        }).then((data) =>{
            //console.log(data.length)
            for(let i = 0; i<data.length;i++){
                const user = data[i]
               //console.log(user)
                this.addUser(user.id, user.name, user.surname, user.email, user.login, user.password, user.phone)
            }
            //console.log(userSystem)
        }).catch(function(err) {
            console.log(err);
        });
    }
}
const userSystem = new UserSystem([])