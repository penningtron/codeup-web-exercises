export const getPokemon = (id) => {
    const url = `https://pokeapi.co/api/v2/pokemon/${id}`;
    const options = {
        method: "GET",
        headers: {
            "content-type" : "application/json",
        },
    };
    return fetch(url, options)
        .then(response=>response.json())
        .catch(error => console.log(error))
}

export const getPokemonAll = async (limit = 10, offset = 0) => {  // we set the limit to 10 as default unless an argument is given
    const url = `https://pokeapi.co/api/v2/pokemon?limit=${limit}&offset=${offset}`;
    const options = {
        method: "GET",
        headers: {
            "content-type" : "application/json",
        },
    };
    try {
        const response = await fetch(url, options);
        let list = await response.json();
        const pokemon = await Promise.all(list.results.map((item) => getPokemon(item.name)));
        list.results = pokemon;
        return list;
    } catch (error) {
        return error;
    }
};