
const swiper = new Swiper('.swiper', {
    // Optional parameters
    slidesPerView: 6,
    slidesPerGroup: 6,
    spaceBetween: 10,
    speed: 300,
    loop: false,
  
    // Navigation arrows
    navigation: {
      nextEl: '.swiper-button-next',
      prevEl: '.swiper-button-prev',
    },
  
  });

const changeBg = () =>{
  let navbar = document.getElementById('navbar')
  let scrollValue = window.scrollY;
  if (scrollValue > 1){
    navbar.classList.add('on-scroll')
  }else{
    navbar.classList.remove('on-scroll')
  }
}

window.addEventListener('scroll',changeBg)

