// Code goes here

var app = angular.module("learnNG", []);

app.controller('mainCtrl', function(){
  this.tweet = '';
  this.test = "something";
  this.invalidTweet = function(){
    return this.charactersLeft() < 0;
  };

  this.tweets = ["Tweet 1", "Hello there 2", "Hello here", "Coding House",                  "Angular is aweomse",
  "Forget everythign else",
  "Who needs jQuerty"];

  this.charactersLeft = function(){
    return (140 - this.tweet.length);
  };

  this.addTweet = function(){
    this.tweets.push(this.tweet);
    console.log(this.tweet);
    this.tweet = '';
  };
});
