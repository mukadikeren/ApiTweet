const tweets = require('../model/tweetModel');


const getAll = (req, res) => { 
    res.send(tweets);
 }


const getOne = (req, res) => {
    const id = parseInt(req.params.id);
    const tweet = tweets.find(tweet => tweet.id === id);
    res.send(tweet);
 }

const createOne = (req, res) => { 
    tweets.push(req.body);
    res.send('Le poste a été créé');
}

const deleteOne = (req, res) => { 
    const id = parseInt(req.params.id);
    const index = tweets.findIndex(tweet => tweet.id === id);
    tweets.splice(index, 1);
    res.send("Tweet supprimé");
}

module.exports = { getAll, getOne, createOne, deleteOne };