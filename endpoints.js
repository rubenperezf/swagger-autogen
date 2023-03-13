module.exports = function (app) {

    app.get('/users', (req, res) => {
        //#swagger.tags = ['Users']
        //#swagger.description = 'Endpoint to get users.'

    const type = req.query.type
    return res.status(200).send(data)
})
	
    app.get('/users/:id', (req, res) => {
        //#swagger.tags = ['Users']
        //#swagger.description = 'Endpoint to get user by id.'

    const type = req.query.type

    /* #swagger.responses[200] = { 
        schema: { $ref: "#/definitions/User" },
        description: 'User by id found!.' 
        } */
    return res.status(200).send(data)
})

}