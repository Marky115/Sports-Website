const hamburger = document.querySelector(".hamburger");
const navMenu = document.querySelector(".nav-menu");

hamburger.addEventListener("click", () =>{
    hamburger.classList.toggle("active");
    navMenu.classList.toggle("active");

     // Update aria-expanded based on the active state
     hamburger.setAttribute('aria-expanded', isActive.toString());
})

// close the hamburger menu without clicking on the hamburger menu for small screens 
document.addEventListener('click', (e) => {
    if (!hamburger.contains(e.target) && !navMenu.contains(e.target) && navMenu.classList.contains('active')) {
        navMenu.classList.remove('active');
        hamburger.classList.remove('active');
        hamburger.setAttribute('aria-expanded', 'false');
    }
});

// make hamburger focusable and responds to keyboard events
hamburger.setAttribute('tabindex', '0');
hamburger.addEventListener('keypress', (e) => {
    if (e.key === 'Enter' || e.key === ' ') {
        hamburger.click();
    }
});