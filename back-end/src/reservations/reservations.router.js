/**
 * Defines the router for reservation resources.
 *
 * @type {Router}
 */

const router = require("express").Router();
const controller = require("./reservations.controller");
const methodNotAllowed = require("../errors/methodNotAllowed");
const { route } = require("../tables/tables.router");

router
  .route("/")
  .get(controller.listReservations)
  .post(controller.createReservation)
  .all(methodNotAllowed);

router
  .route("/:reservation_id")
  .get(controller.readReservation)
  .all(methodNotAllowed);

module.exports = router;
