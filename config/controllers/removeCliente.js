const knex = require('../database')

module.exports = {
    async removeCliente(req, res){
        try {
            let cpf = req.params.cpf;

            let cliente = await knex('clientes').where({'cpf': cpf})
            console.log(cliente)
            if(cliente.length !== 0){
                await knex('clientes').where({'cpf':cpf}).del()
                return res.status(202).json({ message: "Cliente deletado com sucesso!"})
            }
            
        } catch (error) {
            console.log(error)
            return res.status(400).json({message: "Erro não previsto"})
        }
    }
}