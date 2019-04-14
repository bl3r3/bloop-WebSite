$(document).ready(function(){
  $(".owl-carousel").owlCarousel({
    loop: true,
    navText : ['<i class="fa fa-angle-left"></i>','<i class="fa fa-angle-right"></i>'],
    margin: 10,
    responsiveClass:true,
    responsive:{
    	0:{
    		items:1,
    		nav: true
    	},
    	300:{ 

    		items: 3,
    		nav: true    	
    	},
    	768:{
    		items: 4,
    		nav: true
    	},
    	
    	1000:{
    		items: 5,
    		nav: true,
    	}
    }
  });

  $(window).scroll(function(){
    var scroll = $(window).scrollTop();
      if (scroll > 1) {
        $(".navbar").css("background" , "#29a9e1");
      }

      else{
          $(".navbar").css("background" , "transparent");   
      }
  })
 
 
 $(window).scroll(function(){
    var scroll = $(window).scrollTop();
      if (scroll === 0) {
        $(".navnav").removeClass("active-menu").addClass("default-menu");
      }else {
          $(".navnav").addClass("active-menu").removeClass("default-menu")
      }
  })


 

});

