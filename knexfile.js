module.exports = {
  development: {
    client: 'sqlite3',
    useNullAsDefault: true, // needed for sqlite
    connection: {
      filename: './data/zoos.db3',
    },
    migrations: {
      directory: './data/migrations'
    },
    seeds: {
      directory: './data/seeds'
    },
    pool: {
      afterCreate: (conn, done) => {
        //runs after a connection is made to sqlite engine
        conn.run('PRAGMA foreign_keys = ON', done) //turns on foreign key (FK) enforcement 
      }
    }
  },

};
