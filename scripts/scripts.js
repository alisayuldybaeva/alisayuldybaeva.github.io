$(document).ready(function(){
externalLinks();
});
function externalLinks(){
    $('a.new-window').bind('click', function(e){
      var location = $(this).attr('href');  
      window.open(location);
      e.preventDefault();
    });
}

$(document).ready(function(){
  $(".owl-carousel").owlCarousel({
    center:true,
    stagePadding: 50,
    lazyLoad: true,
    loop:true,
    margin:10,
    nav:true,
    autoplay:true,
    autoWidth:true,
    autoplayTimeout:2500,
    autoplayHoverPause:true,
    responsive:{
        0:{
            items:1
        },
        600:{
            items:3
        },
        1000:{
            items:5
        }
    }
  });
});
