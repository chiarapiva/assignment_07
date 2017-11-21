var capture;
var colorList = ['#FC5185',
'#364F6B',
'#43DDE6',
'#F0F0F0'];

function setup() {
	createCanvas(640, 480);
	background(59, 51, 120);
	capture = createCapture(VIDEO);
	capture.size(320, 240);
	capture.hide();
}

function draw() {
	tint(255, 192, 0, 100);
	image(capture, 0, 0, mouseX, mouseY);

	for (var i = 0; i < colorList.length; i++) {
		var x = random() * width;
		var y = random() * height;
		noStroke();
		var colorHex = colorList[i];
		tint(50);
		fill(color(colorHex));
		rect(y, x, 80, 80);
	}

	var myImage = capture.loadPixels();
	var amount = 100;

	for (var i = 0; i < amount; i++) {
		var x = random(640);
		var y = random(480);
		var c = myImage.get(x, y);
		noStroke();
		tint(20, 20, 20);
		fill(c);
		rect(x, y, 30, 30);
	}

	fill(255, 192, 0, 100);
	rect(mouseX, mouseY, 50, 50);
}
