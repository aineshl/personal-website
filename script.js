var mybutton = document.getElementById("scrollToTopBtn");

window.onscroll = function() {
    if (document.body.scrollTop > 100 || document.documentElement.scrollTop > 100) {
        mybutton.style.display = "block";
    } else {
        mybutton.style.display = "none";
    }
};

mybutton.onclick = function() {
    window.scrollTo({top: 0, behavior: 'smooth'});
};
window.onload = function () {
    if (window.innerWidth < 768) { // Check screen width
        document.getElementById("mobile-warning").style.display = "block";
    }
};