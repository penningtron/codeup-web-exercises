const addBtn = document.querySelector('#addBox');

//The correct way
const boxContainer = document.querySelector('#boxes');


addBtn.addEventListener("click" , (e) => {
   const box = document.createElement('div');
   box.classList.add('box');
   box.addEventListener('click' , e => {
      box.remove();
   })
   boxContainer.appendChild(box);




});



