  function userName() {
    var userName = prompt("Please enter your name", "<Name goes here>");

    if (userName != null) {
    document.getElementById('welcome').innerHTML = "Hello " + userName + "! How are you today?";
  }
}
  function createParagraph() {
    var para = document.getElementById('loremDiv').innerHTML = 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.'
  }
var myImage = document.querySelector('img');

myImage.onclick = function() {
    var mySrc = myImage.getAttribute('src');
    if(mySrc === 'lorem1.jpg') {
      myImage.setAttribute ('src','lorem2.jpg');
    } else {
      myImage.setAttribute ('src','lorem1.jpg');
    }
}
function howMany(selectObject) {
  var numberSelected = 0;
  for (var i = 0; i < selectObject.options.length; i++) {
    if (selectObject.options[i].selected) {
      numberSelected++;
    }
  }
  return numberSelected;
}

var btn = document.getElementById('btn');
btn.addEventListener('click', function() {
  alert('Number of options selected: ' + howMany(document.selectForm.loremTypes));
});
