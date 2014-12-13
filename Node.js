/*
Node class for Graphling
Copyright Martin Berlove 2014
11/12/14
*/

function Node(inid) {
	this.nid = inid;
	this.highlighted = false;

} // End of Node constructor

Node.prototype = {

	// Toggles the highlighting of this node (used by draw())
	highlight:function(toggle) {
		this.highlighted = toggle;
	},
	
	// Returns the value of the highlight toggle
	isHighlighted:function() {
		return this.highlighted;
	}
		
} // End of Node prototype