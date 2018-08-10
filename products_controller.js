module.exports = {
    create: (req, res, next) =>{
        const dbInstance = req.app.get('db');
        const {name, description, price,imageurl} = req.body

        dbInstance.create_product([ name, description, price, imageurl ])
        .then(()=> res.sendStatus(200))
        .catch( err =>{
            res.status(500).send({ errorMessage: "Well Crap! Something is broken so we'll get to work and fix it!"}); 
            console.log(err)
        });
    },

    getOne: (req, res, next) =>{
        const dbInstance = req.app.get('db')
        const {params} = req;

        dbInstance.read_product( params.id)
        .then(product => res.status(200).send(product))
        .catch( err =>{
            res.status(500).send({ errorMessage: "Well Crap! Something is broken so we'll get to work and fix it!"}); 
            console.log(err)
        });
    },

    getAll: (req, res, next) =>{
        const dbInstance = req.app.get('db')
        

        dbInstance.read_products()
        .then(products => res.status(200).send(products))
        .catch( err =>{
            res.status(500).send({ errorMessage: "Well Crap! Something is broken so we'll get to work and fix it!"}); 
            console.log(err)
        });
    },

    update: (req, res, next) =>{
        const dbInstance = req.app.get('db')
        const {params, body} = req

        dbInstance.update_products(params.id, body.description)
        .then(()=> res.sendStatus(200))
        .catch( err =>{
            res.status(500).send({ errorMessage: "Well Crap! Something is broken so we'll get to work and fix it!"}); 
            console.log(err)
        });
    },

    delete: (req, res, next) =>{
        const dbInstance = req.app.get('db')
        const {params} = req;

        dbInstance.delete_product( params.id)
        .then(()=> res.sendStatus(200))
        .catch( err =>{
            res.status(500).send({ errorMessage: "Well Crap! Something is broken so we'll get to work and fix it!"}); 
            console.log(err)
        });
    },

}


