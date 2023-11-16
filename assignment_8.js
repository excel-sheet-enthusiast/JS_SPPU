let x = document.getElementById("myFocus").value;
x.addEventListener("focusin", myFocusEvent);
x.addEventListener("focusout", myBlurFunction);
function myFocusEvent() {
document.getElementById("myInput").style.backgroundColor = "yellow";
}
function myBlurFunction() {
document.getElementById("myInput").style.backgroundColor = "";
}