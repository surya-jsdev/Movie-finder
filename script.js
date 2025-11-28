const finder = document.getElementById("Finder");
const output = document.getElementById("output");
const API_KEY = "aeeb4bde";

function getUserInput() {
    const value = document.getElementById("movifinder").value.trim();
    if (!value) {
        alert("Please enter a movie name");
        return null;
    }
    return value;
}

finder.addEventListener("click", async function findmovie() {
    const movie = getUserInput();
    if (!movie) return;

    const url = `https://www.omdbapi.com/?apikey=${API_KEY}&t=${movie}`;

    try {
        const res = await fetch(url);
        const data = await res.json();

        if (data.Response === "False") {
            output.innerHTML = `<p>Movie not found</p>`;
            return;
        }

        output.innerHTML = `
            <img src="${data.Poster}" alt="${data.Title}">
       <strong>Movie Name:</strong><span>${data.Title}</span>
            <p>${data.Year}</p>
            <P>${data.Language}</p>
            <P>${data.imdbRating}</p>
        `;
    } catch (error) {
        alert("Failed to fetch");
    }
});
