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


 // portfolio deck
 function portfolioDeckEvents(){
    const directions = document.querySelectorAll('.directions > div');

    directions.forEach((direction) => {            
         direction.addEventListener('click' , (el) => {
            console.log('clicked ')
            const getCards = document.querySelectorAll('.project-card');
            const cardsParent = document.querySelector('.projects-container');
            console.log(el.currentTarget)
             if(el.currentTarget.classList.contains('next')){
                addClasses(getCards , cardsParent)
                cardsParent.insertBefore(getCards[0], document.querySelector('directions'));
             } else if(el.currentTarget.classList.contains('prev')){
                cardsParent.insertBefore(getCards[getCards.length - 1], getCards[0])
                addClasses(getCards)
             }
         })
     })

     function addClasses(element){
        element[0].setAttribute('class' ,  'project-card last moveback');
        element[1].setAttribute('class' ,  'project-card shiftup');
        element[2].setAttribute('class' , 'project-card second lastshiftup');
     }
  }

  portfolioDeckEvents()