"use strict";
var mongoose = require("mongoose");
var LocateQuery = mongoose.model("LocateQuery");
var Locations = mongoose.model("Locations");

exports.sendLocationQuery = function *() {
  var locate = yield LocateQuery.findOne().exec();
  if (!locate) {
    locate = new LocateQuery();
  }
  this.body = { pokemon: locate.pokemon, loc: locate.loc, radius: locate.radius };
};

exports.getLocations = function*() {
	var locations = yield Locations.findOne().exec();
	if (!locations) {
		locations = new Locations();
	}
	this.body = { locations: locations.locs };
}
