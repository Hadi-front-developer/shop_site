//--- NAV ---\\

const toggleBtn = document.getElementById('toggle-btn')
const show_menu = document.getElementById('show_menu')
const menu = ` <img width="20" height="20" src="https://img.icons8.com/ios-filled/50/menu--v1.png" alt="menu--v1"/>


`
const close_img = ` <img width="20" height="20" src="https://img.icons8.com/ios-glyphs/30/delete-sign.png" alt="delete-sign"/>
`


toggleBtn.addEventListener('click', () => {
     toggleBtn.classList.toggle('menu')

     if (isDarkModeEnable()) {

          toggleBtn.innerHTML = close_img
          show_menu.style.display ='block'
          show_menu.style.left = '-1px'

     }else{
          toggleBtn.innerHTML = menu
          show_menu.classList.display = 'none'
          show_menu.style.left = '350px'
     }
})


function isDarkModeEnable(params) {
     return toggleBtn.classList.contains('menu')
     
}

//----- SWIPER -----\\

var swiper = new Swiper(".mySwiper", {
    spaceBetween: 30,
    effect: "fade",
    loop: true,
    centeredSlides: true,
    autoplay: {
        delay: 3000,
        disableOnInteraction: false,
    },
    pagination: {
        el: ".swiper-pagination",
        clickable: true,
    }
});

