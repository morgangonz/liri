// fs is an NPM package for reading and writing files
var fs = require("fs");
var request = require("request");
var SpotifyWebApi = require('spotify-web-api-node');
var queryUrl = "http://www.omdbapi.com/?t=" + command2 + "&y=&plot=short&r=json";

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


function movieThis(command2){
  //console.log(queryUrl);
  request(queryUrl, function(error, response, body) {

    // If the request is successful
    if (!error && response.statusCode === 200) {

      console.log('Title: ' + JSON.parse(body).Title); 
      console.log('Year: ' + JSON.parse(body).Year);
      console.log('IMDB Rating: ' + JSON.parse(body).imdbRating); 
      console.log('Country: ' + JSON.parse(body).Country);
      console.log('Language: ' + JSON.parse(body).Language);
      console.log('Plot: ' + JSON.parse(body).Plot);
      console.log('Actors: ' + JSON.parse(body).Actors);

   
    
    } 

var fs = require("fs");

// This block of code will read from the "movies.txt" file.
// It's important to include the "utf8" parameter or the code will provide stream data (garbage)
// The code will store the contents of the reading inside the variable "data"
fs.readFile("mr.nobody.txt", "utf8", function(error, data) {

  // We will then print the contents of data
  console.log(data);

  // Then split it by commas (to make it more readable)


});

      
     
    

  });
};











//////////////spotify api commands 

/*function spotifyThisSong(){
  //console.log(command2);




var spotifyApi = new SpotifyWebApi();
//wrong info in () had id but would return only spanish artist. so tried new method, still buggie
/*
spotifyApi.getArtist('2hazSY4Ef3aB9ATXW7F5w3')
  .then(function(data) {
    console.log('Artist information', data.body);
  }, function(err) {
    console.error(err);
  });
*

spotifyApi.get('Artist information', function(error, artist, track, album){
    
    if (command2 ) {
      console.log('Artist information', data.body); 
    }

    else {
        console.log('"The Sign" by Ace of Base');
      }
    
  

});
*/




