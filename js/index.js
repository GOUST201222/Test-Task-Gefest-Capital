//Sidebar visible
$('.sidebarTrigger[data-sidebar-id]').on('click', function(){
  $('.navigation-compact__sidebar').addClass('visible');
});
//Hide on touch to close icon
$('.navigation-compact__sidebar__top__right_close').on('click touchstart', function(){
  $('.navigation-compact__sidebar').removeClass('visible');
});
//Swiper
var swiper = new Swiper(".mySwiper", {


  spaceBetween: 16,
  slidesPerView: 4,
  freeMode: true,
  watchSlidesProgress: true,
  // Responsive breakpoints
  breakpoints: {
    // when window width is >= 640px
    640: {
      slidesPerView: 6.5,
      spaceBetween: 37
    }
  }
  

});
var swiper2 = new Swiper(".mySwiper2", {
  
  spaceBetween: 10,
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },
  thumbs: {
    swiper: swiper,
  },
});
//Swiper edit
function swiperEdit(){
  if ($(window).width() <= '768'){
    $('#prevSlide').attr('src', 'assets/svg/arrow-prev-phone.svg');
    $('#nextSlide').attr('src', 'assets/svg/arrow-next-phone.svg');
  } else{
    if ($(window).width() <= '1024'){
      $('#prevSlide').attr('src', 'assets/svg/arrow-prev-tablet.svg');
      $('#nextSlide').attr('src', 'assets/svg/arrow-next-tablet.svg');
    }else{
      $('#prevSlide').attr('src', 'assets/svg/arrow-prev.svg');
      $('#nextSlide').attr('src', 'assets/svg/arrow-next.svg');
  }
  }
};
$(window).on('load resize',swiperEdit);