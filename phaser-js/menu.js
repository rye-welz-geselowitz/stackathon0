var menuState={
     create: function(){
        game.add.sprite(0,0,'sky');
        var challengeString1=gameData.subject.name+' invites you to hone your pronoun skills!'
        var challengeString2='Choose a Game:'
        var readySpeed=game.add.text(game.world.centerX,game.world.centerY+40,'Speed Clicker',mediumWhite); 
        var readyRain=game.add.text(game.world.centerX,game.world.centerY+80,'Word Rain',mediumWhite); 
        var challenge=game.add.text(game.world.centerX,game.world.centerY-40,challengeString1,mediumWhite); 
        var challenge2=game.add.text(game.world.centerX,game.world.centerY,challengeString2,largeWhite); 
        challenge.anchor.set(.5);
        challenge2.anchor.set(0.5)
        readySpeed.anchor.set(.5);
        readySpeed.inputEnabled=true;
        readySpeed.events.onInputOver.add(overReady,this);
        readySpeed.events.onInputOut.add(overReadyLeave,this);
        readySpeed.events.onInputDown.add(startSpeed,this);
        readyRain.anchor.set(.5);
        readyRain.inputEnabled=true;
        readyRain.events.onInputOver.add(overReady,this);
        readyRain.events.onInputOut.add(overReadyLeave,this);
        readyRain.events.onInputDown.add(startRain,this);
   }
}

function startSpeed(){
    game.state.start('instructions');
}

function startRain(){
    game.state.start('wordrain-instructions');
}