let url = 'http://localhost:8000/api/v1/titles/?sort_by=-imdb_score'
const vedette_movie_title = document.getElementById('vedette-movie-title');
const vedette_movie_description = document.getElementById('vedette-movie-description');
const vedette_movie_image = document.getElementById('vedette-movie-image');
const vedette_movie_button = document.querySelector('.vedette-movie-button');

let result = fetch(url)
    .then(response => {
        return response.json();
    })
    .then(data => {
        const vedette_movie_url = data["results"][0]["url"];
        return fetch(vedette_movie_url)
    })
    .then(response => {
        return response.json();
    })
    .then(data => {
        vedette_movie_title.innerText = data["title"];
        vedette_movie_description.innerText = data["description"];
        vedette_movie_image.src = data["image_url"];
        vedette_movie_button.id = data["id"].toString();
    })
    .catch(error => {
        console.log('Request Failed', error);
    })
