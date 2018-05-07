var acc = document.getElementById('accordian');
var i;
console.log('index');
window.onload = function() {
     if (acc) {
          acc.addEventListener("click", function() {
                   console.log('clicked');
                  this.classList.toggle("active");
                  var panel = this.getElementById('panel');
                  if (panel.style.display === "block") {
                      panel.style.display = "none";
                  } else {
                      panel.style.display = "block";
                  }
          });
     }
}
