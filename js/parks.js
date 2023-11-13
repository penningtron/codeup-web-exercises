const actionBtn = document.getElementById("action-btn")
const natlParkUl = document.querySelectorAll(".national-park");
const parkBlockHeader = document.querySelectorAll("h3");
const listItem = document.querySelectorAll("li");
actionBtn.addEventListener('click' , (e) => {

    for (let li of natlParkUl){
        li.lastElementChild.style.backgroundColor = 'green';
    }

})

parkBlockHeader.addEventListener('click' , (e) => {
   const innerLi =  parkBlockHeader.nextElementSibling.children

    for (let i = 0; i < innerLi.length; i++){
        innerLi[i].style.fontWeight = "bold";

    }

})

listItem.addEventListener('click' , (e) => {
    this.parentElement.firstElementChild.style.backgroundColor = "blue";

})



