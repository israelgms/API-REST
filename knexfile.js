module.exports = {
    development: {
        client: 'mysql',
        connection: {
            host: '127.0.0.1',
            user: 'root',
            password: '1234',
            database: 'bdapi'
        },
        migrations: {
            directory: `${__dirname}/config/database/migrations`
        },
        seeds: {
            tableName: 'knex_seeds',
            directory: `${__dirname}/config/database/seeds`
        }
    }
}