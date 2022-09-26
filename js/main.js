window.addEventListener('load', function(){
new Glider(document.querySelector('.carousel__lista'), {
    slidesToShow: 3,
    slidesToScroll: 3,
    dots: '.carosuel__indicadores',
    arrows: {
      prev: '.carousel__anterior',
      next: '.carousel__siguiente'
    }
  });
});