const swipers = document.querySelectorAll(".swiper");
swipers.forEach((item) => {
    let prev = item.querySelector(".swiper-button-prev");
    let next = item.querySelector(".swiper-button-next");
    item.addEventListener("mouseover", (e) => {
        prev.style.opacity = 1;
        next.style.opacity = 1;
    });
    item.addEventListener("mouseout", (e) => {
        prev.style.opacity = 0;
        next.style.opacity = 0;
    });
});