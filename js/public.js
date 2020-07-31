    //获取鼠标停留的li的left和top，以及这个width
    $(".nav li").on("mouseover",function(){
        var position = $(this).position();
        var width = $(this).width();
        $(".nav .slide").css({
            // opacity:1,
            left:+position.left,
             width:width, 
        }) 
    });
 
    // $(".nav").on("mouseleave",function(){
    //     $(".nav .slide").css(
    //     {
    //         opacity:0
    //     })
        
    // });
    
    //おもしろい

 

		// $(".nav li ").on("mouseover",function(){
		// 	var position = $(this).parent().position();
		// 	var width = $(this).parent().width();
		// 	$(".nav .slide").css({
			
		// 		left:+position.left,
		// 		width:width,
				
		// 	})
		// });

		// $(".nav li a ").on("mouseout",function(){
		// 	$(".nav .slide").css(
		// 	{
				
		// 		 width:0+'px',
		// 	});
			
		// });
