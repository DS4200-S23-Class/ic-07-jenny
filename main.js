// setting constants
const FRAME_HEIGHT = 500;
const FRAME_WIDTH = 200;
const MARGINS = {left: 50, right: 50, top: 50, bottom: 50};

// binding data
const data = [55000, 48000, 27000, 66000, 90000];

// adding frame
const FRAME = 
d3.select("#vis1")
	.append("svg")
	.attr("height", FRAME_HEIGHT)
	.attr("width", FRAME_WIDTH)
	.attr("class", "frame");

// more constants
const VIS_HEIGHT = FRAME_HEIGHT - MARGINS.top - MARGINS.bottom;
const VIS_WIDTH = FRAME_WIDTH - MARGINS.left - MARGINS.right;


// scaling functions
const MAX_Y = d3.max(data, (d) => {return d;});
console.log("Max y: " + MAX_Y);


// scale function
const Y_SCALE = d3.scaleLinear()
					.domain([0, (MAX_Y + 10000)])
					.range([0, VIS_HEIGHT]);

// adding points to frame
FRAME.selectAll("points")
		.data(data)
		.enter()
		.append("circle")
			.attr("cx", MARGINS.left)
			.attr("cy", (d) => {
				return (Y_SCALE(d) + MARGINS.bottom);
			})
			.attr("r", 5)
			.attr("class", "point");

// add an axis
FRAME.append("g")				// g is a place holder for an svg
		.attr("transform", 
			"translate(" + MARGINS.left + "," + MARGINS.bottom + ")")
		.call(d3.axisLeft(Y_SCALE).ticks(4))
			.attr("font-size", "20px");










































