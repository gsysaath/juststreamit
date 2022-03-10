let category_url = 'http://localhost:8000/api/v1/titles/?sort_by=-imdb_score&genre_contains='
let category_url_page2 = 'http://localhost:8000/api/v1/titles/?page=2&sort_by=-imdb_score&genre_contains='


async function fetchCategoryMovies(category_name) {
    let category_swipper_wrapper = document.getElementById(category_name);
    Promise.all([
        fetch(category_url + category_name),
        fetch(category_url_page2 + category_name)
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
                    <div class="card ${category_name}-card">
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
                    <div class="card ${category_name}-card">
                        <img src="${img_url}" alt="${img_alt}" id="${id}">
                    </div>
                </div>
            `
        })
        category_swipper_wrapper.insertAdjacentHTML('beforeend', movies)
        let swiper = `.${category_name}-swiper`
        let next = `.${category_name}-next`
        let prev = `.${category_name}-prev`
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
    ).then(data => {
        swiperSlideModal();
    })
}


fetchCategoryMovies('comedy');
fetchCategoryMovies('horror');
fetchCategoryMovies('drama');
