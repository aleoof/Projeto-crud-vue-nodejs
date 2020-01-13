const passporte = require('passport');
const PassaportStrategy = require('passport-local');
const SQL = require('../database/database')
const bcrytpt = require('bcryptjs')
const User = require('../model/Users')
let users = new User()




module.exports = function(passport) {
    
    passporte.use(new PassaportStrategy(
        { usernameField: 'user', passwordField: 'password' },
        async function (username, password, done) {
            console.log(passporte.Authenticator)
                let user = await users.login(username, passporte.Authenticator)

                if (!user) { return done(null, false, { message: 'Incorrect username.' }) }

                bcrytpt.compare(password, user.password, (equals) => {
                    if (equals) {
                        return done(null, user)
                    } else {
                        return done(null, false, { message: 'Incorrect password.' })
                    }
                })

            }
        ))
    }