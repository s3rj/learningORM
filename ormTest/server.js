var orm = require("./orm.js");

// Find all the pets ordering by the lowest price to the highest price.
orm.selectAndOrder("party_name", "parties", "party_cost");

// // Find a pet in the pets table by an animal_name of Rachel.
// orm.selectWhere("pets", "animal_name", "Rachel");

// // Find the buyer with the most pets.
// orm.findWhoHasMost("buyer_name", "buyer_id", "buyers", "pets");
