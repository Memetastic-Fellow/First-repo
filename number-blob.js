function something() {
var A = document.getElementById('a').value;
var answerA = Math.pow(A,2);
var B = document.getElementById('b').value;
var answerB = Math.pow(B,2);
var lol = Math.sqrt(answerA + answerB);
document.getElementById('c').innerHTML = "C" + lol;
  }