 function newQuote() {
   var quotesArr = [];
   //use quotes api to add quotes into array
   $.ajax({
     url: 'https://quotesondesign.com/wp-json/posts?filter[orderby]=rand&filter[posts_per_page]=20',
     success: function(content) {
       content.forEach(function(val) {
         quotesArr.push(val);
       });

       changeQuote(quotesArr);

     },

     cache: false
   });

 }

 function changeQuote(quotesArr) {
   //get randnum to pick out random quote from array
   
   var randNum = Math.floor(Math.random() * quotesArr.length);
//if content is too long in length, find a another random quote until the parameter is met. Button gets pushed down if quote is too long.  
   while(quotesArr[randNum].content.length >350) {
     randNum = Math.floor(Math.random() * quotesArr.length);
}
  //set content to the random quote selected
                              document.getElementById('content').innerHTML = quotesArr[randNum].content;
   var quote = quotesArr[randNum].content;
   
   //display the author of quote
   var author = quotesArr[randNum].title;
   $("#author").html("- " + quotesArr[randNum].title);

   //add pretext for tweet
   $(".twitter-share-button").attr("href", "https://twitter.com/intent/tweet?text=" + quote + " - " + author);
 }