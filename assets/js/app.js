var header = document.getElementById('header');
var headerHeight = header.clientHeight;
var mobileMenu = $('.mobile-menu-btn');

// Open and close mobile menu

mobileMenu.addEventListener("click", function() {
    var isClosed = header.clientHeight;

    if (isClosed === headerHeight) {
        header.style.height = "auto";
    }else {
        header.style.height = null;
    }


})


// Auto close menu when click <a></a>
var menuItems = $$('#nav li a[href*="#"]');

menuItems.forEach(menuItem => {
    menuItem.addEventListener("click", function(event) {

        var isParentMenu = this.nextElementSibling &&
        this.nextElementSibling.classList.contains('subnav');

        if (isParentMenu) {
            event.preventDefault();
        } else {
            header.style.height = null;
        }
    })
});


// Open and close modal 

var modal = $('.modal');
var modalContainer = $('.modal-container');
var closeBtn = $('.modal-close');
var buyTickets = $$('.js-buy-ticket');

// Open modal
buyTickets.forEach(buyTicket => {
    buyTicket.addEventListener("click", () => {
        modal.style.display = "flex";
    })    
})

// Close modal
closeBtn.addEventListener("click", () => {
    modal.style.display = "none";
})

// Close modal when click out modal c1
modal.addEventListener("click", (event) => {
    if (event.target === modal) {
        modal.style.display = "none";
    }
})

// Close modal when click out modal c2
// modal.addEventListener("click", () => {
//     modal.style.display = "none";
// })

// modalContainer.addEventListener("click", (event) => {
//     event.stopPropagation();
// })