var wordrainInstructionsState={
     create: function(){
        var subjectName=gameData.subject.name;
        var subjectPGP=getPronounString(gameData.subject.PGP);
        // game.add.sprite(0,0,'water_mountains');
        var challengeString1='Catch the words associated with '+subjectName+'!'
        var challengeString2="(Don't forget those "+subjectPGP+' pronouns.)'
        var instructions=game.add.text(game.world.centerX,game.world.centerY+40,'Avoid other words!',mediumGreen); 
        var readyButton=game.add.text(game.world.centerX,game.world.centerY+80,'Play',mediumWhite); 
        var challenge=game.add.text(game.world.centerX,game.world.centerY-40,challengeString1,mediumGreen); 
        var challenge2=game.add.text(game.world.centerX,game.world.centerY,challengeString2,mediumGreenPlus);     
        instructions.anchor.set(.5);
        challenge.anchor.set(.5);
        challenge2.anchor.set(0.5)
        readyButton.anchor.set(.5);
        readyButton.inputEnabled=true;
        readyButton.events.onInputOver.add(overReady,this);
        readyButton.events.onInputOut.add(overReadyLeave,this);
        readyButton.events.onInputDown.add(startWordRain,this);
   }
}

function startWordRain(){
    game.state.start('wordrain');
}