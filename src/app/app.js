const app = require('./config/server')
const Sequelize = require('sequelize');
require ('./app/api/rest/payStripe')(app)

//iniciar el sevidor
app.listen(app.get('port'), ()=>{
    console.log('Server on port ', app.get('port'))
})
