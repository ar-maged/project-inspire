$(document).ready(() => {
  // Initialize state
  const state = {
    currentColorIndex: 0,
    isInitialClick: true,
  };

  // Animate "Click something."
  $('h2').typeIt();

  // Activate tooltipster
  $('.tooltip').tooltipster({
    theme: 'tooltipster-light',
    offsetY: -95,
  });

  $(document).on('click', () => {
    // Initially reduce <h1> font size
    if (state.isInitialClick) {
      $('h1').css('font-size', '50px');
      state.isInitialClick = false;
    }

    // Increment/reset color index
    if (state.currentColorIndex === colors.length - 1) {
      state.currentColorIndex = 0;
    } else {
      state.currentColorIndex++;
    }

    // Pick random quote index
    const randomQuoteIndex = Math.floor(Math.random() * quotes.length);

    // Select quote with random index
    const randomQuote = quotes[randomQuoteIndex];

    // Update quote text & author
    $('h1').text('“' + randomQuote.text + '”');
    $('h2').text(randomQuote.author);

    // Update tooltip
    $('h2').tooltipster('content', randomQuote.description);

    // Animate author name
    $('h2').typeIt();

    // Update background colour with animation
    $('body').animate({
      backgroundColor: colors[state.currentColorIndex],
    });
  });
});
