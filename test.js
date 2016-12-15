
// var key = require(./keys.js)
// var Twitter = require('twitter');



// var client = new Twitter({
//   consumer_key: keys.twitterKeys.consumer_key,
//   consumer_secret: keys.twitterKeys.consumer_secret,
//   access_token_key: keys.twitterKeys.access_token_key,
//   access_token_secret: keys.twitterKeys.access_token_secret
// });

// var command = process.argv[2];
// var command2 = process.argv[3];

// 	if (command === 'my-tweets') {
// 		myTweets();
// 	};	


// function myTweets(){

// 	var params = { screenName: 'morgangonzz'};

// 	client.get('statuses/user/timeline', function(error, tweets, response) {
// 	  if(error) throw error;
// 	  for (var i = 0; i < tweets.length; i++) {
// 	  console.log(tweets[i].text);  // The favorites. 
// 	  //console.log(response);  // Raw response object. 
// 		}
// 	});
// };
var action = process.argv[2];

switch(action){
	case "my-tweets":
    twitter();
    break;
    case "movie-this":
    movie();
    break;
}


function twitter() {
    // this is getting the keys from the file    
        var key = require('./keys.js');

      // requiring twitter
        var Twitter = require('twitter');

    // setting keys to the client variable 
        var client = new Twitter({
              consumer_key: key.twitterKeys.consumer_key,
              consumer_secret: key.twitterKeys.consumer_secret,
              access_token_key: key.twitterKeys.access_token_key,
              access_token_secret: key.twitterKeys.access_token_secret,
            });
        //

        var params = {screen_name: 'morgangonzz'};

        client.get('statuses/user_timeline', params, function(error, tweets, response) {

         if(!error ) {

            for( var i = 0; i < tweets.length; i ++){

            console.log(tweets[i].text);

            }

          }else {

            console.log(error);
          }
          
     });

}
 function movie(){

 }