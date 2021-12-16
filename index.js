// below slider is for mini slider which shows food categories.
$('.slider-nav').slick({
   slidesToShow: 3,
   slidesToScroll: 1,
   dots: false,
   focusOnSelect: true,
   autoplay: true,
   autoplaySpeed: 2000,
   infine:true,
   responsive: [
    {
      breakpoint: 1024,
      settings: {
        slidesToShow: 3,
        slidesToScroll: 3,
        infinite: true,
        dots: true
      }
    },
    {
      breakpoint: 600,
      settings: {
        slidesToShow: 2,
        slidesToScroll: 2
      }
    },
    {
      breakpoint: 480,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1
      }
    }
  ]
 });



//  below slider is  to display special offers which shows one slide at a time.
 $('.slider-nav2').slick({
    slidesToShow: 1,
    slidesToScroll: 1,
    dots: false,
    focusOnSelect: true,
    autoplay: true,
    autoplaySpeed: 2500,
    infine:true,
    responsive: [
     {
       breakpoint: 1024,
       settings: {
         slidesToShow: 1,
         slidesToScroll: 1,
         infinite: true,
         dots: true
       }
     },
     {
       breakpoint: 600,
       settings: {
         slidesToShow: 1,
         slidesToScroll: 1
       }
     },
     {
       breakpoint: 480,
       settings: {
         slidesToShow: 1,
         slidesToScroll: 1
       }
     }
     // You can unslick at a given breakpoint now by adding:
     // settings: "unslick"
     // instead of a settings object
   ]
  });
 
 $('a[data-slide]').click(function(e) {
   e.preventDefault();
   var slideno = $(this).data('slide');
   $('.slider-nav').slick('slickGoTo', slideno - 1);
 });

// this function is for navigation bar
 function myFunction() {
    var x = document.getElementById("myTopnav");
    if (x.className === "topnav") {
      x.className += " responsive";
    } else {
      x.className = "topnav";
    }
  }

  function desserts(pageUrl){
    window.open(pageUrl);
    var favoritemovie = "desserts";
sessionStorage.setItem("favoriteMovie", favoritemovie);
    // $("#burgers").focus();
    // alert();
  }
   function pizza(pageUrl){
    window.open(pageUrl);
    var favoritemovie = "pizza";
sessionStorage.setItem("pizza", pizza);
    // $("#burgers").focus();
    // alert();
  } 


  function burgers(pageUrl){
    window.open(pageUrl);
    var favoritemovie = "burgers";
sessionStorage.setItem("burgers", burgers);
    // $("#burgers").focus();
    // alert();
  } 