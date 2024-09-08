//--- NAV ---\\

const toggleBtn = document.getElementById('toggle-btn')
const ul = document.querySelector('ul')
const menu = ` <img width="20" height="20" src="https://img.icons8.com/ios-filled/50/menu--v1.png" alt="menu--v1"/>


`
const close_img = ` <img width="20" height="20" src="https://img.icons8.com/ios-glyphs/30/delete-sign.png" alt="delete-sign"/>
`


toggleBtn.addEventListener('click', () => {
     toggleBtn.classList.toggle('menu')

     if (isDarkModeEnable()) {

          toggleBtn.innerHTML = close_img
          ul.classList.add('top-[110px]')
          ul.classList.add('opacity-100')

     }else{
          toggleBtn.innerHTML = menu
          ul.classList.remove('opacity-100')
     }
})


function isDarkModeEnable(params) {
     return toggleBtn.classList.contains('menu')
     
}

//----- SWIPER -----\\

var swiper = new Swiper(".mySwiper", {
    spaceBetween: 30,
    loop: true,
    centeredSlides: true,
    autoplay: {
        delay: 5000,
        disableOnInteraction: false,
    },
    pagination: {
        el: ".swiper-pagination",
        clickable: true,
    }
});

var swiper = new Swiper(".ndSwiper", {
     slidesPerView: 2,
     spaceBetween: 30,
     loop: true,
     // centeredSlides: true,
     autoplay: {
          delay: 3000,
          disableOnInteraction: false,
     },
     breakpoints: {
          '620' : {
               slidesPerView: 3,
          },
          '820' : {
               slidesPerView: 4,
          },
     },
});

// clock if wonder

setInterval(() => {

     let date = new Date();
     let h = date.getHours();
     let m = date.getMinutes();
     let s = date.getSeconds();s
     h = h < 10 ? '0' + h : h;
     m = m < 10 ? '0' + m : m;
     s = s < 10 ? '0' + s : s;

     document.getElementById('hor').innerHTML = h;
     document.getElementById('min').innerHTML = m;
     document.getElementById('sec').innerHTML = s;

}, 1000);



