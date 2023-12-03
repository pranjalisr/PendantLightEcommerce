const btnMenu = document.querySelector('.trigger');
 menuclass = document.querySelector('nav');
 btnMenu.addEventListener('click', function(){
    menuclass.classList.toggle('showmenu')
 })
 // on off light
   
const btnLight = document.querySelector('.t-light'),
      addclass = document.querySelector('.site');
      btnLight.addEventListener('click', function() {
        addclass.classList.togggle('turnon')
      })
      // carousel

      const swiper = new Swiper('.swiper', {
         slidesPerView: 1,

      
        // If we need pagination
        pagination: {
          el: '.swiper-pagination',
          clickable: true,
        },
        breakpoints: {
            641:{
                slidesPerView: 2,
            },
            992:{
                slidesPerView: 3, 
            },
            },
       
      });