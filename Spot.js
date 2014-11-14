/*
Spot class for Graphling
Copyright Martin Berlove 2014
Created 11/12/14
*/

Spot.prototype = {
/*
	getX: function() {
		return x;
	},
	getY: function() {
		return y;
	}
*/
}
function Spot(inx, iny) {
	this.x = inx;
	this.y = iny;
	this.getX = function() {
		return this.x;
	}
	this.getY = function() {
		return this.y;
	}
}
