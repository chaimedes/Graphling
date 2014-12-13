/*
Physical aspects of the Graphling system
Copyright Martin Berlove 2014
11/12/14
*/


var CANW = 800; // The width for the drawing canvas
var CANH = 600; // The height for the drawing canvas
var curfx = CANW/2; // Default initial spot for first node
var curfy = CANH/2; // Default initial spot for first node 

// Returns the next free spot as defined by the Graph.addPhysicalVert() function.
function getFreeSpot() {
	return new Spot(curfx, curfy);
}