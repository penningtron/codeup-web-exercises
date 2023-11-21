//MAIN

import { keys} from "./keys.js";

const lastCommitDate = async (username) => {
    const url = `https://api.github.com/users/${username}/events`;
    const options = {
        method: "GET",
        headers: {
            "content-type" : "application/json",
            "Authorization" : `Bearer ${keys.github}`
        },
    };

    return fetch(url, options)
        .then(response=>response.json())
        .catch(error => console.log(error))
}



(async ()=>{

    const events = await lastCommitDate("penningtron");

    console.log(events[0])




})();