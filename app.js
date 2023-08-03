const express = require('express')

const app = express()

app.set('PORT',process.env.PORT || 3000 )

app.use(express.static('public'))

app.use('/',require('./routes/index'))

app.listen(app.get('PORT'),()=>console.log(`Server listen at Port ${app.get('PORT')}`))