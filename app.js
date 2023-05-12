function mobileNav(){
    const navIcon = document.querySelectorAll(".nav-icons div");
    const navParent = document.querySelector('[data-mobile-nav]');
    navIcon.forEach(icon => {
        icon.addEventListener('click' , (el) => {
            navParent.setAttribute('data-mobile-nav' , navParent.getAttribute('data-mobile-nav') == 'true' ? !true : !false)
        })
    })
}

mobileNav()