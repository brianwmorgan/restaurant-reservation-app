const knex = require("../db/connection");

function createTable(newTable) {
  return knex("tables")
    .insert(newTable)
    .returning("*")
    .then((createdRecord) => createdRecord[0]);
}

function readTable(tableId) {
  return knex("tables").select("*").where({ table_id: tableId }).first();
}

function seatTable(tableId, reservationId) {
  return knex("reservations")
    .where({ reservation_id: reservationId })
    .update({ status: "seated" })
    .then(() => {
      return knex("tables")
        .where({ table_id: tableId })
        .update({ status: "occupied", reservation_id: reservationId });
    });
}

function unseatTable(tableId, reservationId) {
  return knex("tables")
    .select("*")
    .where({ table_id: tableId })
    .update({ status: "free", reservation_id: null })
    .then(() => {
      return knex("reservations")
        .where({ reservation_id: reservationId })
        .update({ status: "finished" });
    });
}

function listTables() {
  return knex("tables").select("*").orderBy("table_name");
}

module.exports = {
  createTable,
  readTable,
  seatTable,
  unseatTable,
  listTables,
};
