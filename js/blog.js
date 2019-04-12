  $(".blog").owlCarousel({
    loop: true,
    nav: true,
    items: 4,
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