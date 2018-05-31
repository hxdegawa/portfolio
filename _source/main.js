$(function(){
  var screenHalfWidth = $(window).width() / 2,
      screenHalfHeight = $(window).height() / 2,
      cursorX = 0,
      cursorY = 0;

  $(window).mousemove(function(e){
      cursorX = e.clientX - screenHalfWidth;
      cursorY = (e.clientY - screenHalfHeight) * -1;
      $(".logo-wrapper").css("transform", "translate(-50%, -50%) rotateZ(" + Math.atan2(cursorX, cursorY) * 60/(2*Math.PI) +"deg)");
  });

  $(window).resize(function(){
    screenHalfWidth = $(window).width() / 2;
    screenHalfHeight = $(window).height() / 2;
  });
});