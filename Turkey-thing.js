function addSomeThing() {
//create a new element and store it in a variable//
var newListThing = document.createElement('li');
//create a new text node and store it in a variable//
var newText = document.createTextNode('Turkey');
//attach the new text node to the element, there is no quote//
newListThing.appendChild(newText);
//find the new position where the new element should be added//
var position = document.getElementsByTagName('ul')[0];
//insert the new element into it's position//
position.appendChild(newListThing);
  }