// JavaScript Document
$(function(){
	//
	updateMobileCss();
	$(".cscinav li").each(function(){
		if($(this).find(".subnav-section").size()>0){
			$(this).addClass("child");
			}
		});
	//
	if ('ontouchstart' in window) {
	var click = 'touchstart';
	  } else {
		  var click = 'click';
	  }
	  $('div.burger').on(click, function () {
		  if (!$(this).hasClass('open')) {
			  openMenu();
		  } else {
			  closeMenu();
		  }
	  });
	//
	$("#header .cscinav > li>a").click(function(event){
		if($(this).next().size()>0){
			event.preventDefault();
			if($(this).hasClass("on")){
				$(this).removeClass("on");
			$(this).next().hide();
			}else{
			$(this).addClass("on");
			$(this).next().show();
			}
			}
		});
	//
	$(".ss-l1 a").click(function(event) {
		if($(window).width()<=1080){
		event.preventDefault();
		}else{
		 return false;
		}
		if($(this).hasClass("active")){
		$(this).removeClass("active");
		$(this).parent().next().hide();
			}else{
		$(this).addClass("active");
		$(this).parent().next().show();
		}
		})
	$(".ss-l2 a").click(function(event) {
		if($(window).width()<=1080){
		event.preventDefault();
		}else{
		 return false;
		}
		if($(this).hasClass("active")){
		$(this).removeClass("active");
		$(this).parent().next().hide();
			}else{
		$(this).addClass("active");
		$(this).parent().next().show();
		}
		})
	//
	$(".footer-menu-blink").click(function(event){
		if($(this).parent().find("p").size()>0){
			event.preventDefault();
			if($(this).hasClass("on")){
			$(this).removeClass("on");
			$(this).next().hide();
			}else{
				$(this).addClass("on");
			$(this).next().show();
				}
			}
		});
	//
	$(".mobilemmenuclose").click(function(){
		closeMenu();
		});	
	//
	$(window).resize(function(){
		updateMobileCss();
		});
	})


function updateMobileCss(){
	var width=$(window).width();
		$("#header .col-md-10").removeAttr("style");
		$('div.burger').removeClass('open');
		$(".burger .y").removeAttr("style");
		$(".burger .x").removeClass("rotate30").removeClass("rotate45");
		$(".burger .z").removeClass("rotate150").removeClass("rotate135");
	if(width<=1080){
		$(".subnav-section .ss-l1 a").removeClass("active");
		$(".ss-btns").hide();
		$(".subnav-section").stop().hide();
		}else{
		$(".subnav-section .ss-l1 a").addClass("active");
		$(".subnav-section .ss-l1").next().show();
		$(".subnav-section").stop().hide();
		}
	}
function openMenu() {
	$('div.y').fadeOut(100);
	$("#header .col-md-10").show();
	setTimeout(function () {
		$('div.x').addClass('rotate30');
		$('div.z').addClass('rotate150');
		setTimeout(function () {
			$('div.x').addClass('rotate45');
			$('div.z').addClass('rotate135');
		}, 10);
	}, 10);
	setTimeout(function () {
	$('div.burger').addClass('open');
	}, 200);
	$("html,body").css("overflow","hidden");
}

function closeMenu() {
	$('#header .col-md-10').removeAttr("style");
	$('div.y').fadeIn(150);
	$('div.x').removeClass('rotate45').addClass('rotate30');
	$('div.z').removeClass('rotate135').addClass('rotate150');
	setTimeout(function () {
		$('div.x').removeClass('rotate30');
		$('div.z').removeClass('rotate150');
	}, 50);
	setTimeout(function () {
		$('div.x, div.z').removeClass('collapse');
	}, 70);
	$('div.burger').removeClass('open');
	$("html,body").css("overflow","visible");
}	