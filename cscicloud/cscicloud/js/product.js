 //
  $("#value_area .nsculli-title").click(function(){
	  if($(this).hasClass("on")){
		  $(this).removeClass("on");
		  $(this).next().hide();
		  }else{
		  $(this).addClass("on");
		  $(this).next().show();
			  }
	  });
    //
  $("#function_area .nsc-keyword").click(function(){
	  if($(this).hasClass("on")){
		  $(this).removeClass("on");
		  $(this).next().hide();
		  }else{
		  $(this).addClass("on");
		  $(this).next().show();
			  }
	  });
	
	 //
  $("#stories_area label").click(function(){
	  if($(this).hasClass("on")){
		  $(this).removeClass("on");
		  $(this).next().hide();
		  }else{
		  $(this).addClass("on");
		  $(this).next().show();
			  }
	  });  