
    const Bean = document.getElementsByClassName('coffeeBean');
    const nav = document.getElementsByClassName('nav-item');

   
    const brownBean = new Image();
    brownBean.src = 'images/coffeeBean-brown.png';

   
    const whiteBean = new Image();
    whiteBean.src = 'images/coffeeBean-white.png';

    
    if (Bean.length > 0) {
        
        console.log("Bean is Brown");
        
        Bean[0].src = brownBean.src;
    } else {
        
        console.log("Bean is White");
     
}

const boxLeft = document.querySelectorAll(".box-left");

window.addEventListener("scroll", () => {
    const innerHeightOfWindow = window.innerHeight;

    boxLeft.forEach(box => {
        // Get the position of the box relative to the viewport
        const boxPosition = box.getBoundingClientRect().top;

        // If the box is within the viewport, add the "show" class
        if (boxPosition < innerHeightOfWindow) {
            box.classList.add("show");
        } else {
            box.classList.remove("show");
        }
    });
});

const boxRight = document.querySelectorAll(".box-right");

window.addEventListener("scroll", () => {
    const innerHeightOfWindow = window.innerHeight;

    boxRight.forEach(box => {
        // Get the position of the box relative to the viewport
        const boxPosition = box.getBoundingClientRect().top;

        // If the box is within the viewport, add the "show" class
        if (boxPosition < innerHeightOfWindow) {
            box.classList.add("show");
        } else {
            box.classList.remove("show");
        }
    });
});
function myFunction() {
    var x = document.getElementById("navbar");
    if (x.style.display === "block") {
        x.style.display = "none";
    } else {
        x.style.display = "block";
    }

}
function mobileMenu() {
    if (document.GetElementById('mobileMenu').style.display == 'block') {
        document.GetElementById('mobileMenu').style.display == 'none';
    } else {
        document.GetElementById('mobileMenu').style.display == 'block';
    }

}
window.onload = function () {

    if (document.querySelector('#navbar').classList.contains('is-open')) {

        document.querySelector('#navbar').classList.remove('is-open');

    }

};


