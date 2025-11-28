const finder = document.getElementById("Finder");
const output = document.getElementById("output");

function getUserInput() {
    const value = document.getElementById("movifinder").value.trim();
    if (!value) {
        alert("Please enter a movie name");
        return null;
    }
    return value;
}

finder.addEventListener("click", async function () {
    const movie = getUserInput();
    if (!movie) return;
    const url = `https://www.omdbapi.com/?apikey=aeeb4bde&t=${movie}&plot=short`;
    try {
        const res = await fetch(url);
        const data = await res.json();
        if (data.Response === "False") {
            output.innerHTML = `<p>Movie not found</p>`;
            return;
        }
        output.innerHTML = `
        <div class="movieresult">
        <img src="${data.Poster}" alt="${data.Title}">
        <p><strong>Movie Name:</strong>${data.Title}</p>
        <p> <strong>imdb:</strong> ${data.Actors}</p>
        <p> <strong>Realsed Year:</strong>${data.Released}</p>
        <p> <strong>language:</strong>${data.Language}</p>
        <p> <strong>imdb:</strong> ⭐ ${data.imdbRating}</p>
            </div>
        `;

    } catch (error) {
        alert("Failed to fetch");
    }
});

