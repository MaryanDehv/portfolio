function portfolioDeckEvents(){
   console.log('portfolio')
   const directions = document.querySelectorAll('.directions > div');

   directions.forEach(direction => {
      direction.addEventListener('click' , () => {
         const currentList = getCards();
         const getFirst = getCards()[0];
         const container = document.querySelector('.projects-list')
         container.appendChild(getFirst)
         currentList[0].setAttribute('class' ,  'project-card moveback');
         currentList[2].setAttribute('class' ,  'project-card shiftup');
         currentList[currentList.length - 1].setAttribute('class' , 'project-card lastshiftup');
      })
   })
}

function getCards(){
   return document.querySelectorAll('.project-card');
}

portfolioDeckEvents()