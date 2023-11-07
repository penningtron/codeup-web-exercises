(() => {

    const timer = (time) =>{
        setTimeout(() => {


        },time);
    }

    const profilePic = document.querySelector("#profile-card img")

    const profileName = document.querySelector("#profile-card h2")



    setTimeout(() => {
        if (profilePic.getAttribute("src")=== "https://via.placeholder.com/150"){
            profilePic.setAttribute("src", "./img/powderedtoastman.jpg");
            profilePic.setAttribute("alt", "powdered toast man");


        }
        },2000);

    setTimeout(() => {
        profileName.innerText="Powdered Toast Man";


    },4000);


    const profileDesc = document.querySelector("#profile-desc")
    setTimeout(() => {
        profileDesc.classList.add("descMod");
        }, 6000);


    const profileCard = document.querySelector("#profile-card")
    setInterval(() => {
        profileCard.classList.toggle("background-color")


    }, 2000);














})();