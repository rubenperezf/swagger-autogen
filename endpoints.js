module.exports = function (app) {
	
    app.get('/users/:id', (req, res) => {
        //#swagger.tags = ['Users']
        //#swagger.description = 'Endpoint to get user by id.'

    const type = req.query.type
    const age = req.query.age
        return res.status(404).send(false)
    })

}