/* 
Square class for Graphling
Copyright Martin Berlove 2014
11/12/14
*/

function Square(inx, iny, inw, inh) {
	this.x = inx;
	this.y = iny;	
	this.w = inw;
	this.h = inh;
	this.getX = function() {
		return this.x;
	}
	this.getY = function() {
		return this.y;
	}
	this.getW = function() {
		return this.w;
	}
	this.getH = function() {
		return this.h;
	}
	this.setX = function(x) {
		this.x = x;
	}
	this.setY = function(y) {
		this.y = y;
	}
	this.setW = function(w) {
		this.w = w;
	}
	this.setH = function(h) {
		this.h = h;
	}
} // End of Square constructor