// Tray SE Technical Assessment: https://gist.github.com/alirussell/2d200d21f117f8d570667daa7acdbae5
// YT Liang, Feb. 15th, 2020
// Runtime environment: Node.js v12.16.0

// include the File System module
var fs = require('fs');

// start reading the file and get the content
fs.readFile('input.txt', function read(err, input) { 
	if (err) throw err; 
	
	var roomDimensionsArray = [], hooverPositionArray = [], dirtPositionsStr = "", drivingInstructionsArray = 0; // for input data processing
	var inputLen = 0; // to create a variable to save the length to reduce repetitive computing 
	var hooverStr = ""; 
	var roomX = 0; roomY = 0; 
	var hooverX = 0; hooverY = 0; 
	var totalCleaned = 0; 
	var i = 0; 
		
	// 1. process the input and prepare the data structure 
	// 1.1. convert to string and split each line of the string into an array for further processing 
	input = input.toString().split("\r\n"); 
	
	// 1.2. take out the first line for the dimension for the room  
	roomDimensions = input[0].split(" "); 
	 
	// 1.3. take out the second line for the initial position for the hoover 
	hooverPosition = input[1].split(" "); 
	
	// 1.4. take out from the third line to last-1 line for the dirt positions  
	inputLen = input.length;
	dirtPositions = ""; 
	for (i=0; i<inputLen-3; i++)
	{
		// let's take all the dirt positions into one string and later see if the hoover's position is included in this string 
		dirtPositions = dirtPositions + input[i+2] + ";"; 
	}
	
	// 1.5 take out the rest for the driving instructions
	drivingInstructions = input[inputLen-1].split(""); 

	// 2. start processing the data structure and loop through the driving instructions
	roomX = parseInt(roomDimensions[0]);
	roomY = parseInt(roomDimensions[1]);
	hooverX = parseInt(hooverPosition[0]);
	hooverY = parseInt(hooverPosition[1]);
	totalCleaned = 0; 
	
	// 2.1. make sure we check if the initial position of the hoover has dirt 
	hooverStr = hooverX.toString() + " " + hooverY.toString() + ";"; 
	if (dirtPositions.includes(hooverStr))
	{
		// update the total count of the dirt we've cleaned 
		totalCleaned++; 
		
		// make sure we remember to take the dirt position we've cleaned out of the dirtPositions string to avoid double count
		dirtPositions = dirtPositions.replace(hooverStr, "");
	
	}
	
	// 2.2. loop through the driving instructions 
	for (i=0; i<drivingInstructions.length; i++)
	{
		// remember to check the boundary (a.k.a. the wall)
		switch (drivingInstructions[i]) {
			case 'N': 
				if (hooverY < roomY-1)
				{
					hooverY++; 
				}
				break; 
			case 'S': 
				if (hooverY > 0)
				{
					hooverY--; 
				}
				break; 
			case 'E': 
				if (hooverX < roomX-1)
				{
					hooverX++; 
				}
				break; 
			case 'W': 
				if (hooverX > 0)
				{
					hooverX--; 
				}
				break; 
			
		}
 		
		hooverStr = hooverX.toString() + " " + hooverY.toString() + ";"; 
		if (dirtPositions.includes(hooverStr))
		{
			totalCleaned++; 
			dirtPositions = dirtPositions.replace(hooverStr, "");
		}
	}
	
	// output the final result :)
	console.log(hooverX + " " + hooverY); 
	console.log(totalCleaned); 
});