var quotes = [
    {content: "Get busy living or get busy dying.", source: "-Stephen King"},
    {content: "There is no such thing as a single-issue struggle because we do not live single-issue lives.", source: "-Audre Lorde"},
    {content: "Never let the fear of striking out keep you from playing the game.", source: "-Babe Ruth"},
    {content: "The type of man who will be intimidated by me is exactly the type of man I have no interest in.", source: "-Chimamanda Ngozi Adichie"},
    {content: "Prejudices... are most difficult to eradicate from the heart whose soil has never been loosened or fertilised by education", source: "-Charlotte Brontë"},
    {content: "Life is ten percent what happens to you and ninety percent how you respond to it.", source: "-Charles Swindoll"},
    {content: "Everything negative – pressure, challenges – is all an opportunity for me to rise.", source: "-Kobe Bryant"},
    {content: "A people without the knowledge of their past history, origin and culture is like a tree without roots.", source: "-Marcus Garvey"},
  {content: "Life is really simple, but men insist on making it complicated.", source: "-Confucius"},
  {content: "When we do the best we can, we never know what miracle is wrought in our life or the life of another.", source: "-Helen Keller"},
  {content: "Freedom is never granted; it is won. Justice is never given; it is exacted.", source: "-A. Philip Randolph"},
  {content: "There may be times when we are powerless to prevent injustice, but there must never be a time when we fail to protest.", source: "-Elie Wiesel"},
  {content: "Turn your wounds into wisdom..", source: "-Oprah Winfrey"},
  {content: "We have to talk about liberating minds as well as liberating society.", source: "-Angela Davis"},
  {content: "The unexamined life is not worth living.", source: "-Socrates"},
  {content: "The best portion of a good man’s life is his little nameless, unencumbered acts of kindness and of love.", source: "-Wordsworth"},
  {content: "The oppression of women knows no ethnic nor racial boundaries... but that does not mean it is identical within those boundaries", source: "-Audre Lorde"},
  
  ]
  function getQuote() {
    //generate random number within array length
    var randomNumber = Math.floor(Math.random() * quotes.length);
    console.clear();
    console.log("randomNumber " + randomNumber);
    console.log("quotes.length "+ quotes.length);
    
    
    //use random number to get quote and source, append to paragraph
    var quoteContent = quotes[randomNumber].content;
    var quoteSource = quotes[randomNumber].source;
    document.getElementById("quote-text").innerHTML = quoteContent;
    document.getElementById("quote-source").innerHTML = quoteSource;
     
  }
