let best_movies_url = 'http://localhost:8000/api/v1/titles/?sort_by=-imdb_score'
let best_movies_url_2 = 'http://localhost:8000/api/v1/titles/?sort_by=-imdb_score&page=2'

async function fetchBestMovies() {
    let category_swipper_wrapper = document.getElementById('best-movies');
    Promise.all([
        fetch(best_movies_url),
        fetch(best_movies_url_2)
    ]).then(responses =>
        Promise.all(responses.map(response => response.json()))
    ).then(data => {
        let movies = ''
        data[0]['results'].forEach(result => {
            let id = result['id'];
            let img_url = result['image_url'];
            let img_alt = result['title'] + 'image';
            movies += `
                <div class="swiper-slide">
                    <div class="card best-movies-card">
                        <img src="${img_url}" alt="${img_alt}" id="${id}">
                    </div>
                </div>
            `
        })
        data[1]['results'].slice(0, 2).forEach(result => {
            let id = result['id'];
            let img_url = result['image_url'];
            let img_alt = result['title'] + 'image';
            movies += `
                <div class="swiper-slide">
                    <div class="card best-movies-card">
                        <img src="${img_url}" alt="${img_alt}" id="${id}">
                    </div>
                </div>
            `
        })
        category_swipper_wrapper.insertAdjacentHTML('beforeend', movies)
        let swiper = `.best-movies-swiper`
        let next = `.best-movies-next`
        let prev = `.best-movies-prev`
        let s = new Swiper(swiper, {
            // Optional parameters
            speed: 400,
            spaceBetween: 0,
            slidesPerView: 3.5,
            direction: 'horizontal',
            loop: true,
            // Navigation arrows
            navigation: {
                nextEl: next,
                prevEl: prev,
            },
        });
    }).catch(err =>
        console.log(err)
    );
}

fetchBestMovies();