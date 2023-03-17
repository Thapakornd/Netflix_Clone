
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

const menuClick = (menu,nav) =>{
  let menuBar = document.getElementById(menu),
      navbar = document.querySelector(nav)
  menuBar.addEventListener('click', () => {
    navbar.classList.toggle('active')
  })

  window.onscroll = () =>{
    navbar.classList.remove('active')
  }
}

const changeBg = () =>{
  let navbar = document.getElementById('navbar')
  let scrollValue = window.scrollY;
  if (scrollValue > 1){
    navbar.classList.add('on-scroll')
  }else{
    navbar.classList.remove('on-scroll')
  }
}

const toggleSearch = (search,button) => {
  const searchBar = document.getElementById(search),
        searchButton = document.getElementById(button)

  searchButton.addEventListener('click', () => {
    searchBar.classList.toggle('show-search')
  })
}

menuClick('menu-icon','.navbar-2')
toggleSearch('search-bar','search-button')
window.addEventListener('scroll',changeBg)

