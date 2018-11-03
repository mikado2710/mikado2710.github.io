// Removing Preloader 
$(function(){ 
    setTimeout(function(){
      $('#preloader').fadeOut('slow', function() {
        $(this).remove();
      });
     }, 1000);
});

// Sign In Modal Appearance on Click
document.getElementById('button').addEventListener("click", function() {
	document.querySelector('.bg-modal').style.display = "flex";
});

document.querySelector('.close').addEventListener("click", function() {
	document.querySelector('.bg-modal').style.display = "none";
});

// Form Validatoin
// Checking name if it has more than 3 letters
var userInput = document.querySelector("form > input").value;

document.getElementsByClassName("button").addEventListener("click", function(){
    if(userInput[0].length < 4){
        alert("Please enter a valid name");
    }
});

// Web Playground aka live editor
function update()
{
  var idoc = document.getElementById('iframe').contentWindow.document; //getting everything user writes inside editor
  idoc.open();
  idoc.write(editor.getValue());
  idoc.close();
}
function setupEditor() //Setting up and configuring editor using Ace.js
{
  window.editor = ace.edit("editor"); // The editor will use the div tag with id of "editor"
  editor.setTheme("ace/theme/monokai");// editor theme
  editor.getSession().setMode("ace/mode/html"); // Making edior in html mode
  editor.setValue(editor.getValue(),1); //1 = moves cursor to end

  editor.getSession().on('change', function() {
    update();
  }); //calling update function when sth is changed in editor
  editor.focus();
  editor.setOptions({ //Other boring options
    fontSize: "16pt",
    showLineNumbers: true,
    showGutter: true,
    vScrollBarAlwaysVisible:true,
    enableBasicAutocompletion: true, enableLiveAutocompletion: true
  });
  editor.setShowPrintMargin(false);
  editor.setBehavioursEnabled(true);
}
function ready(){
  setupEditor();
  update();
}

