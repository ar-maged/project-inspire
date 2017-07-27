$(document).ready(function() {
  // Animate "Click something."
  $('h2').typeIt();

  // Activate tooltipster
  $('.tooltip').tooltipster({
    offsetY: -95,
    theme: 'tooltipster-light',
  });

  $(document).on('click', function() {
    // Initially reduce h1 font size
    if (index === 0) {
      $('h1').css('font-size', '50px');
    }

    // Update background colour with animation
    $('body').animate({
      backgroundColor: colors[index],
    });

    if (index === colors.length - 1) {
      index = 0;
    } else {
      index++;
    }

    // Update quote
    var randomQuote = quotes[Math.floor(Math.random() * quotes.length)];

    $('h1').text('“' + randomQuote.text + '”');
    $('h2').text(randomQuote.author);

    // Animate author name
    $('h2').typeIt();

    // Update tooltip
    $('h2').tooltipster('content', randomQuote.description);
  });
});

var index = 0;
