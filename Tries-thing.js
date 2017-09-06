var objectBlob = {
  classnumber: "f103",
  students: 18
};
//created an object that has 2 names//
var userInput = prompt("classnumber or students");
//asks the user to pick classnumber or students//
var lowerCase = userInput.toLowerCase();
//forced it to lowercase so the words aren't capt//
if ((lowerCase === "classnumber") || (lowerCase === "students")) {
   window.alert(objectBlob[lowerCase]);
}
else {
  for(i = 1; i < 3; i++) {
  //made a for loop for 3 tries//
   var userInput = prompt("classnumber or students.You have tried" + i + "times");
   var lowerCase = userInput.toLowerCase();
   if ((lowerCase === "classnumber") || (lowerCase === "students")) {
   i = 3;
   window.alert(objectBlob[lowerCase]);
  }
 }
}