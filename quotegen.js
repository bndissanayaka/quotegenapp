var quotes = [
    {content: "A feminist is any woman who tells the truth about her life.", source: "-Virginia Woolf"},
    {content: "There is no such thing as a single-issue struggle because we do not live single-issue lives.", source: "-Audre Lorde"},
    {content: "Injustice anywhere is a threat to justice everywhere.", source: "-Martin Luther King, Jr."},
    {content: "The type of man who will be intimidated by me is exactly the type of man I have no interest in.", source: "-Chimamanda Ngozi Adichie"},
    {content: "Prejudices... are most difficult to eradicate from the heart whose soil has never been loosened or fertilised by education", source: "-Charlotte Brontë"},
    {content: "Until we get equality in education, we won't have an equal society.", source: "-Sonia Sotomayor"},
    {content: "Women belong in all places where decisions are being made.", source: "-Ruth Bader Ginsburg"},
    {content: "A people without the knowledge of their past history, origin and culture is like a tree without roots.", source: "-Marcus Garvey"},
  {content: "To deny people their human rights is to challenge their very humanity.", source: "-Nelson Mandela"},
  {content: "A political struggle that does not have women at the heart of it, above it, below it, and within it is no struggle at all.", source: "-Arundhati Roy"},
  {content: "Freedom is never granted; it is won. Justice is never given; it is exacted.", source: "-A. Philip Randolph"},
  {content: "There may be times when we are powerless to prevent injustice, but there must never be a time when we fail to protest.", source: "-Elie Wiesel"},
  {content: "When someone shows you who they are, believe them the first time.", source: "-Maya Angelou"},
  {content: "We have to talk about liberating minds as well as liberating society.", source: "-Angela Davis"},
  {content: "If we aren’t intersectional, some of us, the most vulnerable, are going to fall through the cracks.", source: "-Kimberle Williams Crenshaw"},
  {content: "If you are neutral in situations of injustice, you have chosen the side of the oppressor.", source: "-Desmond Tutu"},
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
