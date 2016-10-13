$(document).ready(function(){
   var scroll_start = 0;
   var startchange = $('.container');
   var offset = startchange.offset();
    if (startchange.length){
   $(document).scroll(function() {
      scroll_start = $(this).scrollTop();
      if(scroll_start <= offset.top) {
          $(".site-header").css('opacity', '1');
       } else {
          $('.site-header').css('opacity', '.5');
       }
   });
 }
});
