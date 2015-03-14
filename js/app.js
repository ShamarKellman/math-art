//(function(){	

	setup();
	drawHeart();

	function setup() {
		canvas = document.getElementById("canvas")
		ctx = canvas.getContext("2d");
	}
	
	function drawHeart() {	
		ctx.save();
		ctx.beginPath();
		ctx.setTransform(1, 0, 0, 1, 0, 0);
		ctx.clearRect(0, 0, canvas.width, canvas.height);
		ctx.lineWidth = 1;
		ctx.translate(canvas.width/2, canvas.height/2);	
		
		for(var i = 1; i <= 601; i++) {
			var x1 = Math.sin((10*Math.PI*(i+699))/2000) * 300,
				y1 = Math.cos((8*Math.PI*(i+699))/2000) * 300,
				x2 = Math.sin((12*Math.PI*(i+699))/2000) * 300,
				y2 = Math.cos((10*Math.PI*(i+699))/2000) * 300;
				
			ctx.moveTo(x1, y1);
			ctx.lineTo(x2, y2);
			// set line color
			ctx.strokeStyle = '#'+Math.floor(Math.random()*16777215).toString(16);
			ctx.stroke();			
		}
		
		ctx.restore();
		
	}
		
	function drawCylinder() {
		ctx.save();
		ctx.beginPath();
		ctx.setTransform(1, 0, 0, 1, 0, 0);
		ctx.clearRect(0, 0, canvas.width, canvas.height);
		ctx.lineWidth = 1;
		ctx.translate(canvas.width/2, canvas.height/2);	
		
		for(var i = 1; i <= 1000; i++) {
			var x1 = (-Math.sin((4*Math.PI*i)/1000)) * 300,
				y1 = (-Math.cos((2*Math.PI*i)/1000)) * 300,
				x2 = ((-1/2) * Math.sin((8*Math.PI*i)/1000)) * 300,
				y2 = ((-1/2) * Math.sin((4*Math.PI*i)/1000)) * 300;

			ctx.moveTo(x1, y1);
			ctx.lineTo(x2, y2);
			// set line color
			ctx.strokeStyle = '#'+Math.floor(Math.random()*16777215).toString(16);
			ctx.stroke();
				//(-sin(4πi/1000), -cos(2πi/1000)) and ((-1/2)sin(8πi/1000), (-1/2)cos(4πi/1000))
		}
		ctx.restore();
	}

	function drawBoat() {
		//(sin((6πk/2000)+(π/4))+i sin(12πk/2000))e^(iπ/4) and (sin((4πk/2000)+(π/6))+i sin((2πk/2000)+(π/3)))e^(iπ/4) 3000l
	}

	function drawCardiod() {
		// (cos(2πi/1000),sin(2πi/1000)) and (cos(4πi/1000),sin(4πi/1000))	1000l
	}

	function drawAbs1() {

		//((sin(20πi/3000))^3, (cos(18πi/3000))^3) and ((sin(16πi/3000))^3, (cos(14πi/3000))^3) 2000l

	}
	
//})();