
/* AOS Script */

			AOS.init({
				offset:60
			});

/* AOS Animation */
        			
/* Animation Hamburger nav Process */

			$(document).ready(function(){

				$('.menu-toggle').click(function(){
					$(this).toggleClass('open');
				});

			});

/* End Animation Hamburger nav Process */

/* Open NAV Process */

			$(document).ready(function(){

				$('.menu-toggle').click(function(){
					$('#header_nav').toggleClass('active');
				});
			});

/* End Open NAV Process */

/* Arrow goes to top process && Header Nav Tester */

			$(window).on('scroll',function(){
				if($(window).scrollTop()){
					$('.sec_bottom_arrow_up').addClass('active');
					$('header').addClass('active');
				}else{
					$('.sec_bottom_arrow_up').removeClass('active');
					$('header').removeClass('active');
				}

			});

/* End Arrow goes to top process */

/* Change Active Menu Item and Page Scroll */

			$(document).ready(function(){

				var scrollLink = $('.scroll');

				//Smooth Scrolling
				scrollLink.click(function(e){
					e.preventDefault();
					// console.log(this.hash);

					$('body,html').animate({
						scrollTop: $(this.hash).offset().top
					}, 1000);
				});

				//Active Link Switching
				$(window).scroll(function(){

					var scrollBarLocation = $(this).scrollTop();
					// console.log(scrollBarLocation);

					scrollLink.each(function(){
						var sectionOffset = $(this.hash).offset().top-20;
						if(sectionOffset <= scrollBarLocation ){
							$(this).parent().addClass('current');
							$(this).parent().siblings().removeClass('current');
						}
					});

				});

			});

/* End Change Active Menu Item and Page Scroll */