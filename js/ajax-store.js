const getTools = () => {

    const url = "../data/inventory.json";
    const options = {
        method: "GET",
        headers: {
            "Content-Type": "application/json",
        }
    }
    return fetch(url, options)
        .then(response=>response.json())
        .then()

}

const toolCatBadges = (categories) => {
    for (let cat of categories){


    }

}

const renderToolElement = (tools) => {

    let formatMoney = tools.price.toLocaleString("en-US", {style:"currency", currency:"USD"});
    const toolElement = document.createElement("tr");
    console.log(tools.categories)
    toolElement.innerHTML = `

        <td >${tools.title}</td>
        <td >${tools.quantity}</td>
        <td >
            <div class="d-flex gap-1 p-2">
                ${tools.categories.map(category=>{
                    return `<span class="badge text-bg-primary">${category}</span>`
                }).join("")}
            </div>
        </td>
     
        <td >${formatMoney} </td>
        `;

    const toolBox = document.querySelector(`.toolBox`);
    toolBox.appendChild(toolElement)



}


//MAIN
(async ()=>{

    const tools = await getTools();
    console.log(tools);

    for (let tool of tools){
        renderToolElement(tool)


    }






})();