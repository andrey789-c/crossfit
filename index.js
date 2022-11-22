var swiper = new Swiper(".swiper", {
    loop: true,
    pagination: {
      el: ".swiper-pagination",
      type: 'bullets',
    },
    autoplay: {
      delay: 3000,
    },
});

var reviewSwiper = new Swiper(".review__swiper", {
  slidesPerView: window.innerWidth > 768 ? 3 : 2,
  spaceBetween: 21,
  slidesPerGroup: window.innerWidth > 768 ? 3 : 2,
  pagination: {
    el: ".swiper-pagination",
    type: 'bullets',
  },
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },
});
window.addEventListener('resize', e=> {
  if(window.innerWidth > 1800) {
    reviewSwiper.params.slidesPerView = 4
    reviewSwiper.params.slidesPerGroup = 4
  }
  else if(window.innerWidth > 768) {
    reviewSwiper.params.slidesPerView = 3
    reviewSwiper.params.slidesPerGroup = 3
    reviewSwiper.params.spaceBetween = 21
  } else if(window.innerWidth > 550) {
    reviewSwiper.params.slidesPerView = 2
    reviewSwiper.params.slidesPerGroup = 2
    reviewSwiper.params.spaceBetween = 10
  } else {
    reviewSwiper.params.slidesPerView = 1
    reviewSwiper.params.slidesPerGroup = 1
    reviewSwiper.params.spaceBetween = 0
  }
})


document.querySelector('#next').addEventListener('click', e => {
  e.target.innerHTML = ''
  document.querySelector('.about__next').style.display = 'inline-block'
})

document.querySelector('#prev').addEventListener('click', e => {
  document.querySelector('#next').innerHTML = 'далее'
  document.querySelector('.about__next').style.display = 'none'
})