
const stripe = require('stripe')('sk_test_RUQfCaFY9x2uO0UkIrY80NCC00GvSgE8UG')

module.exports = (app) => {
    app.post('/pay/stripe', async (req, res) => {
        try {
            stripe.customers
                .create({
                    name: 'Michel',
                    email: req.body.mail,
                    source: req.body.data.id
                })
                .then( customer => {
                    console.log('Customer: ', customer)
                    stripe.charges.create({
                            amount: req.body.cant,
                            currency: "usd",
                            customer: customer.id,
                            description: 'Esta es la descripcion del producto'
                        })
                        .then(response => {
                        console.log('charges: ', response)
                        res.send({maesje: 'todo ok'})
                    })
                    }
                )

                .catch(err => console.log(err));
        } catch (err) {
            res.send(err);
        }


        // console.log('token ', req.body.data.id)
        // const customer = await stripe.customers.create({
        //     name: 'michel',
        //     email: 'test@gmail.com',
        //     source: req.body.data.id
        // })
        // console.log('customer ', customer)
        // const charge = await stripe.charges.create({
        //     amount: 3000,
        //     currency: 'usd',
        //     customer: customer.id,
        //     description: 'Esta es la descripcion del producto'
        // })
        // console.log('charge ', charge.id)
        // res.send({maesje: 'todo ok'})
    })
}
