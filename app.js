function portfolioDeckEvents(){
   console.log('portfolio')
   const directions = document.querySelectorAll('.directions > div');
   let animationStop;

   directions.forEach(direction => {
      direction.addEventListener('click' , (el) => {
         resetMoveClasses()
         const container = document.querySelector('.projects-list');
         if(el.target.classList.contains('next')){
            getCards()[0].classList.add('moveback')
            getCards()[1].classList.add('shiftup')
            getCards()[getCards().length - 1].classList.add('lastshiftup')
            container.appendChild(getCards()[0])
         } else if(el.target.classList.contains('prev')){
            getCards()[0].classList.add('shiftup' , 'reverse')
            getCards()[1].classList.add('lastshiftup' , 'reverse')
            getCards()[getCards().length - 1].classList.add('moveback' , 'reverse')
            container.insertBefore(getCards()[getCards().length - 1] , getCards()[0])
         }
      })
   })
}

function getCards(){
   return document.querySelectorAll('.project-card');
}

function resetMoveClasses(){
   getCards().forEach(card => card.setAttribute('class' ,  'project-card'));
}

portfolioDeckEvents()