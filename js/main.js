$(document).ready(function() {

  // Animate "Click something."
  $('h2').typeIt();

  // Activate tooltipster
  $('.tooltip').tooltipster({
    offsetY: -95,
    theme: '.tooltipster-light'
  });

  $(document).on("click", function() {

    // Initially reduce h1 font size
    if (index === 0)
      $('h1').css("font-size", "50px");

    // Update background colour with animation
    $('body').animate({
      backgroundColor: colours[index]
    });

    if (index === colours.length - 1)
      index = 0;
    else
      index++;

    // Update quote
    var randomQuote = quotesArray[Math.floor(Math.random() * quotesArray.length)];

    $("h1").text('“' + randomQuote.text + '”');
    $("h2").text(randomQuote.author);

    // Animate author name
    $('h2').typeIt();

    // Update tooltip
    $('h2').tooltipster('content', randomQuote.description);

  });

});

var index = 0;

// Colours array
var colours = ["#789dd0", "#a2b3cc", "#9da1b6", "#7f7784", "#a69190", "#bf7fbf", "#a3d468", "#9aacb0", "##294d67", "#88d2f6", "#5df977", "#b4fb38", "#ffaaaa"];

// Quotes array
var quotesArray =

  [{
    "author": "Kevin Kruse",
    "description": "",
    "text": "Life isn’t about getting and having, it’s about giving and being."
  }, {
    "author": "Napoleon Hill",
    "description": "",
    "text": "Whatever the mind of man can conceive and believe, it can achieve."
  }, {
    "author": "Albert Einstein",
    "description": "",
    "text": "Strive not to be a success, but rather to be of value."
  }, {
    "author": "Robert Frost",
    "description": "",
    "text": "Two roads diverged in a wood, and I took the one less traveled by, and that has made all the difference."
  }, {
    "author": "Florence Nightingale",
    "description": "",
    "text": "I attribute my success to this: I never gave or took any excuse."
  }, {
    "author": "Wayne Gretzky",
    "description": "",
    "text": "You miss 100% of the shots you don’t take."
  }, {
    "author": "Amelia Earhart",
    "description": "",
    "text": "The most difficult thing is the decision to act, the rest is merely tenacity."
  }, {
    "author": "W. Clement Stone",
    "description": "",
    "text": "Definiteness of purpose is the starting point of all achievement."
  }, {
    "author": "John Lennon",
    "description": "",
    "text": "Life is what happens to you while you’re busy making other plans."
  }, {
    "author": "Earl Nightingale",
    "description": "",
    "text": "We become what we think about."
  }, {
    "author": "Charles Swindoll",
    "description": "",
    "text": "Life is 10% what happens to me and 90% of how I react to it."
  }, {
    "author": "Alice Walker",
    "description": "",
    "text": "The most common way people give up their power is by thinking they don’t have any."
  }, {
    "author": "Chinese Proverb",
    "description": "",
    "text": "The best time to plant a tree was 20 years ago. The second best time is now."
  }, {
    "author": "Socrates",
    "description": "",
    "text": "An unexamined life is not worth living."
  }, {
    "author": "Steve Jobs",
    "description": "",
    "text": "Your time is limited, so don’t waste it living someone else’s life."
  }, {
    "author": "Vince Lombardi",
    "description": "",
    "text": "Winning isn’t everything, but wanting to win is."
  }, {
    "author": "Stephen Covey",
    "description": "",
    "text": "I am not a product of my circumstances. I am a product of my decisions."
  }, {
    "author": "Pablo Picasso",
    "description": "",
    "text": "Every child is an artist. The problem is how to remain an artist once he grows up."
  }, {
    "author": "Christopher Columbus",
    "description": "",
    "text": "You can never cross the ocean until you have the courage to lose sight of the shore."
  }, {
    "author": "Maya Angelou",
    "description": "",
    "text": "I’ve learned that people will forget what you said, people will forget what you did, but people will never forget how you made them feel."
  }, {
    "author": "Jim Rohn",
    "description": "",
    "text": "Either you run the day, or the day runs you."
  }, {
    "author": "Henry Ford",
    "description": "",
    "text": "Whether you think you can or you think you can’t, you’re right."
  }, {
    "author": "Mark Twain",
    "description": "",
    "text": "The two most important days in your life are the day you are born and the day you find out why."
  }, {
    "author": "Johann Wolfgang von Goethe",
    "description": "",
    "text": "Whatever you can do, or dream you can, begin it. Boldness has genius, power and magic in it."
  }, {
    "author": "Frank Sinatra",
    "description": "",
    "text": "The best revenge is massive success."
  }, {
    "author": "Zig Ziglar",
    "description": "",
    "text": "People often say that motivation doesn’t last. Well, neither does bathing. That’s why we recommend it daily."
  }, {
    "author": "Anais Nin",
    "description": "",
    "text": "Life shrinks or expands in proportion to one’s courage."
  }, {
    "author": "Vincent Van Gogh",
    "description": "",
    "text": "If you hear a voice within you say “you cannot paint,” then by all means paint, and that voice will be silenced."
  }, {
    "author": "Aristotle",
    "description": "",
    "text": "There is only one way to avoid criticism: do nothing, say nothing, and be nothing."
  }, {
    "author": "Ralph Waldo Emerson",
    "description": "",
    "text": "The only person you are destined to become is the person you decide to be."
  }, {
    "author": "Henry David Thoreau",
    "description": "",
    "text": "Go confidently in the direction of your dreams. Live the life you have imagined."
  }, {
    "author": "Erma Bombeck",
    "description": "",
    "text": "When I stand before God at the end of my life, I would hope that I would not have a single bit of talent left and could say, I used everything you gave me."
  }, {
    "author": "Booker T. Washington",
    "description": "",
    "text": "Few things can help an individual more than to place responsibility on him, and to let him know that you trust him."
  }, {
    "author": " Ancient Indian Proverb",
    "description": "",
    "text": "Certain things catch your eye, but pursue only those that capture the heart."
  }, {
    "author": "Theodore Roosevelt",
    "description": "",
    "text": "Believe you can and you’re halfway there."
  }, {
    "author": "George Addair",
    "description": "",
    "text": "Everything you’ve ever wanted is on the other side of fear."
  }, {
    "author": "Plato",
    "description": "",
    "text": "We can easily forgive a child who is afraid of the dark; the real tragedy of life is when men are afraid of the light."
  }, {
    "author": "Maimonides",
    "description": "",
    "text": "Teach thy tongue to say, “I do not know,” and thous shalt progress."
  }, {
    "author": "Arthur Ashe",
    "description": "",
    "text": "Start where you are. Use what you have. Do what you can."
  }, {
    "author": "Japanese Proverb",
    "description": "",
    "text": "Fall seven times and stand up eight."
  }, {
    "author": "Helen Keller",
    "description": "",
    "text": "When one door of happiness closes, another opens, but often we look so long at the closed door that we do not see the one that has been opened for us."
  }, {
    "author": "Confucius",
    "description": "",
    "text": "Everything has beauty, but not everyone can see."
  }, {
    "author": "Anne Frank",
    "description": "",
    "text": "How wonderful it is that nobody need wait a single moment before starting to improve the world."
  }, {
    "author": "Dalai Lama",
    "description": "",
    "text": "Happiness is not something readymade.  It comes from your own actions."
  }, {
    "author": "Sheryl Sandberg",
    "description": "",
    "text": "If you’re offered a seat on a rocket ship, don’t ask what seat! Just get on."
  }, {
    "author": "Unknown",
    "description": "",
    "text": "You can’t fall if you don’t climb. But there’s no joy in living your whole life on the ground."
  }, {
    "author": "Marie Curie",
    "description": "",
    "text": "We must believe that we are gifted for something, and that this thing, at whatever cost, must be attained."
  }, {
    "author": "Les Brown",
    "description": "",
    "text": "Too many of us are not living our dreams because we are living our fears."
  }, {
    "author": "Joshua J. Marine",
    "description": "",
    "text": "Challenges are what make life interesting and overcoming them is what makes life meaningful."
  }, {
    "author": "Booker T. Washington",
    "description": "",
    "text": "If you want to lift yourself up, lift up someone else."
  }, {
    "author": "Leonardo da Vinci",
    "description": "",
    "text": "I have been impressed with the urgency of doing. Knowing is not enough; we must apply. Being willing is not enough; we must do."
  }, {
    "author": "Jamie Paolinetti",
    "description": "",
    "text": "Limitations live only in our minds. But if we use our imaginations, our possibilities become limitless."
  }, {
    "author": "Bob Dylan",
    "description": "",
    "text": "What’s money? A man is a success if he gets up in the morning and goes to bed at night and in between does what he wants to do."
  }, {
    "author": "Benjamin Franklin",
    "description": "",
    "text": "I didn’t fail the test. I just found 100 ways to do it wrong."
  }, {
    "author": "Bill Cosby",
    "description": "",
    "text": "In order to succeed, your desire for success should be greater than your fear of failure."
  }, {
    "author": " Albert Einstein",
    "description": "",
    "text": "A person who never made a mistake never tried anything new."
  }, {
    "author": "Chinese Proverb",
    "description": "",
    "text": "The person who says it cannot be done should not interrupt the person who is doing it."
  }, {
    "author": "Vincent van Gogh",
    "description": "",
    "text": "I would rather die of passion than of boredom."
  }, {
    "author": "Unknown",
    "description": "",
    "text": "A truly rich man is one whose children run into his arms when his hands are empty."
  }, {
    "author": "Ann Landers",
    "description": "",
    "text": "It is not what you do for your children, but what you have taught them to do for themselves, that will make them successful human beings."
  }, {
    "author": "Abigail Van Buren",
    "description": "",
    "text": "If you want your children to turn out well, spend twice as much time with them, and half as much money."
  }, {
    "author": "Farrah Gray",
    "description": "",
    "text": "Build your own dreams, or someone else will hire you to build theirs."
  }, {
    "author": "Jesse Owens",
    "description": "",
    "text": "The battles that count aren’t the ones for gold medals. The struggles within yourself–the invisible battles inside all of us–that’s where it’s at."
  }, {
    "author": "Claus Moser",
    "description": "",
    "text": "Education costs money. But then so does ignorance."
  }, {
    "author": "Rosa Parks",
    "description": "",
    "text": "I have learned over the years that when one’s mind is made up, this diminishes fear."
  }, {
    "author": "Confucius",
    "description": "",
    "text": "It does not matter how slowly you go as long as you do not stop."
  }, {
    "author": "Oprah Winfrey",
    "description": "",
    "text": "If you look at what you have in life, you’ll always have more. If you look at what you don’t have in life, you’ll never have enough."
  }, {
    "author": "Dalai Lama",
    "description": "",
    "text": "Remember that not getting what you want is sometimes a wonderful stroke of luck."
  }, {
    "author": "Maya Angelou",
    "description": "",
    "text": "You can’t use up creativity. The more you use, the more you have."
  }, {
    "author": "Norman Vaughan",
    "description": "",
    "text": "Dream big and dare to fail."
  }, {
    "author": "Martin Luther King Jr.",
    "description": "",
    "text": "Our lives begin to end the day we become silent about things that matter."
  }, {
    "author": "Teddy Roosevelt",
    "description": "",
    "text": "Do what you can, where you are, with what you have."
  }, {
    "author": "Tony Robbins",
    "description": "",
    "text": "If you do what you’ve always done, you’ll get what you’ve always gotten."
  }, {
    "author": "Gloria Steinem",
    "description": "",
    "text": "Dreaming, after all, is a form of planning."
  }, {
    "author": "Mae Jemison",
    "description": "",
    "text": "It’s your place in the world; it’s your life. Go on and do all you can with it, and make it the life you want to live."
  }, {
    "author": "Beverly Sills",
    "description": "",
    "text": "You may be disappointed if you fail, but you are doomed if you don’t try."
  }, {
    "author": "Eleanor Roosevelt",
    "description": "",
    "text": "Remember no one can make you feel inferior without your consent."
  }, {
    "author": "Grandma Moses",
    "description": "",
    "text": "Life is what we make it, always has been, always will be."
  }, {
    "author": "Ayn Rand",
    "description": "",
    "text": "The question isn’t who is going to let me; it’s who is going to stop me."
  }, {
    "author": "Henry Ford",
    "description": "",
    "text": "When everything seems to be going against you, remember that the airplane takes off against the wind, not with it."
  }, {
    "author": "Abraham Lincoln",
    "description": "",
    "text": "It’s not the years in your life that count. It’s the life in your years."
  }, {
    "author": "Norman Vincent Peale",
    "description": "",
    "text": "Change your thoughts and you change your world."
  }, {
    "author": "Benjamin Franklin",
    "description": "",
    "text": "Either write something worth reading or do something worth writing."
  }, {
    "author": "Audrey Hepburn",
    "description": "",
    "text": "Nothing is impossible, the word itself says, “I’m possible!”"
  }, {
    "author": "Steve Jobs",
    "description": "",
    "text": "The only way to do great work is to love what you do."
  }, {
    "author": "Zig Ziglar",
    "description": "",
    "text": "If you can dream it, you can achieve it."
  }, {
    "author": "James Burgh",
    "description": "",
    "text": "In disputes upon moral or scientific points, ever let your aim be to come at truth, not to conquer your opponent."
  }, {
    "author": "Conrad Hilton",
    "description": "",
    "text": "Achievement seems to be connected with action. Successful men and women keep moving. They make mistakes but they don’t quit."
  }, {
    "author": "Maxi Foreman",
    "description": "",
    "text": "Ambition is the steam that drives men forward on the road to success. Only the engine under full steam can make the grade."
  }, {
    "author": "Dennis Waitley",
    "description": "",
    "text": "Continuous learning is the minimum requirement for success in any field."
  }, {
    "author": "Henry Ford",
    "description": "",
    "text": "Enthusiasm is the sparkle in your eyes, the swing in your gait, the grip of your hand and the irresistible surge of will and energy to execute your ideas."
  }, {
    "author": "Pearl Buck",
    "description": "",
    "text": "The secret of joy in work is contained in one word: excellence. To know how to do something well is to enjoy it."
  }, {
    "author": "Yoda",
    "description": "",
    "text": "Do. Or do not. There is no try."
  }, {
    "author": "Guy Kawasaki",
    "description": "",
    "text": "Ideas are easy. Implementation is hard."
  }, {
    "author": "Larry Page",
    "description": "",
    "text": "Always deliver more than expected."
  }, {
    "author": "Biz Stone",
    "description": "",
    "text": "Timing, perseverance, and ten years of trying will eventually make you look like an overnight success."
  }, {
    "author": "Malcolm Forbes",
    "description": "",
    "text": "When you cease to dream you cease to live."
  }, {
    "author": "George Patton",
    "description": "",
    "text": "Success is how high you bounce after you hit bottom."
  }]
