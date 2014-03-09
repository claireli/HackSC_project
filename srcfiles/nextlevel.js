// var nextLevel = new Array();
// nextLevel[0] = "sky.jpg";
// nextLevel[1] = "images/meow.jpg";
// nextLevel[2] = "";
// nextLevel[3] = "";
// nextLevel[4] = "";
// nextLevel[5] = "";


function nextLevel(a, b, c, d, e){
	this.a = 'images/sky.jpg';
	this.b = 'images/sky2.jpg';
	this.c = 'images/sky3.jpg';
	this.d = 'images/sky4.jpg';
	this.e = 'images/sky5.jpg';


}

nextLevel.prototype.changeStr = function(x) {
	if (x == 1)
	{
		return this.a;
	}
	if (x == 2)
	{
		return this.b;
	}
	if (x == 3)
	{
		return this.c;
	}
	if (x == 4)
	{
		return this.d;
	}
	if (x == 5)
	{
		return this.e;
	}
}

var nextlevel = new nextLevel();