const db = require("../data/db-config");

// using find () helper for GET to / in scheme router
function find() {
  return db("schemes");
}
// using findById(id) helper for GET to /:id, POST to /:id/steps, and PUT to /:id in scheme router
function findById(id) {
  return db("schemes").where({ id: id });
}
// using findSteps(id) helper for GET to /:id/steps in scheme router
function findSteps(id) {
  return db("schemes")
    .join("steps", "steps.scheme_id", "=", "schemes.id")
    .where({ scheme_id: id })
    .select(
      "steps.id",
      "schemes.scheme_name",
      "steps.step_number",
      "steps.instructions"
    )
    .then(steps => {
      return steps;
    });
}
// using add(schme) helper for POST to / in scheme router
function add(scheme) {
  return db("schemes").insert(scheme);
}

// using add(scheme) helper for PUT to /:id in scheme router
function update(changes, id) {
  return db("schemes")
    .where({ id: id })
    .update(changes);
}
// using remove(id) helper for DELETE to /:id in scheme router
function remove(id) {
  return db("schemes")
    .where({ id: id })
    .del();
}

module.exports = {
  find,
  findById,
  findSteps,
  add,
  update,
  remove
};
