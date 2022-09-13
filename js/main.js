$(function () {
  $('.menu__btn').on('click', function () {
    $('.menu__list').toggleClass('menu__list--active');
  });

  // $('.card__inner').slick({
  //   slidesToShow: 1,
  //   slidesToScroll: 1,
  //   // asNavFor: '.slider-for',
  //   // dots: true,
  //   centerMode: true,
  //   focusOnSelect: true,
  //   variableWidth: true,
  //   responsive: [{
  //     breakpoint: 1200,
  //     settings: 'slick'
  //   }]
  // });
  $('.card__inner').slick({responsive: [{
        breakpoint: 1200,
       }]});
});