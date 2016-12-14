// fs is an NPM package for reading and writing files
var fs = require("fs");
var keys = require("./keys.js");
var Twitter = require('twitter');

var client = new Twitter({
  consumer_key: keys.twitterKeys.consumer_key,
  consumer_secret: keys.twitterKeys.consumer_secret,
  access_token_key: keys.twitterKeys.access_token_key,
  access_token_secret: keys.twitterKeys.access_token_secret
});

var command = process.argv[2];
var command2 = process.argv[3];

	if (command === 'my-tweets') {
		myTweets();
	} else if (command === 'movie-this') {
		movieThis(command2);
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
	client.get('statuses/user/timeline', function(error, tweets, response) {
  if(error) throw error;
  console.log(tweets);  // The favorites. 
  console.log(response);  // Raw response object. 
});
};

function movieThis(command2){
	console.log(command2);
};

function spotifyThisSong(command2){
	console.log(command2);
};

function doWhatItSays(command2){
	console.log(command2);
};



//to grab data from the keys.js file...
// fs.readFile("keys.js", "utf8", function(data) {

//   // We will then print the contents of data inside keys.js file
//   console.log(data);

//   // Then split it by commas (to make it more readable)
//   var keys = data.split(",");

//   // We will then re-display the content as an array for later use.
//   console.log(keys);

// });

// /////twitter from npm, copyright 
// if process.argv[2] == 'my-tweets' {
// 	console.log(///////)
// };





// client.get(path, params, callback);

// client.stream(path, params, callback);
