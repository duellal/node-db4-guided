/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.up = async function(knex) {
  await knex.schema
  //Order of creating tables DOES matter, especially when there are FKs on other tables
    //Create tables with no FKs first, then tables with FKs that use the previous tables, etc
    .createTable(`zoos`, table => {
        table.increments(`zoo_id`)
        table.string(`zoo_name`, 128)
            .notNullable()
        table.string(`address`, 200)
            .unique()
    })
    .createTable(`species`, table => {
        table.increments(`species_id`)
        table.string(`species_name`, 180)
            .notNullable()
            .unique()
    })
    .createTable(`animals`, table => {
        table.increments(`animal_id`)
        table.string(`animal_name`, 128)
            .notNullable()
        table.integer(`species_id`)
            .unsigned()
            .notNullable()
            .references(`species_id`)
            .inTable('species')
            .onDelete(`RESTRICT`)
            .onUpdate(`RESTRICT`)
            // 'RESTRICT' - does not allow you to delete something if it exists in another table
            // 'CASCADE' - deletes all instances in all tables where it exists
    })
    .createTable(`zoo_animals`, table => {
        table.increments(`za_id`)
        table.integer(`zoo_id`)
            .unsigned()
            .notNullable()
            .references(`zoo_id`)
            .inTable(`zoos`)
            .onDelete(`RESTRICT`)
            .onUpdate(`RESTRICT`)
        table.integer(`animal_id`)
            .unsigned()
            .notNullable()
            .references(`animal_id`)
            .inTable(`animals`)
            .onDelete(`RESTRICT`)
            .onUpdate(`RESTRICT`)
    })
};


/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.down = async function(knex) {
  await knex.schema 
  //Order of deconstructing/undoing tables DOES matter, especially when there are FKs on other tables
    //Deconstruct tables with majority of FKs first, then tables with 1 FK, then tables w/o FKs
    .dropTableIfExists(`zoo-animals`)
    .dropTableIfExists(`animals`)
    .dropTableIfExists(`species`)
    .dropTableIfExists(`zoos`)

};
