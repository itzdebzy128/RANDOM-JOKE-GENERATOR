async function getJoke() {
    const setupElem = document.getElementById('setup');
    const punchlineElem = document.getElementById('punchline');

    setupElem.textContent = "Loading...";
    punchlineElem.textContent = "";

    try {
        const response = await fetch("https://official-joke-api.appspot.com/random_joke");
        const joke = await response.json();

        setupElem.textContent = joke.setup;
        punchlineElem.textContent = joke.punchline;
    } catch (error) {
        setupElem.textContent = "Oops! couldn't fetch a joke.";
        punchlineElem.textContent = "";
    }
}