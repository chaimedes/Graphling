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
} // End of Square constructor