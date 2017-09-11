function deathNote() {
  var death = Math.floor(Math.random() * 4);
  document.getElementsByClassName('stem')[death].innerHTML = "<img src ='http://media.vocativ.com/photos/2016/06/2016_06_30-Death-dankmeme-ILL_homepage-3-21573061282.png' width = '80%'>";
}