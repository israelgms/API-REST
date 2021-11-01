const knex = require('../database')


module.exports = {
    async cadastrarCliente(req,res){
        try {
            let { nome, cpf, email, telefone } = req.body
            const verificaCpf = await knex('clientes').where({'cpf': cpf})
            if(verificaCpf.length === 0){
                await knex('clientes').insert({
                    nome,
                    cpf,
                    email,
                    telefone
                })
                return res.status(201).json({ message: 'Cliente cadastrado com sucesso!' })    
            }else{
                return res.status(400).json({ message: 'CPF já cadastrado no sistema!' })
            }
        } catch (error) {
            console.log(error)
            res.status(500).json({ message: 'Erro não previsto' })            
        }
        
        
        
    }
}