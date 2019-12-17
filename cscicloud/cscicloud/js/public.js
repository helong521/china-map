// JavaScript Document

if (/(iPhone|iPad|iPod|iOS)/i.test(navigator.userAgent)) {
    isMob=1;
} else if (/(Android)/i.test(navigator.userAgent)) {
    isMob=1;
} else {
    isMob=0;
};

$(document).ready(function(){
 
  $("#header .cscinav > li").hover(
    function() {
	  if($(".burger").hasClass("open")){
		  }else{
      $(".subnav-section").stop().hide();
     $( this ).find(" > .subnav-section").stop().fadeIn( 500 );
		  }
    }, function() {
		if($(".burger").hasClass("open")){
		}else{
      $(".subnav-section").stop().hide();
		}
    }
  );

  $("#menubtn_2_1").hover(function() {
	 if($(".burger").hasClass("open")){
		return false;
		}
    $( this ).addClass("active");
    $("#menubtn_2_2").removeClass("active");
    $("#menu_2_2").stop().hide();
    $("#menu_2_1").stop().fadeIn( 500 );
  });

  $("#menubtn_2_2").hover(function() {
	  if($(".burger").hasClass("open")){
		return false;
		}
    $( this ).addClass("active");
    $("#menubtn_2_1").removeClass("active");
    $("#menu_2_1").stop().hide();
    $("#menu_2_2").stop().fadeIn( 500 );
  });
  

  //当点击跳转链接后，回到页面顶部位置
  $(".btnrb-gototop").click(function() {
    $('body,html').animate({
      scrollTop: 0
    },
    500);
    return false;
  });
  
});

$(window).scroll(function() {

  if ($(document).scrollTop()<=0){
    if(isapi!=1){
      $("#header").removeClass("headerscroll");
    }
    
  }else{
    
    if($(".fastNavBar").length > 0&&isMob==0){
      //如果存在快速导航条
      if ($(document).scrollTop()>=680){
        $("#header").removeClass("headerscroll");
        $(".fastNavBar").addClass("fastNavBarScroll");
      }else{
        $("#header").addClass("headerscroll");
        $(".fastNavBar").removeClass("fastNavBarScroll");
      }
      
      
    }else{
      $("#header").addClass("headerscroll");
    }
    
    
  }
  
  $(".subnav-section").stop().hide();
  
  
  
  if ($(window).scrollTop() > 50) {
    $(".btnrb-gototop").fadeIn(200);
  } else {
    $(".btnrb-gototop").fadeOut(200);
  }

});
  
if(isapi==1){
  $("#header").addClass("headerscroll");
  $("#header").addClass("headershadow");
  
}
$(".gotohome").click(function(){
	window.location.href='/';
	});