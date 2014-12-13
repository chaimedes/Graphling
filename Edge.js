/*
Edge class for Graphling
Copyright Martin Berlove 2014
11/12/14
*/

function Edge(in1, in2, directed) {
	this.n1 = in1;
	this.n2 = in2;
	this.isDirected = directed;
	this.highlighted = false;
	this.color = color();
	this.edgeText = "";
}

Edge.prototype = {
	setText:function(text) {
		this.edgeText = text;
	},
	highlight:function(toggle) {
		this.highlighted = toggle;
	},
	isHighlighted:function() {
		return this.highlighted;
	}
} // End of Edge prototype