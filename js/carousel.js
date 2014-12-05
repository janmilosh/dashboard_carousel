$(function() {
  var indexer, adder;
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

  var indexCarousel = function(adder) {
    if (!adder) {
      adder = 0;
    }
    console.log('index', index);
    console.log('adder', adder);
    iframe.attr('src', urls[index])
    indexer = setTimeout(indexCarousel, carouselPauseTime);
    if (index === (urls.length - 1)) {
      index = 0 + adder;
    } else {
      index = index + 1 + adder;
    }
  };
  indexCarousel();

  left.on('click', function() {
    clearTimeout(indexer)
    indexCarousel(-1);
  });

  right.on('click', function() {
    clearTimeout(indexer)
    indexCarousel(1);
  });

});