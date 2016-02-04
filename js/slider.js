$( document ).ready(function() {
    $('.slider').bxSlider({
      adaptiveHeight: true,
      mode: 'fade',
      captions: true,
      preloadImages: 'all',
      auto: true,
      speed:200
    });
});

;(function($) {
    $.fn.textfill = function(options) {
        var fontSize = options.maxFontPixels;
        var ourText = this.find("p:first");
        var parent = this.parent();
        //var maxWidth = parent.width();
        var maxWidth = parent.width();
        var maxHeight = maxWidth * options.ratio;
        var textHeight;
        var textWidth;
        do {
            ourText.css('font-size', fontSize);
            ourText.css('line-height', 1.5);
            textHeight = ourText.height();
            textWidth = ourText.width();
            fontSize = fontSize - 1;
        } while ((textHeight > maxHeight || textWidth > maxWidth) && fontSize > 3);
        return this;
    }
})(jQuery);

$(document).ready(function() {

    $('.text-portrait').each(function(){
      $(this).textfill({ maxFontPixels: 36 , ratio: 1});
    });

    $('.text-circle').each(function(){
      $(this).textfill({ maxFontPixels: 36 , ratio: 1});
    });
});

$(window).resize(function() {

    $('.text-portrait').each(function(){
      $(this).textfill({ maxFontPixels: 36 , ratio: 1});
    });

    $('.text-circle').each(function(){
      $(this).textfill({ maxFontPixels: 36 , ratio: 1});
    });
});
