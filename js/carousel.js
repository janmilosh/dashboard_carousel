$(function() {
  var height = $(window).height();
  var iframe = $('iframe');
  var wrapper = $('#wrapper');
  var left = $('#left');
  var right = $('#right');
  var index = 0;
  var numberOfUrls = urls.length;

  wrapper.css('height', height);
  iframe.css('height', height);
  left.css('height', height);
  right.css('height', height);

  iframe.attr('src', urls[index]);

  var indexCarousel = function() {
    if (index === (urls.length - 1)) {
      index = 0;
    } else {
      index++
    }
    iframe.attr('src', urls[index])
    setTimeout(indexCarousel, carouselPauseTime);
  };
  indexCarousel();

  left.on('click', function() {
    if (index === 0) {
      index = urls.length - 1;
    } else {
      index--
    }
    iframe.attr('src', urls[index])
  });

  right.on('click', function() {
    if (index === (urls.length - 1)) {
      index = 0;
    } else {
      index++
    }
    iframe.attr('src', urls[index])
  });

});