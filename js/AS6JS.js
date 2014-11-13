/*
  File: JS/AS6JS
  91.461 Assignment 6: Creating an Interactive Table
  Name: Brian Chiang
  School: UMass Lowell, Computer Science
  Email: brian_chiang@student.uml.edu
  Created: October 23, 6:00 PM
  Purpose: This is the javascript code used in the assignment to read input and create a table.
*/

function print() {
  /* These variables will be used for comparison and creating the table. */
  var int1 = parseInt($("#number1").val());
  var int2 = parseInt($("#number2").val());
  var int3 = parseInt($("#number3").val());
  var int4 = parseInt($("#number4").val());
  
  /* Test to see whether or not the values were submitted correctly. */
  console.log(int1);
  console.log(int2);
  console.log(int3);
  console.log(int4);

  /* strContent will hold the HTML code that will be transferred to the HTML file. */
  var strContent = "";
  /* firstLoop will be used in loops that need to access the multiplicands. */
  var firstLoop = int2 - int1 + 1;
  /* secondLoop will be used in loops that need to access the multipliers. */
  var secondLoop = int4 - int3 + 1;
  /* holder will keep track of which multiplier is currently being used. */
  var holder = parseInt($("#number3").val());

  /* product will hold the product of the multiplier and multiplicand. */
  var product = 0;

  /* The following code acts as a "reset", resetting the form fields back to white.*/
  /* This code was supplied by David Lordan */
  frm["number1"].style.backgroundColor = "white";
  frm["number2"].style.backgroundColor = "white";
  frm["number3"].style.backgroundColor = "white";
  frm["number4"].style.backgroundColor = "white";

  /* The following code is all validation. */
  /* Check to see if there are any empty fields or non-numbers. */
  /* Credit goes to David Lordan for validation code */
  if(int1 === "" || isNaN(int1)) {
  	strContent += "<p class='error'>Please enter a number in the first field</p>";
  	jQuery("#content").html(strContent);
  	frm["number1"].style.backgroundColor = "green";

  	return;
  }

  if(int2 === "" || isNaN(int2)) {
  	strContent += "<p class='error'>Please enter a number in the second field</p>";
  	jQuery("#content").html(strContent);
  	frm["number2"].style.backgroundColor = "green";

  	return;
  }

  if(int3 === "" || isNaN(int3)) {
  	strContent += "<p class='error'>Please enter a number in the third field</p>";
  	jQuery("#content").html(strContent);
  	frm["number3"].style.backgroundColor = "green";

  	return;
  }

  if(int4 === "" || isNaN(int4)) {
  	strContent += "<p class='error'>Please enter a number in the fourth field</p>";
  	jQuery("#content").html(strContent);
  	frm["number4"].style.backgroundColor = "green";

  	return;
  }
  /* Check to see if the numbers are in correct order. */
  if(int1 > int2) {
  	strContent += "<p class='error'>Start value must be less than than or equal to end value</p>";
  	jQuery("#content").html(strContent);
  	frm["number1"].style.backgroundColor = "green";
  	frm["number2"].style.backgroundColor = "green";

  	return;
  }

  if(int3 > int4) {
  	strContent += "<p class='error'>Start value must be less than or equal to end value</p>";
  	jQuery("#content").html(strContent);
  	frm["number3"].style.backgroundColor = "green";
  	frm["number4"].style.backgroundColor = "green";

  	return;
  }
  /* End of validation. */

  /* Start concatenating the HTML code. */
  strContent += "<table><tr><th>&nbsp;</th>";
  /* Set up top row */
  for(var i = 1;  i <= firstLoop; i++) {
  	strContent += "<th>" + int1 + "</th>";
  	int1++;
  }
  /* Set up side row. */
  for(var i = 1; i <= secondLoop; i++) {
  	strContent += "<tr>";
  	strContent += "<td>" + int3 + "</td>";
  	int3++;
  	int1 = parseInt($("#number1").val());
	/* Set up product row. */
  	for(var j = 1; j <= firstLoop; j++) {
  		product = holder * int1;
  		strContent += "<td>" + product + "</td>";
  		int1++;
  	}

  	holder++;
  	strContent += "</tr>";
  }

  strContent += "</table></div>";

  jQuery("#content").html(strContent);
}
