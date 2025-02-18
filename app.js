const test_url = 'https://pokeapi.co/api/v2/pokemon/1';
document.getElementById('fetchPokemon').addEventListener('click', () => fetchData(test_url));


async function fetchData(url) {
    try {
        const response = await fetch(url);
        const data = await response.json(); // Parse the response as JSON
        console.log(data); // Handle the data
    } catch (error) {
        console.error('Error:', error); // Handle any errors
    }
}
