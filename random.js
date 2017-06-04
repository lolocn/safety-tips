$(function(){
  var run = 0;
  var timer;

  var list = ["<b>Russian toast:</b> <br/> Celebrate success! Tell one person in the room something you appreciate that he/she has done recently. This may not be easy but practice makes us better at it.",
  "<b>Field Leadership:</b> <br/> How comfortable are you observing others working and providing them with helpful feedback if you see something you think is at risk? ",
  "<b>Leading Step Up:</b> <br/>  What are some innovative ways to ensure your team feels safe to speak up and discuss any safety concerns that they may have? ",
  "<b>Leading Step Up:</b> <br/> What are the benefits for asking and providing constructive feedback? What are some tips for providing feedback?"]
	$("#wrapper").click(function(){

    if (!run) {
        timer = setInterval(function(){
          var r = Math.ceil(Math.random() * list.length);
          var tip = list[r - 1];
          $("#content").html(tip);

          var rTop = Math.ceil(Math.random() * $(document).height()),
                    rLeft = Math.ceil(Math.random() * ($(document).width() - 50)),
                    rSize = Math.ceil(Math.random() * (30 - 14));
					//alert(Math.random());
                $("<span class='temp'></span>").html(tip).hide().css({
                    "top": rTop,
                    "left": rLeft,
                    "color": "rgba(152,150,150," + Math.random() + ")",
                    "fontSize": rSize + "px"
                }).appendTo("body").fadeIn("slow", function () {
                    $(this).fadeOut("fast", function () {
                        $(this).remove();
                    });
                });
        }, 50);
        run = 1;
    } else {
        clearInterval(timer);
        run = 0;
    }

	});

});
