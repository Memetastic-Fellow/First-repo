var objectBlob = {
  classnumber: "f103",
  students: 18
};
var userInput = prompt("classnumber or students");
var lowerCase = userInput.toLowerCase();

if ((lowerCase === "classnumber") || (lowerCase === "students")) {
   window.alert(objectBlob[lowerCase]);
}
else {
askAgain();
}

function askAgain() {
   var userInput = prompt("classnumber or students");
   var lowerCase = userInput.toLowerCase();
if ((lowerCase === "classnumber") || (lowerCase === "students")) {
   window.alert(objectBlob[lowerCase]);
 }
else {
askAgain();
 }
}