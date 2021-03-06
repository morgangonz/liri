// fs is an NPM package for reading and writing files
var fs = require("fs");
var key = require("./keys.js");
var Twitter = require('twitter');
var request = require("request");
var spotify = require('spotify');



var command = process.argv[2];
var command2 = process.argv[3];

var queryUrl = "http://www.omdbapi.com/?t=" + command2 + "&y=&plot=short&r=json";

	if (command === 'my-tweets') {
		myTweets();
	} else if (command === 'movie-this') {
		if (command2 === undefined) {
			console.log('Title: Mr.Nobody ' ); 
		    console.log('Year: 2009');
		    console.log('IMDB Rating: 7.9'); 
		    console.log('Country: Belgium, Germany, Canada, France');
		    console.log('Language: English, Mohawk');
		    console.log('Plot: A boy stands on a station platform as a train is about to leave. Should he go with his mother or stay with his father? Infinite possibilities arise from this decision. As long as he doesn\'t choose, anything is possible.');
		    console.log('Actors: Jared Leto, Sarah Polley, Diane Kruger, Linh Dan Pham');	

		} else {
		movieThis(command2);
		}
	} else if (command === 'spotify-this-song') {
		spotifyThisSong(command2);
	} else if (command === 'do-what-it-says') {
		doWhatItSays(command2);
	}else if(command === undefined){
		console.log('You forgot to enter a command!');
	} else {
		console.log('That is not a command');
	};




function myTweets(){

	

	var client = new Twitter({
              consumer_key: key.twitterKeys.consumer_key,
              consumer_secret: key.twitterKeys.consumer_secret,
              access_token_key: key.twitterKeys.access_token_key,
              access_token_secret: key.twitterKeys.access_token_secret,
            });

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

function movieThis(command2){
	//console.log(queryUrl);
	request(queryUrl, function(error, response, body) {
		var newBody = JSON.parse(body)
	  // If the request is successful
	  if (!error && response.statusCode === 200) {

	    console.log('Title: ' + newBody.Title); 
	    console.log('Year: ' + newBody.Year);
	    console.log('IMDB Rating: ' + newBody.imdbRating); 
	    console.log('Country: ' + newBody.Country);
	    console.log('Language: ' + newBody.Language);
	    console.log('Plot: ' + newBody.Plot);
	    console.log('Actors: ' + newBody.Actors);

   
    
	  } 
	   
		

	});
};



////////////random.txt file - read it 

function doWhatItSays(command2){
 


  fs.readFile("random.txt", "utf8", function(error, data) {

  console.log(data);

  });
}


/////////////////////////////spotify command 

function spotifyThisSong(command2){
  //console.log(command2);

spotify.search({ type: 'track', query: command2 }, function(err, data) {
    if ( err ) {
        console.log('Error occurred: ' + err);
        return;
    }
   else {
    
    var songInfo = data.tracks.items[0];
 	console.log(songInfo.artists[0].name);
	console.log(songInfo.name);
	console.log(songInfo.album.name);
	console.log(songInfo.preview_url);
	
	}	
   
});




};



