const knex = require('../database')

module.exports = { 
    async consultarCliente(req, res){
        const data = await knex('clientes')
        return res.json(data)
    }
}