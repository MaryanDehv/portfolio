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
const developer = 'developer';
const frontend = 'frontend';

function writeAnimation(i , target , container , delay){
   const arr = target.split('');
   (function write(){
      setTimeout(() => {
         container.innerHTML += arr[i]
         i++
         if(i < arr.length){
            writeAnimation(i , target , container , delay)
         } else {
            return
         }
      } , delay)
   })()
}


writeAnimation(0 , 'console.log("hello world")', document.querySelector('.console-message') , 250)
writeAnimation(0 , 'developer' , document.querySelector('.developer') , 200)
writeAnimation(0 , 'frontend' , document.querySelector('.frontend') , 200)



 // portfolio deck
 function portfolioDeckEvents(){
    const directions = document.querySelectorAll('.directions > div');

    directions.forEach((direction) => {            
         direction.addEventListener('click' , (el) => {
            console.log('clicked ')
            const getCards = document.querySelectorAll('.project-card');
            const cardsParent = document.querySelector('.projects-list');
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