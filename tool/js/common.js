$(function() {  
	FastClick.attach(document.body);  
});
window.onload = function(){
	var banner = new Swiper('.banner .swiper-container', {
      pagination : '.pagination',
      calculateHeight:true, 
      loop:Loop,
      autoplay:Autoplay,
      speed:500
	});
	var profile_banner = new Swiper('.profile_banner .swiper-container', {
      pagination : '.pagination',
      calculateHeight:true, 
      loop:Loop,
      autoplay:Autoplay,
      speed:500
	});
	 
	var home_item_list = new Swiper('.fn_114_slide .swiper-container', {
      pagination : '.pagination',
      calculateHeight:true, 
      speed:500,
	  paginationClickable: true,
	  paginationBulletRender: function (home_item_list, index, className) {
            return '<span class="' + className + '">' + home_item_list_nav[index] + '</span>';
     }
	});
	
	var nav_swiper = new Swiper('.fn_114_nav .swiper-container', {
        pagination: '.pagination',
        slidesPerView: 4,
        slidesPerColumn: 2,
        paginationClickable: true
    });
}
//$(document).on('click',"a",function(){
//	var href_ = $(this).attr('href');
//	var data_ = $(this).attr('data');
//	if(data_ != 'pc'){
//		if(href_ != '#' && href_ != ''){
//			$('.fixed_load').show();
//		}	
//	}
//});


