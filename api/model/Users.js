const SQL = require('../database/database')


class Users {
    constructor(id,name, cargo){
        this.id = id
        this.name = name;
        this.cargo = cargo;
    }

    getUsers(res){
        SQL('SELECT * FROM users', res)
    }

    postUser(req, res){
        console.log(req.body)
        let name = req.body.name
        let cargo = req.body.cargo
        SQL(`INSERT INTO users(name, cargo) VALUES('${name}', '${cargo}')`, res)
    }

    updateUser(req,res){
        let id = parseInt(req.params.id)
        let name = req.body.name.substring(0,150)
        let cargo = req.body.cargo.substring(0,150)
        SQL(`UPDATE users SET name='${name}', cargo='${cargo}' WHERE id=${id}`,res)
    }

    updateUserPassword(req,res){
        let id = parseInt(req.params.id)
        let name = req.body.name.substring(0,150)
        let cargo = req.body.cargo.substring(0,150)
        let password = req.body.password.substring(0,150)
        SQL(`UPDATE users SET name='${name}', cargo='${cargo}', password=${password} WHERE id=${id}`,res)
    }
    
    deleteUser(req,res){
        let id = parseInt(req.params.id)
        SQL(`DELETE FROM users WHERE id=${id}`, res)
    }


}

module.exports = Users;