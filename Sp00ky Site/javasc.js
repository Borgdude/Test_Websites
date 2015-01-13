

function blink() {
  document.getElementById("flashing").style.color = "red";
  setTimeout("green()", 100);
}
function green() {
  document.getElementById("flashing").style.color = "green";
  setTimeout("blink()", 100);
}
