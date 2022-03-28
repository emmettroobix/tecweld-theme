 function cycleImages(){
      var $active = $('#cycler .active');
      var $next = ($active.next().length > 0) ? $active.next() : $('#cycler img:first');
      $next.css('z-index',2);//move the next image up the pile
      $active.fadeOut(200,function(){//fade out the top image
      $active.css('z-index',1).show().removeClass('active');//reset the z-index and unhide the image
          $next.css('z-index',3).addClass('active');//make the next image the top one
      });
    }

(function($){

	$(document).ready(function(){
		$(".arrows a").bind("click", function (e) {
			$('html, body').animate({
				scrollTop: $('.main-center').offset().top - 0.5
			});
			e.preventDefault();
		});

        $(document).ready(function(){
        // run every 3s
        setInterval('cycleImages()', 3000);
        })

        $(".owl-carousel-play .owl-carousel").each( function(){
            var config = {
                navigation : false, // Show next and prev buttons
                slideSpeed : 300,
                paginationSpeed : 400,
                pagination : $(this).data( 'pagination' ),
                autoHeight: true,
                pagination : true,
             };

            var owl = $(this);
            if( $(this).data('slide') == 1 ){
                config.singleItem = true;
            }else {
                config.items = $(this).data( 'slide' );
            }
            if ($(this).data('desktop')) {
                config.itemsDesktop = $(this).data('desktop');
            }
            if ($(this).data('desktopsmall')) {
                config.itemsDesktopSmall = $(this).data('desktopsmall');
            }
            if ($(this).data('desktopsmall')) {
                config.itemsTablet = $(this).data('tablet');
            }
            if ($(this).data('tabletsmall')) {
                config.itemsTabletSmall = $(this).data('tabletsmall');
            }
            if ($(this).data('mobile')) {
                config.itemsMobile = $(this).data('mobile');
            }
            $(this).owlCarousel( config );
             if( $(this).data('jumpto') ){
                owl.trigger('owl.jumpTo', $(this).data('jumpto') )
            }
            $('.left',$(this).parent()).on('click', function(){
                  owl.trigger('owl.prev');
                  return false;
            });
            $('.right',$(this).parent()).on('click', function(){
                owl.trigger('owl.next');
                return false;
            });
         } );

	});	
    jQuery(document).ready( function( $ ){
        var nav = jQuery('.has-sticky');
        if( nav ){
            jQuery(window).scroll(function () {
                if ($(this).scrollTop() > 100) {
                    nav.addClass("keeptop");
                    
                } else {
                    nav.removeClass("keeptop");                    
                }
            });
        }
    } );
	new WOW().init(); 
		
})(jQuery);