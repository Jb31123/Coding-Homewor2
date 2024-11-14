var listItems = document.getElementsByTagName('li'); // All <li> elements

// ADD NUMBER OF ITEMS IN THE LIST TO THE HEADING
var heading = document.querySelector('h2'); // h2 element
var headingText = heading.firstChild.nodeValue; // h2 text
var totalItems = listItems.length; // No. of <li> elements
var newHeading = headingText + '<span>' + totalItems + '</span>'; // Content

/* WRITE YOUR CODE BELOW */

// Part1: Use the listItems object to iterate through the elements of the list
// for (var i = 0; i < listItems.length; i++) {
 //   var item = listItems[i];
 //   item.className = 'cool'; // Adding a 'cool' class to each list item
//}
// Part2: Use the heading and newHeading to show the number of items in the shopping list
//heading.innerHTML = newHeading;




