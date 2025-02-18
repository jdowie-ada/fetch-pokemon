const test_url = 'https://pokeapi.co/api/v2/pokemon?limit=5';
document.getElementById('fetchPokemon').addEventListener('click', () => fetchData(test_url));

async function fetchData(url) {
    try {
        const response = await fetch(url);

        const data = await response.json(); // Parse the response as JSON
        console.log("Here is the raw fetched data", data); // Handle the data

        const pokeList = document.getElementById("poke-list");
        const {results: fetchedPokemon} = data;

        fetchedPokemon.forEach(element => {
            pokeList.innerHTML += `<p>${element.name}</p>`;
        });
    } catch (error) {
        console.error('Error:', error); // Handle any errors
    }
}
