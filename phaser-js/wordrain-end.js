    var wordrainEndState={
        create: function(){
            game.add.sprite(0,0,'water_mountains');
            //Report scores
            var reportLabel=game.add.text(game.world.centerX,game.world.centerY,'Game Over. Score: '+gameData.currentGame.score,mediumGray); 
            reportLabel.anchor.set(.5);  

            //Menu button
            var readyButton=game.add.text(game.world.centerX,game.world.centerY+120,'Menu',mediumWhite); 
            readyButton.anchor.set(.5);
            readyButton.inputEnabled=true;
            readyButton.events.onInputOver.add(overReady,this);
            readyButton.events.onInputOut.add(overReadyLeave,this);
            readyButton.events.onInputDown.add(toMenu,this);
            //TODO: find a differne way to do this

            initiateRoundClicker();
        }
    }