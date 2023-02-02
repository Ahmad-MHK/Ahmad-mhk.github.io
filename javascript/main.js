window.addEventListener("scroll", e => {
    scrollPos = window.scrollY;

    if (scrollPos > 300) {
        document.getElementById("nav-target").style.position = "fixed";
        document.getElementById("nav-target").classList.add('scroll-nav');
        document.getElementById("back-to-top").style.display = "block";
      } else {
        document.getElementById("nav-target").style.position = "relative";
        document.getElementById("nav-target").classList.remove('scroll-nav');
        document.getElementById("back-to-top").style.display = "none";
      }
});

var acc = document.getElementsByClassName("blue-background");
var i;

for (i = 0; i < acc.length; i++) {
  acc[i].addEventListener("click", function() {
    this.classList.toggle("active");
    var panel = this.nextElementSibling;
    if (panel.style.display === "block") {
      panel.style.display = "none";
    } else {
      panel.style.display = "block";
    }
  });
}




