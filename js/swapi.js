const getPerson = (id = 1) => {   // we set it equal to 1 as a default.
    const url = `https://swapi.dev/api/people/${id}`;
    const options = {
        method: "GET",
        headers: {
            "Content-Type" : "application/json"
        }
    }
   return  fetch(url, options)
        .then(response => {
            return response.json();
        })
        .then(person => {
            return (person)

        })

        .catch(error => {
            return (error);
        })

};

const getFilm = (id) => {
    const url = person.films[0];
    const options = {
        method: "GET",
        headers: {
            "content-type" : "application/json",
        },
    };
    return fetch(url, options)
        .then((response)=> response.json())
        .then((film) => {
            return film;
        })
        .catch(error=>error);
}



(() => {
    getPerson(2).then(person => {
        console.log(person)
        const url = person.films[0];  // get the first film they were in
        const  options = {
            method: "GET",
            headers:  {
                "content-type": "application/json",
            },
        };
        fetch(url, options)
            .then(response=>response.json())
            .then(film=> {
                console.log(film);
            })

     });




})();

