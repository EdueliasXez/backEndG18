const mongoose = require("mongoose");

const placeSchema = new mongoose.Schema({
  country: String,
  city: String,
  direction: String,
  postalCode: String,
  dateAndTime: {
    date: Date,
    time: String, 
  },
  serviceProviderId: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "ServiceProvider", 
  },
  eventId: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "Event", 
  },
  placeId: {  
    type: mongoose.Schema.Types.ObjectId,
    ref: "Place",
  },
});

const Place = mongoose.model("Place", placeSchema);

module.exports = Place;
