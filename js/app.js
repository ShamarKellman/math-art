$(function(){	
	$('#heart').click(function() {
		$("li.active").removeClass("active");
		$(this).addClass('active');

		var eq = "$\\alpha = (\\sin{\\frac{10\\pi(i + 699)}{2000}}, \\cos{\\frac{8\\pi(i + 699)}{2000}}) " +
		           "\\beta = (\\sin{\\frac{12\\pi(i + 699)}{2000}}, \\cos{\\frac{10\\pi(i + 699)}{2000}})$";

		$('#equation').text(eq);
		MathJax.Hub.Queue(["Typeset", MathJax.Hub, "equation"]);

		$('.row').empty();

		return new p5(drawHeart);
	});

	$('#cylinder').click(function() {
		$("li.active").removeClass("active");
		$(this).addClass('active');

		var eq = "$\\alpha = (-\\sin{\\frac{4\\pi i}{1000}}, -\\cos{\\frac{2\\pi i}{1000}}) " +
		           "\\beta = ((\\frac{-1}{2})\\sin{\\frac{8\\pi i)}{1000}}, (\\frac{-1}{2})\\cos{\\frac{4\\pi i}{1000}})$";

		$('#equation').text(eq);
		MathJax.Hub.Queue(["Typeset", MathJax.Hub, "equation"]);

		$('.row').empty();
		return new p5(drawCylinder);
	});

	$('#boat').click(function() {
		$("li.active").removeClass("active");
		$(this).addClass('active');

		var eq = "$\\alpha = (-\\sin{\\frac{4\\pi i}{1000}}, -\\cos{\\frac{2\\pi i}{1000}}) " +
		           "\\beta = ((\\frac{-1}{2})\\sin{\\frac{8\\pi i)}{1000}}, (\\frac{-1}{2})\\cos{\\frac{4\\pi i}{1000}})$";

		$('#equation').text(eq);
		MathJax.Hub.Queue(["Typeset", MathJax.Hub, "equation"]);

		$('.row').empty();
		return new p5(drawBoat);
	});

	// function drawBoat() {
	// 	//(sin((6πk/2000)+(π/4))+i sin(12πk/2000))e^(iπ/4) and (sin((4πk/2000)+(π/6))+i sin((2πk/2000)+(π/3)))e^(iπ/4) 3000l
	// }

	// function drawCardiod() {
	// 	// (cos(2πi/1000),sin(2πi/1000)) and (cos(4πi/1000),sin(4πi/1000))	1000l
	// }

	// function drawAbs1() {

	// 	//((sin(20πi/3000))^3, (cos(18πi/3000))^3) and ((sin(16πi/3000))^3, (cos(14πi/3000))^3) 2000l

	// }

	//For each i=1,2,3,...,500 the endpoints of the i-th line segment are: ((3/2)(sin((2πi/500)+(π/3)))^7, (1/4)(cos(6πi/500))^2) and ((1/5)sin((6πi/500)+(π/5)), (-2/3)(sin((2πi/500)-(π/3)))^2).
	
	/*This image shows 12,000 circles. For each k=1,2,3,...,12000 the center of the k-th circle is:
(sin(10πk/12000), (cos(28πk/12000))^3),
and the radius of the k-th circle is: (1/3)(sin(18πk/12000))^2.*/
});