let buttonBurger = document.querySelector(".header-hamburger");
let cancelButton = document.querySelector(".button-cancel");
let siteHeader = document.querySelector(".site-header");
console.log(buttonBurger);

buttonBurger.addEventListener("click", function(evt){
    evt.preventDefault();


    siteHeader.classList.toggle("header-active");
    
    
})
cancelButton.addEventListener("click", function(evt){
    evt.preventDefault();


    siteHeader.classList.remove("header-active");
    
})

// let hi = alert("Ogohlantiramiz, website test rejimida ishlamoqda !");