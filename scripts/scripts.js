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
    nav:false,
    autoplay:true,
    autoWidth:true,
    autoplayTimeout:2500,
    autoplayHoverPause:true,
    responsive:{
        0:{
            items:1,
            autoplay:false
        },
        600:{
            items:3,
            autoplay:false
        },
        1000:{
            items:5
        }
    }
  });
});

