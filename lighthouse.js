const GRID = [
      ["", "", "", "^", "", "", "", "", "", ""],
      ["", "", "v", "", "~", "", "", "", "", ""],
      ["", "v", "", "", "^", "^", "", "", "", ""],
      ["", "", "", "", "^", "^", "", "", "", ""],
      ["", "", "", "", "", "", "", "", "v", ""],
      ["", "", "", "", "", "", "", "", "", ""],
      ["", "", "", "", "", "", "", "", "", ""],
      ["", "^", "~", "~", "", "", "", "^", "", ""],
      ["", "^", "", "~", "~", "", "", "", "", ""],
      ["", "^", "", "", "~", "~", "", "", "", ""],
    ];

/*Challenge 1)As a lighthouse operator, your job is to both watch out for dangers in your area, such as rocks and strong currents, but also to be the knowledge expert for your area of the ocean. With this in mind, let's start using our coding skills to get some information about our GRID area. For starters, let's find out how many rows there are in our GRID.

Up above you have access to the printed-out grid, and the JS code for the grid. This is your grid, for your lighthouse.

Write a function called countRows() which will tell us the number of rows in our GRID. Remember that other lighthouse operators are going to be using this function, so it has to be able to work on a GRID of any size. It would be easy to write a function that just did return 10; but that wouldn't help operators with bigger or smaller areas!

You do NOT need to pass the GRID variable to the countRows() function, as it will be able to access it.*/

function countRows() {
  return GRID.length;
}

console.log(countRows());

/*Challenge 2)Now that we know how many rows our GRID area has, let's find out the number of columns. My sources at the Lighthouse9000™ company tell me that this shouldn't be too hard, but that you shouldn't overthink it.

Write a function called countColumns() that will tell us the number of columns in our GRID. Again, remember that this has to work for all the lighthouse operators out there, no matter what size their area is. Also, your code will still be able to see the GRID variable, and you won't need to pass it as an argument to the function.*/

function countColumns() {
    return GRID[0].length;
}

console.log(countColumns());

/*Challenge 3)Now that we can do rows and columns, let's find out how big the size of our GRID is. I checked in with the lead developer at a company I know of, and she told me that this is one of the areas where re-using code is a great idea.

Write a function called gridSize() that will tell you the size of your grid in the format width x height. Your function should return a string, and in this example, your function should return the string '10 x 10'. But you have to make sure that you figure that string out by actually measuring your grid! Your code should make sure that it uses your countRows() and countColumns() functions that you've already finished.*/

function gridSize() {
    return countColumns() + ' x ' + countRows();
}

console.log(gridSize());

/*Challenge 4)Awesome job! Other lighthouse operators are jealous of your grid. Just to show off, let's write a new function for the system which will count up how many cells total there are. Given the code you just wrote, this should be pretty easy.

Write a new function called totalCells() which will return the total number of cells in your grid. For this grid, it should return 100, but again make sure that is a calculated value and not just a number you type in for your function to return. We want to make all the other lighthouse operators jealous.*/

function totalCells() {
    let total = 0;
    for (i = 0; i < GRID.length; i++) {
        for (j = 0; j < GRID[i].length; j++) {
            total += 1;
        }
    }
    return total;
    //return countRows()*countColumns();
}

console.log(totalCells());

/*Challenge 5)Since our GRID is written in coordinates like A3 or D8, we need code that is going to be able to convert those coordinates to the numbers we need to fetch data out of the GRID array(s). All of the lighthouse operators have reported in and we know that their areas never go above Z.

Let's build a function called convertColumn() which, when given the coordinate as an argument, will return the number of the column.

For example, calling convertColumn('C4') should return 2 as the 'C' column is the third column, and since JavaScript arrays start at 0, that would make 2 the third column.*/ 

function convertColumn(coordinate) {
    let column = coordinate.charAt(0).toUpperCase();
    let alphabet = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ'.split('');
    column = alphabet.indexOf(column);
    if (column <= GRID[0].length) {
        return column;
    } else {
        return 'Column out of the GRID!';
    }
}

console.log(convertColumn('C2'));

/*Challenge 6)Okay, let's get our lighthouse actually doing some work! As the lighthouse keeper, sometimes you'll need to shine the light directly on a particular cell in the grid, to alert passing ships to a danger there.

Your job is to write a function called lightCell() that takes in the coordinates in the form of 'A3' or 'J9' and returns the contents of that specific cell. (Ex: lightCell('B4'); would return "")*/

function lightCell(coordinate) {
    let column = convertColumn(coordinate);
    let row = Number(coordinate.charAt(1)) - 1;
    return GRID[row][column];
}

console.log(lightCell('C2'));


/*Challenge 7)In the area where the lighthouse is watching, the grid, there are many rocks which ships would need to avoid. Rocks are indicated with the ^ symbol on the grid.

Write a function called isRock() which will take in a coordinate in the form of 'C7' and return a true or a false boolean value depending on whether there is a rock in that cell or not. (Example: isRock('D1'); would return true)*/

function isRock(coordinate) {
    if (lightCell(coordinate) == '^') {
        return true;
    } else {
        return false;
    }
}

console.log(isRock('D1'));


/*Challenge 8)There are also areas where the currents are too strong for boats to be effective, and boats run the risk of being smashed up against the rocks if they get caught here. Strong currents are indicated with the ~ symbol.

Write a function called isCurrent() which will take in a coordinate in the form of 'A4' and return a true or a false boolean value depending on whether there is a strong current in that cell or not. (Example: isCurrent('E2'); would return true)*/

function isCurrent(coordinate) {
    if (lightCell(coordinate) == '~') {
        return true;
    } else {
        return false;
    }
}

console.log(isCurrent('E2'));

/*Challenge 9)And last, but certainly not least, there are cells with ships in them! We need to be able to query any cell in our GRID area and find out if it is occupied by a ship.

Write a function called isShip() which will take in a coordinate in the form of 'I9' and return a true or a false boolean value depending on whether there is a ship in that cell or not. (Example: isShip('B3') would return true)*/

function isShip(coordinate) {
	if (lightCell(coordinate) == 'v') {
        return true;
    } else {
        return false;
    }
}

console.log(isShip('B3'));

/*Challenge 10)Your next job is to write a function so that your lighthouse can sweep a whole row of cells.

Write a function named lightRow() that takes in the number of the row and returns its contents. (Example: lightRow(2); would return ["", "", "v", "", "~", "", "", "", "", ""])*/

function lightRow(row) {
	return GRID[row - 1];
}

console.log(lightRow(2));

/*Challenge 11) Now that you can return the contents of the cells of a row, we also need to be able to return the cells of a column.

Write a function called lightColumn() that takes in the letter of the column from the grid, and returns an array that is the contents of that grid column. (Ex: lightColumn('C'); would return ["", "", "", "", "", "", "", "~", "", ""])*/

function lightColumn(coordinate) {
	let column = [];
	for (i = 0; i < GRID.length; i++) {
        for (j = 0; j < GRID[i].length; j++) {
            if (j == convertColumn(coordinate)) {
				column.push(GRID[i][convertColumn(coordinate)]);
			}
        }
    }
	return column;
}

console.log(lightColumn('E'));

/*Challenge 12) The weekend lighthouse operator isn't as smart as you are, and sometimes tells the Lighthouse9000™ system to do invalid things, causing the repairman to have to come out and fix the lighthouse. Upgrade the lightCell() method so that if an invalid cell is passed in, it returns false. (Example: lightCell('Z3'); would return false as would lightCell('A11');) */

function lightCell(coordinate) {
	console.log(coordinate)
	//if (coordinate.length == 2 && (/^[^a-z\s]/+/[0-9]/.test(coordinate)) && !(/[0-9]/.test(convertColumn(coordinate)))) {
	if (/^(\w{1})(\d{1})$/.test(coordinate)) {
		let column = convertColumn(coordinate);
    	let row = Number(coordinate.charAt(1)) - 1;
    	return GRID[row][column];
	} else {
		return false
	}
}

console.log(lightCell('2c'));


//  /^[A-Za-z]$/ /^[0-9]$/ + /[0-9]$/
/^(\d{1})(\w{1})$/
