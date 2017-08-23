function calculateArea(width,height) {
//this function exist but it's undefined because i didn't call it yet//
var area = width * height

return area;

}
var tall= prompt("height");

var wide= prompt("width");

var wallOne = calculateArea(wide,tall);
//3 and 5 match with the width and height//
window.alert(wallOne);