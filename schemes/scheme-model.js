const db = require("../data/db-config");

function find() {
  // using find () helper for GET to / in scheme router
  return db("schemes");
}

module.exports = {
  find
};
