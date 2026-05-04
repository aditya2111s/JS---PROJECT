const input = document.querySelector("input");
const search = document.querySelector(".search");
const movieName = document.querySelector(".movie");

const movieRating = document.querySelector(".movie-rating");
const moviePlot = document.querySelector(".movie-plot");
const errorEl = document.querySelector(".error");

search.addEventListener("click", async () => {
  const name = input.value.trim();

  if (!name) return;

  try {
    const data = await fetchMovieData(name);

    showMovieData(data);
  } catch (error) {
    showError();
  }
});

async function fetchMovieData(name) {
  const url = `https://www.omdbapi.com/?t=${name}&apikey=2efe4b0`;

  const response = await fetch(url);

  console.log(typeof response);
  console.log("RESPONSE", response);

  if (!response.ok) {
    throw new Error("Movie not found ");
  }

  const data = await response.json();
  return data;
}
function showMovieData(data) {
  console.log(data);
  const { Title, imdbRating, Plot } = data;
  movieName.textContent = Title;
  movieRating.textContent = `${imdbRating}/10`;
  moviePlot.textContent = `Movie plot: ${Plot}`;
  // display option
  movieRating.classList.remove("hidden");
  moviePlot.classList.remove("hidden");
  errorEl.classList.add("hidden");
}

function showError() {
  movieRating.classList.add("hidden");
  moviePlot.classList.add("hidden");
  errorEl.classList.remove("hidden");
}
