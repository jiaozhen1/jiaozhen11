(function(a){a(".loading").delay(500).fadeOut(500);a(window).on("scroll",function(){if(a(".navbar").offset().top>50){a(".navbar").addClass("navbar-scroll")}else{a(".navbar ").removeClass("navbar-scroll")}});a(".navbar-toggler").on("click",function(){a(".navbar-collapse").collapse("show")});a(".search-icon").on("click",function(){a(".search").addClass("search-open")});a(".close").on("click",function(){a(".search").removeClass("search-open")});a(window).on("scroll",function(){if(a(window).scrollTop()>250){a(".back-top").fadeIn(300)}else{a(".back-top").fadeOut(300)}});a(".back-top").on("click",function(b){b.preventDefault();a("html, body").animate({scrollTop:0},300);return false});a(".carousel-hero .owl-carousel").owlCarousel({loop:true,stagePadding:0,margin:0,nav:true,autoplay:true,center:false,dots:false,mouseDrag:true,touchDrag:true,smartSpeed:1000,autoplayHoverPause:false,responsiveClass:true,responsive:{0:{items:1,},768:{items:1,},1200:{items:1,},}})})(jQuery);