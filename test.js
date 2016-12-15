// fs is an NPM package for reading and writing files
var fs = require("fs");
var spotify = require('spotify');
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


//////////////spotify api commands 

function spotifyThisSong(command2){
  //console.log(command2);

spotify.search({ type: 'track', query: command2 }, function(err, data) {
    if ( err ) {
        console.log('Error occurred: ' + err);
        return;
    }
 console.log(JSON.stringify(data, null, 2))
 console.log(track[i=0]);
    // Do something with 'data' 
});


// var spotifyApi = new SpotifyWebApi();
// //wrong info in () had id but would return only spanish artist. so tried new method, still buggie

// spotifyApi.getArtist('2hazSY4Ef3aB9ATXW7F5w3')
//   .then(function(data) {
//     console.log('Artist information', data.body);
//   }, function(err) {
//     console.error(err);
//   });

/*spotifyApi.get('Artist information', function(error, artist, track, album){
    
    if (command2 ) {
      console.log('Artist information', data.body); 
    }

    else {
        console.log('"The Sign" by Ace of Base');
      }
    
 

});

*/

};

