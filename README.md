# API REST com CRUD em "Clientes"

API construída utilizando NODEJS. As dependências podem ser visualizadas no arquivo package.json, sendo elas: 
* Express - Responsável por facilitar o processo de criação da API;
* Knex - Um construtor de consultas que vale apena ter sempre por perto;
* Morgan - Muito útil no desenvolvimento, possibilitando a visualização de poderosos logs;
* Mysql - Suporte à recursos;
* Nodemon - Essêncial no desenvolvimento. Reinicia o servidor de forma automatica sempre que uma alteração é salva.

## Instalando dependências: 
Depois de clonar o projeto será necessário instalar as dependências. Execute o seguinte comando, em seu terminal:
```
npm i
```
Npm i instalará todas as dependências necessárias para que você consiga rodar com sucesso a API.

### Banco de dados
Além das dependências vamos precisar realizar a criação de um banco de dados, e é obrigatorio que, para este projeto o nome seja bdapi , conforme apresentado no arquivo knexfile.js. O user está atribuido como root , e a senha 1234.

### Migrations
Com o banco de dados criado rodaremos nossa migration, que realizará a criação da tabela e configuração da mesma. Execute o seguinte comando no seu terminal:
```
knex migrate:make clientes
```
Se caso houver retorno de erro tente executar o mesmo comando pelo git bash, e se mesmo assim continuar dando erro instale o knex de forma global, com o comando:
```
npm install knex -g
```
### Seeds
Para "finalizar" vamos rodar o seed, que irá inserir alguns registros em nossa tabela, para facilitar o processo (Rodar comando no terminal do gitbash) 
```
knex seed:make clientes
```
### Iniciando o servidor
Para iniciar o servidor é necessário digitar o comando:
```
npm start
```
Start é o nome do Script, que pode ser localizado no arquivo package.json. Observe que utilizamos o nodemon no script.

//

Agora que temos tudo pronto podemos realizar os testes pelo POSTMAN que irá nos auxiliar no processo de CRUD. 

//

### ROTAS: 

GET: /consultaCliente
POST: /cadastroCliente
DELETE: /removeCliente/:cpf   (necessário passar o cpf como params)

Dúvidas? 
Linkedin: https://www.linkedin.com/in/israel-gomes-04407718b/
