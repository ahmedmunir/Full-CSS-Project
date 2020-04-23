var backdrop = document.querySelector(".backDropWindow");
var modalPopup = document.querySelector(".modal");
var selectPlanButtons = document.querySelectorAll(".plan button");
var modalActionNegative = document.querySelector(".modal_action_negative");
var mobileNavBarToggle = document.querySelector(".toggle-nav-bar");
var navBarMobileItems = document.querySelector(".nav_bar_mobile_items");

for(var i = 0; i < selectPlanButtons.length; i++) {
    selectPlanButtons[i].addEventListener("click", function(){
        // backdrop.style.display = "block";
        // modalPopup.style.display = "block";
        backdrop.classList.add("open");
        modalPopup.classList.add("open");
    })
}

mobileNavBarToggle.addEventListener("click", function(){
    // navBarMobileItems.style.display = "block";
    // backdrop.style.display = "block";
    navBarMobileItems.classList.add("open");
    backdrop.classList.add("open");
})

backdrop.addEventListener("click", function(){
    // navBarMobileItems.style.display = "none";
    navBarMobileItems.classList.remove("open");
    closemodal();
});

if (modalActionNegative) {
    modalActionNegative.addEventListener("click", closemodal);
}


// function to close the modal popup when clicking on No or empty space
function closemodal(){
    // backdrop.style.display = "none";
    // modalPopup.style.display = "none";
    backdrop.classList.remove("open");
    if(modalPopup) {
        modalPopup.classList.remove("open");
    }
    
}