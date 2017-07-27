const quotes = [
  {
    author: 'Kevin Kruse',
    description:
      'Professor of History at Princeton University & NY Times bestselling author',
    text: 'Life isn’t about getting and having, it’s about giving and being.',
  },
  {
    author: 'Napoleon Hill',
    description:
      'American author & early producer of personal-success literature',
    text: 'Whatever the mind of man can conceive and believe, it can achieve.',
  },
  {
    author: 'Albert Einstein',
    description:
      'German-born theoretical physicist & developer of the general theory of relativity',
    text: 'Strive not to be a success, but rather to be of value.',
  },
  {
    author: 'Robert Frost',
    description: 'American poet',
    text:
      'Two roads diverged in a wood, and I took the one less traveled by, and that has made all the difference.',
  },
  {
    author: 'Florence Nightingale',
    description:
      'English social reformer and statistician & founder of modern nursing',
    text: 'I attribute my success to this: I never gave or took any excuse.',
  },
  {
    author: 'Wayne Gretzky',
    description: 'Canadian professional ice hockey player',
    text: 'You miss 100% of the shots you don’t take.',
  },
  {
    author: 'Amelia Earhart',
    description:
      'American aviation pioneer & first female aviator to fly solo across the Atlantic Ocean',
    text:
      'The most difficult thing is the decision to act, the rest is merely tenacity.',
  },
  {
    author: 'W. Clement Stone',
    description:
      'Businessman, philanthropist & New Thought self-help book author',
    text: 'Definiteness of purpose is the starting point of all achievement.',
  },
  {
    author: 'John Lennon',
    description: 'English singer, songwriter & co-founder of the Beatles',
    text: 'Life is what happens to you while you’re busy making other plans.',
  },
  {
    author: 'Earl Nightingale',
    description: 'American radio personality, writer, speaker & author',
    text: 'We become what we think about.',
  },
  {
    author: 'Charles Swindoll',
    description:
      'Evangelical Christian pastor, author, educator & radio preacher',
    text: 'Life is 10% what happens to me and 90% of how I react to it.',
  },
  {
    author: 'Alice Walker',
    description: 'American novelist, short story writer, poet & activist',
    text:
      'The most common way people give up their power is by thinking they don’t have any.',
  },
  {
    author: 'Chinese Proverb',
    description: '',
    text:
      'The best time to plant a tree was 20 years ago. The second best time is now.',
  },
  {
    author: 'Socrates',
    description:
      'Classical Greek philosopher & one of the founders of Western philosophy',
    text: 'An unexamined life is not worth living.',
  },
  {
    author: 'Steve Jobs',
    description:
      'American information technology entrepreneur, inventor & co-founder of Apple Inc.',
    text: 'Your time is limited, so don’t waste it living someone else’s life.',
  },
  {
    author: 'Vince Lombardi',
    description: 'American football player, coach & executive',
    text: 'Winning isn’t everything, but wanting to win is.',
  },
  {
    author: 'Stephen Covey',
    description: 'American educator, author, businessman & keynote speaker',
    text:
      'I am not a product of my circumstances. I am a product of my decisions.',
  },
  {
    author: 'Pablo Picasso',
    description:
      'Spanish painter, sculptor, printmaker, ceramicist, stage designer, poet & playwright',
    text:
      'Every child is an artist. The problem is how to remain an artist once he grows up.',
  },
  {
    author: 'Christopher Columbus',
    description: 'Italian explorer, navigator & colonizer',
    text:
      'You can never cross the ocean until you have the courage to lose sight of the shore.',
  },
  {
    author: 'Maya Angelou',
    description: 'American author, poet & civil rights activist',
    text:
      'I’ve learned that people will forget what you said, people will forget what you did, but people will never forget how you made them feel.',
  },
  {
    author: 'Jim Rohn',
    description: 'American entrepreneur, author & motivational speaker',
    text: 'Either you run the day, or the day runs you.',
  },
  {
    author: 'Henry Ford',
    description: 'American industrialist & founder of the Ford Motor Company',
    text: 'Whether you think you can or you think you can’t, you’re right.',
  },
  {
    author: 'Mark Twain',
    description: 'American author & humorist',
    text:
      'The two most important days in your life are the day you are born and the day you find out why.',
  },
  {
    author: 'Johann Wolfgang von Goethe',
    description: 'German writer & statesman',
    text:
      'Whatever you can do, or dream you can, begin it. Boldness has genius, power and magic in it.',
  },
  {
    author: 'Frank Sinatra',
    description: 'American singer, actor & producer',
    text: 'The best revenge is massive success.',
  },
  {
    author: 'Zig Ziglar',
    description: 'American author, salesman & motivational speaker',
    text:
      'People often say that motivation doesn’t last. Well, neither does bathing. That’s why we recommend it daily.',
  },
  {
    author: 'Anais Nin',
    description: 'Essayist & memoirist',
    text: 'Life shrinks or expands in proportion to one’s courage.',
  },
  {
    author: 'Vincent Van Gogh',
    description: 'Dutch post-Impressionist painter',
    text:
      'If you hear a voice within you say “you cannot paint,” then by all means paint, and that voice will be silenced.',
  },
  {
    author: 'Aristotle',
    description: 'Greek philosopher & scientist',
    text:
      'There is only one way to avoid criticism: do nothing, say nothing, and be nothing.',
  },
  {
    author: 'Ralph Waldo Emerson',
    description: 'American essayist, lecturer & poet',
    text:
      'The only person you are destined to become is the person you decide to be.',
  },
  {
    author: 'Henry David Thoreau',
    description:
      'American author, poet, philosopher, abolitionist, naturalist, tax resister, development critic, surveyor & historian',
    text:
      'Go confidently in the direction of your dreams. Live the life you have imagined.',
  },
  {
    author: 'Erma Bombeck',
    description: 'American humorist',
    text:
      'When I stand before God at the end of my life, I would hope that I would not have a single bit of talent left and could say, I used everything you gave me.',
  },
  {
    author: 'Booker T. Washington',
    description:
      'American educator, author, orator & advisor to presidents of the United States',
    text:
      'Few things can help an individual more than to place responsibility on him, and to let him know that you trust him.',
  },
  {
    author: ' Ancient Indian Proverb',
    description: '',
    text:
      'Certain things catch your eye, but pursue only those that capture the heart.',
  },
  {
    author: 'Theodore Roosevelt',
    description: '26th President of the United States',
    text: 'Believe you can and you’re halfway there.',
  },
  {
    author: 'Plato',
    description:
      'Philosopher in Classical Greece & founder of the Academy in Athens',
    text:
      'We can easily forgive a child who is afraid of the dark; the real tragedy of life is when men are afraid of the light.',
  },
  {
    author: 'Maimonides',
    description:
      'Preeminent medieval Sephardic Jewish philosopher & astronomer',
    text: 'Teach thy tongue to say, “I do not know,” and thous shalt progress.',
  },
  {
    author: 'Arthur Ashe',
    description: 'American World No. 1 professional tennis player',
    text: 'Start where you are. Use what you have. Do what you can.',
  },
  {
    author: 'Japanese Proverb',
    description: '',
    text: 'Fall seven times and stand up eight.',
  },
  {
    author: 'Helen Keller',
    description: 'American author, political activist & lecturer',
    text:
      'When one door of happiness closes, another opens, but often we look so long at the closed door that we do not see the one that has been opened for us.',
  },
  {
    author: 'Confucius',
    description: 'Chinese teacher, editor, politician & philosopher',
    text: 'Everything has beauty, but not everyone can see.',
  },
  {
    author: 'Anne Frank',
    description: 'German-born diarist & writer',
    text:
      'How wonderful it is that nobody need wait a single moment before starting to improve the world.',
  },
  {
    author: 'Dalai Lama',
    description: 'Monk of Tibetan Buddhism',
    text:
      'Happiness is not something readymade.  It comes from your own actions.',
  },
  {
    author: 'Sheryl Sandberg',
    description: 'American technology executive, activist & author',
    text:
      'If you’re offered a seat on a rocket ship, don’t ask what seat! Just get on.',
  },
  {
    author: 'Unknown',
    description: '',
    text:
      'You can’t fall if you don’t climb. But there’s no joy in living your whole life on the ground.',
  },
  {
    author: 'Marie Curie',
    description:
      'Polish & naturalized-French physicist, chemist & radioactivity pioneer',
    text:
      'We must believe that we are gifted for something, and that this thing, at whatever cost, must be attained.',
  },
  {
    author: 'Les Brown',
    description:
      'American motivational speaker, author, radio DJ, former television host & former politician',
    text:
      'Too many of us are not living our dreams because we are living our fears.',
  },
  {
    author: 'Joshua J. Marine',
    description: '',
    text:
      'Challenges are what make life interesting and overcoming them is what makes life meaningful.',
  },
  {
    author: 'Booker T. Washington',
    description:
      'American educator, author, orator & advisor to presidents of the United States',
    text: 'If you want to lift yourself up, lift up someone else.',
  },
  {
    author: 'Leonardo da Vinci',
    description: 'Italian polymath',
    text:
      'I have been impressed with the urgency of doing. Knowing is not enough; we must apply. Being willing is not enough; we must do.',
  },
  {
    author: 'Jamie Paolinetti',
    description: '',
    text:
      'Limitations live only in our minds. But if we use our imaginations, our possibilities become limitless.',
  },
  {
    author: 'Bob Dylan',
    description: 'American singer-songwriter, artist & writer',
    text:
      'What’s money? A man is a success if he gets up in the morning and goes to bed at night and in between does what he wants to do.',
  },
  {
    author: 'Benjamin Franklin',
    description: 'One of the Founding Fathers of the United States',
    text: 'I didn’t fail the test. I just found 100 ways to do it wrong.',
  },
  {
    author: 'Bill Cosby',
    description: 'American stand-up comedian, actor & author',
    text:
      'In order to succeed, your desire for success should be greater than your fear of failure.',
  },
  {
    author: ' Albert Einstein',
    description:
      'German-born theoretical physicist & developer of the general theory of relativity',
    text: 'A person who never made a mistake never tried anything new.',
  },
  {
    author: 'Chinese Proverb',
    description: '',
    text:
      'The person who says it cannot be done should not interrupt the person who is doing it.',
  },
  {
    author: 'Vincent van Gogh',
    description: 'Dutch post-Impressionist painter',
    text: 'I would rather die of passion than of boredom.',
  },
  {
    author: 'Unknown',
    description: '',
    text:
      'A truly rich man is one whose children run into his arms when his hands are empty.',
  },
  {
    author: 'Ann Landers',
    description: 'American advice columnist & media celebrity',
    text:
      'It is not what you do for your children, but what you have taught them to do for themselves, that will make them successful human beings.',
  },
  {
    author: 'Abigail Van Buren',
    description: 'American advice columnist & radio show host',
    text:
      'If you want your children to turn out well, spend twice as much time with them, and half as much money.',
  },
  {
    author: 'Farrah Gray',
    description:
      'American businessman, investor, philanthropist, author, columnist & motivational speaker',
    text:
      'Build your own dreams, or someone else will hire you to build theirs.',
  },
  {
    author: 'Jesse Owens',
    description:
      'American track and field athlete & four-time Olympic gold medalist',
    text:
      'The battles that count aren’t the ones for gold medals. The struggles within yourself–the invisible battles inside all of us–that’s where it’s at.',
  },
  {
    author: 'Claus Moser',
    description: 'British statistician',
    text: 'Education costs money. But then so does ignorance.',
  },
  {
    author: 'Rosa Parks',
    description: 'African American civil rights activist',
    text:
      'I have learned over the years that when one’s mind is made up, this diminishes fear.',
  },
  {
    author: 'Confucius',
    description: 'Chinese teacher, editor, politician & philosopher',
    text: 'It does not matter how slowly you go as long as you do not stop.',
  },
  {
    author: 'Oprah Winfrey',
    description:
      'American media proprietor, talk show host, actress, producer & philanthropist',
    text:
      'If you look at what you have in life, you’ll always have more. If you look at what you don’t have in life, you’ll never have enough.',
  },
  {
    author: 'Dalai Lama',
    description: 'Monk of Tibetan Buddhism',
    text:
      'Remember that not getting what you want is sometimes a wonderful stroke of luck.',
  },
  {
    author: 'Maya Angelou',
    description: 'American author, poet & civil rights activist',
    text: 'You can’t use up creativity. The more you use, the more you have.',
  },
  {
    author: 'Norman Vaughan',
    description: 'English comedian',
    text: 'Dream big and dare to fail.',
  },
  {
    author: 'Martin Luther King Jr.',
    description:
      'American Baptist minister, activist, humanitarian & leader in the African-American Civil Rights Movement',
    text:
      'Our lives begin to end the day we become silent about things that matter.',
  },
  {
    author: 'Teddy Roosevelt',
    description: '26th President of the United States',
    text: 'Do what you can, where you are, with what you have.',
  },
  {
    author: 'Tony Robbins',
    description:
      'American motivational speaker, personal finance instructor & self-help author',
    text:
      'If you do what you’ve always done, you’ll get what you’ve always gotten.',
  },
  {
    author: 'Gloria Steinem',
    description:
      'American feminist, journalist & social and political activist',
    text: 'Dreaming, after all, is a form of planning.',
  },
  {
    author: 'Mae Jemison',
    description:
      'American physician, NASA astronaut & first African American woman to travel in space',
    text:
      'It’s your place in the world; it’s your life. Go on and do all you can with it, and make it the life you want to live.',
  },
  {
    author: 'Beverly Sills',
    description: 'American operatic soprano',
    text:
      'You may be disappointed if you fail, but you are doomed if you don’t try.',
  },
  {
    author: 'Eleanor Roosevelt',
    description:
      'American politician, diplomat, activist & longest-serving First Lady of the United States',
    text: 'Remember no one can make you feel inferior without your consent.',
  },
  {
    author: 'Grandma Moses',
    description: 'American folk artist',
    text: 'Life is what we make it, always has been, always will be.',
  },
  {
    author: 'Ayn Rand',
    description:
      'Russian-born American novelist, philosopher, playwright & screenwriter',
    text:
      'The question isn’t who is going to let me; it’s who is going to stop me.',
  },
  {
    author: 'Henry Ford',
    description: 'American industrialist & founder of the Ford Motor Company',
    text:
      'When everything seems to be going against you, remember that the airplane takes off against the wind, not with it.',
  },
  {
    author: 'Abraham Lincoln',
    description: '16th President of the United States',
    text:
      'It’s not the years in your life that count. It’s the life in your years.',
  },
  {
    author: 'Norman Vincent Peale',
    description: 'American minister, author & progenitor of positive thinking',
    text: 'Change your thoughts and you change your world.',
  },
  {
    author: 'Benjamin Franklin',
    description: 'One of the Founding Fathers of the United States',
    text: 'Either write something worth reading or do something worth writing.',
  },
  {
    author: 'Audrey Hepburn',
    description: 'British actress and humanitarian',
    text: 'Nothing is impossible, the word itself says, “I’m possible!”',
  },
  {
    author: 'Steve Jobs',
    description:
      'American information technology entrepreneur, inventor & co-founder of Apple Inc.',
    text: 'The only way to do great work is to love what you do.',
  },
  {
    author: 'Zig Ziglar',
    description: 'American author, salesman & motivational speaker',
    text: 'If you can dream it, you can achieve it.',
  },
  {
    author: 'James Burgh',
    description: 'British Whig politician',
    text:
      'In disputes upon moral or scientific points, ever let your aim be to come at truth, not to conquer your opponent.',
  },
  {
    author: 'Conrad Hilton',
    description: 'American hotelier & founder of the Hilton Hotels chain',
    text:
      'Achievement seems to be connected with action. Successful men and women keep moving. They make mistakes but they don’t quit.',
  },
  {
    author: 'Maxi Foreman',
    description: '',
    text:
      'Ambition is the steam that drives men forward on the road to success. Only the engine under full steam can make the grade.',
  },
  {
    author: 'Dennis Waitley',
    description: 'American motivational speaker, writer & consultant',
    text:
      'Continuous learning is the minimum requirement for success in any field.',
  },
  {
    author: 'Henry Ford',
    description: 'American industrialist & founder of the Ford Motor Company',
    text:
      'Enthusiasm is the sparkle in your eyes, the swing in your gait, the grip of your hand and the irresistible surge of will and energy to execute your ideas.',
  },
  {
    author: 'Pearl Buck',
    description: 'American writer and novelist',
    text:
      'The secret of joy in work is contained in one word: excellence. To know how to do something well is to enjoy it.',
  },
  {
    author: 'Yoda',
    description: 'Jedi master',
    text: 'Do. Or do not. There is no try.',
  },
  {
    author: 'Guy Kawasaki',
    description: 'American marketing executive',
    text: 'Ideas are easy. Implementation is hard.',
  },
  {
    author: 'Larry Page',
    description:
      'American computer scientist, Internet entrepreneur & co-founder of Google Inc.',
    text: 'Always deliver more than expected.',
  },
  {
    author: 'Biz Stone',
    description: 'Co-founder of Twitter Inc.',
    text:
      'Timing, perseverance, and ten years of trying will eventually make you look like an overnight success.',
  },
  {
    author: 'Malcolm Forbes',
    description: 'American entrepreneur & publisher of Forbes magazine',
    text: 'When you cease to dream you cease to live.',
  },
  {
    author: 'George Patton',
    description: 'Senior officer of the United States Army',
    text: 'Success is how high you bounce after you hit bottom.',
  },
];
