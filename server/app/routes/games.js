'use strict';
var router = require('express').Router();
var Game=require('../../db/models/game.js');
module.exports = router;

router.post('/',function(req,res){
    console.log(req.body.data)
    Game.create(req.body)
    .then(function(game){
        if(game){
            res.send(game);
        }
        else{
            res.sendStatus(400);
        }
    })
});
router.get('/',function (req, res) {
    Game.findAll()
    .then(function(games){
        res.send(games);
    })
});

router.get('/:hash',function (req, res) {
    console.log(req.params.hash);
    Game.findOne({where: {hash: req.params.hash}})
    .then(function(game){
        if(game){
            res.send(game);
        }
        else{
            res.sendStatus(404)
        }
    })
});