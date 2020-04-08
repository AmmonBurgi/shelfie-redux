require('dotenv').config()
    const massive = require('massive'),
        express = require('express'),
        session = require('express-session'),
        {SERVER_PORT, CONNECTION_STRING, SESSION_SECRET} = process.env,
        ctrl = require('./controller'),
        authCtrl = require('./authController'),
        app = express(),
        port = SERVER_PORT

    app.use(express.json())

    app.use(session({
        resave: false,
        saveUninitialized: true,
        secret: SESSION_SECRET,
        cookie: {maxAge: 1000 * 60 * 60 * 24}
    }))

    massive({
        connectionString: CONNECTION_STRING,
        ssl: {rejectUnauthorized: false}
    }).then(db => {
        app.set('db', db)
        console.log('db connected')
    })

    //normal endpoints
    app.get('/api/products/:id', ctrl.getAllProducts)

    //auth endpoints
    app.post('/api/register', authCtrl.register)
    app.post('/api/login', authCtrl.login)
    
    app.listen(port, () => console.log(`server listening on port ${port}`))
