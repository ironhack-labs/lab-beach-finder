const mongoose = require("mongoose");
mongoose.connect("mongodb://localhost/Beaches");
const Beach = require("../models/beach");

const beaches = [
  {
    name: "Korba",
    plage: "green"
  }
];

Beach.create(beaches, (err, savedBeaches) => {
  if (err) {
    throw err;
  }
  savedBeaches.forEach(beach => {
    console.log(`${beach.name} - ${beach._id}`);
  });

  mongoose.disconnect();
});
