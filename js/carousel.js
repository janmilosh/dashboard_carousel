$(function() {

  var footerHeight = 40;

  var indexer, direction;
  var height = $(window).height() - footerHeight;
  var footer = $('#footer');
  var iframe = $('iframe');
  var wrapper = $('#wrapper');
  var back = $('#back');
  var next = $('#next');
  var pause = $('#pause');
  var reStart = $('#continue');
  var index = -1;
  var numberOfUrls = urls.length;

  footer.css('height', footerHeight);
  wrapper.css('height', height);
  iframe.css('height', height);

  var indexCarousel = function(direction) {
    if (!direction) {
      direction = false;
    }
    
    if (index === urls.length - 1 && direction !== 'back') {
      index = 0;
    } else if (index === 0 && direction === 'back'){
      index = urls.length - 1;
    } else if (index > 0 && direction === 'back'){
      index -= 1;
    } else {
      index++;
    }

    iframe.attr('src', urls[index]);
    indexer = setTimeout(indexCarousel, carouselPauseTime);
  };

  indexCarousel(); //This starts the carousel

  back.on('click', function() {
    clearTimeout(indexer);
    pause.css('background', 'black');
    indexCarousel('back');
  });

  next.on('click', function() {
    clearTimeout(indexer);
    pause.css('background', '');
    indexCarousel();
  });

  pause.on('click', function() {
    clearTimeout(indexer);
    pause.css('background', '#CD0000');
  });

  reStart.on('click', function() {
    clearTimeout(indexer);
    pause.css('background', '');
    indexCarousel();
  });

});