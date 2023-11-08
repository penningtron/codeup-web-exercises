

const sayHelloBtns = document.querySelector('.hello')
sayHelloBtns.addEventListener('click', event =>{

    for(let sayHelloBtn of sayHelloBtns){
        sayHelloBtn.addEventListener("click" , (event));
    }


    const name = event.target.getAttribute("data-name");

    alert(`Hello, ${name}!`);


});

//keyboard event

document.body.addEventListener('keydown', e=>{


    if(e.key === "."){
        alert("pressed the . key");
        document.body.removeEventListener("keydown", handlePeriodKey)

    }

    console.log(e);


});

// if undefined the selector is wrong