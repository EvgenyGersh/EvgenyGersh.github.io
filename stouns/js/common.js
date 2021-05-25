$(function() {

  /*const animHeaders = document.querySelectorAll('.black-sct');
  const topHeader = document.querySelector('.top_header');
  //const leftSide = document.querySelector('.left_fix_nav')
    
  if (animHeaders.length > 0){
    window.addEventListener('scroll', animOnScrol);
    function animOnScrol(){
      for (let index = 0; index < animHeaders.length; index++) {
        const animHeader = animHeaders[index];
        const animHeaderHeight = animHeader.offsetHeight;
        const animHeaderOffset = offset(animHeader).top;
        const topHeader = document.querySelector('.top_header');
        const animStart = 4;
        //console.log(animHeader)
        let animHeaderPoint = window.innerHeight - animHeaderHeight / animStart;
          if (animHeaderHeight > window.innerHeight) {
           animHeaderPoint = window.innerHeigh - window.innerHeigh / animStart;
          }

        if ((pageYOffset > animHeaderOffset) && pageYOffset < (animHeaderOffset + animHeaderHeight)) {
            topHeader.classList.add('white_bg-header');
            //topHeader.add('.white_bg-header')
          //document.querySelector('.top_header').add('.white_bg-header');
          
          
            }
        else {
            topHeader.classList.remove('white_bg-header');
          //animHeader.remove('.white_bg-header') 
          //document.querySelector('.top_header').remove('.white_bg-header');
       // $('.top_header').removeClass('white_bg-header')
        }
      }
    }
  

  function offset(el) {
    const rect = el.getBoundingClientRect(),
      scrollLeft = window.pageXOffset || document.documentElement.scrollLeft,
      scrollTop = window.pageYOffset || document.documentElement.scrollTop;
    return { top: rect.top + scrollTop, left: rect.left + scrollLeft}
  }
}
animOnScrol();
*/
  if($('.vertical-scroll').length > 0){
    var swiperOptios = {
      direction: 'vertical',
      speed: 700,
      mousewheel: true,
      on: {         
          init: function () {
            //console.log('hjk')
            $('.top_header').removeClass("white_bg-header");
            $('.left_fix_nav').removeClass("white_bg-sidebar");
            /*$('.vertical-scroll').on("slideChange", function() {
              
              if($('.swiper-slide-active').hasClass("white-sct")){
                
                //$('.top_header').addClass('white_bg-header')
              };
             // else{$('.top_header').removeClass('white_bg-header')}
            })*/
          },
         slideChangeTransitionEnd: function(){
          /*if (!$(.swiper-slide).hasClass("active")) {
                $('.swiper-slide').removeClass('active');
                $('.swiper-slide').addClass('active'); 
              }*/
            //console.log('hjk');
           //$('.top_header').removeClass("white_bg-header");
            if($('.swiper-slide-active').hasClass("white-sct")){
                
                $('.top_header').addClass('white_bg-header');
                $('.left_fix_nav').addClass('white_bg-sidebar');
              }
              else{
                if($('.swiper-slide-active').hasClass("black-sct")){
                
                  $('.top_header').removeClass('white_bg-header');
                  $('.left_fix_nav').removeClass('white_bg-sidebar');
              }
            }
          }
    }
  };
  const verticalScroll = new Swiper('.vertical-scroll', swiperOptios);
}


  /*const verticalScroll = new Swiper('.vertical-scroll', {
  
      direction: 'vertical',
      //loop: true,
      speed: 700,
      mousewheel: true,
      //effect: 'fade',
      pagination: {
        el: '.main-pagination',
        clickable: true,
      },
      
  });*/

  /*let animSect = document.querySelector('.anim-sct');
  const animHeader = document.querySelector('.top_header');
  const vertSlider = document.querySelector('.vertical-scroll');
  if (vertSlider.length > 0) {
    vertSlider.addEventListener("slideChange", function(){
      if (animSect.hasClass(".white-sct")) {
        animHeader.addClass('.white_bg-header')
      }
      animSect.forEach(function(){
        if(this)hasClassList('white-sct'){
          //set.TimeInterval(){
          animHeader.addClassList('white_bg-header') 
          //600}
        }
      })
    })
  };*/

	const mainBg = new Swiper('.main_bg_slider', {
  
  		direction: 'horizontal',
  		//loop: true,
  		speed: 800,
  		//effect: 'fade',
  		pagination: {
    		el: '.swiper-pagination',
        
    		clickable: true,
  		},
	});

	const collection = new Swiper('.collection_slider', {
  		direction: 'horizontal',
  		loop: true,
  		speed: 600,
  		//effect: 'fade',
  		/*pagination: {
    		el: '.swiper-pagination',
    		clickable: true,
  		},*/
  		slidesPerView: "auto",
      spaceBetween: 24,
      breakpoints: {
          575: {
            slidesPerView: 1.3,
            spaceBetween: 20,
          },
          775: {
            slidesPerView: 2.4,
            //spaceBetween: 7,
          },
          982: {
            slidesPerView: 2.5,
            //spaceBetween: 20,
          },
          1200: {
            slidesPerView: 3.6,
            //spaceBetween: 25,
          },
        },
  })

  const project = new Swiper('.projects_slider', {
      direction: 'horizontal',
      //loop: true,
      speed: 600,
      //effect: 'fade',
      /*pagination: {
        el: '.swiper-pagination',
        clickable: true,
      },*/
      slidesPerView: 1.1,
      spaceBetween: 15,
      breakpoints: {
          575: {
            slidesPerView: 1.5,
            spaceBetween: 20,
          },
          775: {
            slidesPerView: 1.6,
            //spaceBetween: 7,
          },
          
        },
  })

  const accounts = new Swiper('.our_accounts-slider', {
      direction: 'horizontal',
      //loop: true,
      speed: 600,
      //effect: 'fade',
      /*pagination: {
        el: '.swiper-pagination',
        clickable: true,
      },*/
      slidesPerView: 1,
      
      spaceBetween: 2,
      navigation: {
          nextEl: ".accaunt_next",
          prevEl: ".accaunt_prev",
        },
      pagination: {
          el: ".acc_progress",
          type: "progressbar",
        },
      breakpoints: {
          575: {
            slidesPerView: 2,
            spaceBetween: 0,
          },
          775: {
            slidesPerView: 2,
            //spaceBetween: 7,
          },
          982: {
            slidesPerView: 3,
            spaceBetween: 4,
          },
          1200: {
            slidesPerView: 4,
            //spaceBetween: 7,
          },
          
        },
  })

  const company = new Swiper('.comp_galery-photo', {
      direction: 'horizontal',
      //loop: true,
      speed: 600,
      //effect: 'fade',
      slidesPerView: 1.6,
      spaceBetween: 1,
      navigation: {
          nextEl: ".company_galery_next",
          prevEl: ".company_galery_prev",
        },
      pagination: {
          el: ".company_galery_progress",
          type: "progressbar",
        },
      pagination: {
          el: ".company_galery-paginat",
          clickable: true,
        },
      breakpoints: {
          575: {
            slidesPerView: 1.8,
            spaceBetween: 0,
          },
          775: {
            slidesPerView: 1.8,
            //spaceBetween: 7,
          },
          
        },
      
  })
   

  const reviews = new Swiper('.reviews_slider-box', {
      direction: 'horizontal',
      //loop: true,
      speed: 600,
      slidesPerView: 1,
      spaceBetween: 15,
      pagination: {
        el: '.reviews_page-paginat',
        clickable: true,
      },
      navigation: {
          nextEl: ".reviews_page_prev",
          prevEl: ".reviews_page_next",
        },
      pagination: {
          el: ".reviews_page_progress",
          type: "progressbar",
        },
      
      breakpoints: {
          575: {
            slidesPerView: 1.5,
            spaceBetween: 20,
          },
          775: {
            slidesPerView: 3,
            //spaceBetween: 7,
          },
          
        },
  })
  
	

	
});
