$(document).ready(function(){
 var randomVerse, randomNum,randomBook;
  getVerse();
  function getVerse(){
    
    var verses=["Trust in the LORD with all your heart and lean not on your own understanding.", "I believe I will see the goodness of the Lord in the land of the living. Wait on the Lord; be strong, and may your heart be stout; wait on the Lord","The LORD is my strength and my defense; he has become my salvation.", "Take delight in the LORD and he will give you the desires of your heart.","Be still, and know that I am God; I will be exalted among the nations, I will be exalted in the earth.","Create in me a pure heart, O God, and renew a steadfast spirit within me.","Do not conform to the pattern of this world, but be transformed by the renewing of your mind. Then you will be able to test and approve what God’s will is—his good, pleasing and perfect will.", '\"For I know the plans I have for you"\, declares the Lord, \"plans to prosper you and not to harm you, plans to give you hope and a future.\"', "And the peace of God, which transcends all understanding, will guard your hearts and your minds in Christ Jesus.", "So do not fear, for I am with you; do not be dismayed, for I am your God. I will strengthen you and help you; I will uphold you with my righteous right hand.","Therefore do not worry about tomorrow, for tomorrow will worry about itself. Each day has enough trouble of its own.","In all your ways submit to him, and he will make your paths straight.", "I can do all things through Christ who strengthens me."];
    var book=["-Proverbs 3:5","-Psalm 27:13-14","-Psalm 118:14", "-Psalms 37:4","-Psalms 46:10", "-Psalm 51:10", "-Romans 12:2","-Jeremiah 29:11","-Philippians 4:7","-Isaiah 41:10", "-Matthew 6:34",  "-Proverbs 3:6" , "-Philipians 4:13"];
    
    randomNum = Math.floor((Math.random()*verses.length));
     randomVerse = verses[randomNum];
     randomBook = book[randomNum];
   
    $(".verse").text(randomVerse);
    $(".book").text(randomBook);
  }
    
    $(".tweetbtn").on("click", function(){
      window.open("https://twitter.com/intent/tweet?text=" + randomVerse + " " + randomBook);
    });
  
  
    $('.versebtn').on("click", function(){
      getVerse();
    });
  
  
});




