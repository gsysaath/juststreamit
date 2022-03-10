// Get the modal
const modal = document.getElementById("myModal");

// Get the model content
const modal_img = document.querySelector(".modal-img");
const modal_title = document.querySelector(".modal-title");
const modal_genre = document.querySelector(".modal-genre");
const modal_release_date = document.querySelector(".modal-release-date");
const modal_rating = document.querySelector(".modal-rating");
const modal_imdb_score = document.querySelector(".modal-imdb-score");
const modal_directors = document.querySelector(".modal-directors");
const modal_actors = document.querySelector(".modal-actors");
const modal_duration = document.querySelector(".modal-duration");
const modal_country = document.querySelector(".modal-country");
const modal_worldwide_income = document.querySelector(".modal-worldwide-income");
const modal_description = document.querySelector(".modal-description");

// Get the <span> element that closes the modal
const close_modal_btn = document.querySelector(".close");

// When the user clicks on the button, open the modal

// When the user clicks on <span> (x), close the modal
close_modal_btn.addEventListener('click', () => {
    modal.style.display = "none";
})

// When the user clicks anywhere outside of the modal, close it
window.addEventListener('click', e => {
    if (e.target == modal) {
        modal.style.display = "none";
    }
})

// only vedette button modal

const vedette_btn = document.querySelector('.vedette-movie-button');

vedette_btn.addEventListener('click', e => {
    e.preventDefault();
    let movie_id = e.target.id;
    fetch('http://localhost:8000/api/v1/titles/' + movie_id)
        .then(response => {
            return response.json();
        })
        .then(data => {
            modal_img.src = data["image_url"]
            modal_img.alt = data["title"] + ' image';
            modal_title.innerText = 'Title: ' + data["title"];
            modal_genre.innerText = 'Genres: ' + data["genres"].join(', ');
            modal_release_date.innerText = 'Release date: ' + data["date_published"];
            modal_rating.innerText = 'Rating: ' + data['avg_vote'];
            modal_imdb_score.innerText = 'Imdb Score: ' + data['imdb_score'];
            modal_directors.innerText = 'Directors: ' + data['directors'].join(', ');
            modal_actors.innerText = 'Actors: ' + data["actors"].join(', ');
            modal_duration.innerText = 'Duration: ' + data['duration'] + 'min';
            modal_country.innerText = 'Countries: ' + data['countries'].join(', ');
            modal_worldwide_income.innerText = 'Worldwide income: ' + data['worldwide_gross_income'] + 'USD';
            modal_description.innerText = 'Description: \n' + data['long_description'];
            modal.style.display = "block";
        })
})

window.addEventListener("keyup", e => {
    if (e.key == "Escape") {
        modal.style.display = "none";
    }
})

let movies_images = []

function swiperSlideModal() {
    let movies_images = document.querySelectorAll('.swiper-slide img');
    movies_images.forEach(movie_image => {
        movie_image.addEventListener('click', e => {
            e.preventDefault();

            let movie_id = e.target.id;
            fetch('http://localhost:8000/api/v1/titles/' + movie_id)
                .then(response => {
                    return response.json();
                })
                .then(data => {
                    modal_img.src = data["image_url"]
                    modal_img.alt = data["title"] + ' image';
                    modal_title.innerText = 'Title: ' + data["title"];
                    modal_genre.innerText = 'Genres: ' + data["genres"].join(', ');
                    modal_release_date.innerText = 'Release date: ' + data["date_published"];
                    modal_rating.innerText = 'Rating: ' + data['avg_vote'];
                    modal_imdb_score.innerText = 'Imdb Score: ' + data['imdb_score'];
                    modal_directors.innerText = 'Directors: ' + data['directors'].join(', ');
                    modal_actors.innerText = 'Actors: ' + data["actors"].join(', ');
                    modal_duration.innerText = 'Duration: ' + data['duration'] + 'min';
                    modal_country.innerText = 'Countries: ' + data['countries'].join(', ');
                    modal_worldwide_income.innerText = 'Worldwide income: ' + data['worldwide_gross_income'] + 'USD';
                    modal_description.innerText = 'Description: \n' + data['long_description'];
                    modal.style.display = "block";
                })
        })
    })
}
