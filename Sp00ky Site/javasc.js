function blink() {
  document.getElementById("flashing").style.color = "gray";
  setTimeout("green()", 100);
}
function green() {
  document.getElementById("flashing").style.color = "black";
  setTimeout("blink()", 100);
}
