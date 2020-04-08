const bcrypt = require('bcryptjs')

module.exports = {
    register: async (req, res) => {
        const {username, password} = req.body
        const db = req.app.get('db')

        const salt = bcrypt.genSaltSync(10);
        const hash = bcrypt.hashSync(password, salt)

        const newUser = await db.register_user(username, hash)
        req.session.user = newUser[0]
        res.status(201).send(req.session.user)
    },
    login: async (req, res) => {
        const {username, password} = req.body
        const db = req.app.get('db')

        const foundUser = await db.check_user(username)

        if(!foundUser[0]){
           return res.status(400).send('No user found')
        }

        const authenticated = bcrypt.compareSync(password, foundUser[0].password)
        if(!authenticated){
            return res.status(400).send('Wrong Password')
        }

        delete foundUser[0].password
        req.session.user = foundUser[0]
        res.status(200).send(req.session.user)
    }
}