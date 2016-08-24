"use strict";
var mongoose = require("mongoose");
var Schema = mongoose.Schema;

/**
 * Schema
 */
var LocateQuerySchema = new Schema({
  pokemon: { type: String, default: "" },
  loc: { type: String, default: ""},
	radius: {type: Number, default: 0 },
});

var CoordinateSchema = new Schema({
	lat: { type: Number, default: 0.0 },
	longit: { type: Number, default: 0.0 },
});

var LocationsSchema = new Schema({
	locs: { type: Array, default: [] },
});

mongoose.model("LocateQuery", LocateQuerySchema);
mongoose.model("Coordinate", CoordinateSchema);
mongoose.model("Locations", LocationsSchema);
