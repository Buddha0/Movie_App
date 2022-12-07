const search = document.querySelector(".search");
const form = document.querySelector("form");
const container = document.querySelector(".container-max-width");

form.addEventListener("submit", function (e) {
  e.preventDefault();
  getmovies(search.value);
  search.value = "";
});

async function defaultData(){
  const response = await fetch(
    `https://www.omdbapi.com/?s=naruto&apikey=905918be&page=2`
  );
  let data = await response.json();
  container.innerHTML =  data.Search.map(function (datas) {
    return mapping(datas);
  }).join("");
}
defaultData()

async function getmovies(movie_name) {
  const response = await fetch(
    `https://www.omdbapi.com/?s=${movie_name}&apikey=905918be&page=2`
  );
  let data = await response.json();
 container.innerHTML =  data.Search.map(function (datas) {
    return mapping(datas);
  }).join("");
}

function mapping(datas) {

 return  `  <div class = "image-cards">
 <div class="img-container">
     <img class = "image"
         src="${datas.Poster}">
 </div>

 <div class="description">
     <h1>Title: ${datas.Title}</h1>
     <p>Year: ${datas.Year}</p>
 </div>
</div>`
}
