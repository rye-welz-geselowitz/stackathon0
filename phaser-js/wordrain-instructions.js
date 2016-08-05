var wordrainInstructionsState={
     create: function(){
        var subjectName=gameData.subject.name;
        var subjectPGP=getPronounString(gameData.subject.PGP);
        game.add.sprite(0,0,'water_mountains');
        var challengeString1='Catch the words associated with '+subjectName+'!'
        var challengeString2="(Don't forget those "+subjectPGP+' pronouns.)'
        var instructions=game.add.text(game.world.centerX,game.world.centerY,'Avoid other words!',mediumGreen); 
        var readyButton=game.add.text(game.world.centerX,game.world.centerY+instructions.height*1.5,'Play',mediumWhite); 
        var challenge=game.add.text(game.world.centerX,game.world.centerY-instructions.height*3,challengeString1,mediumGreen); 
        var challenge2=game.add.text(game.world.centerX,game.world.centerY-instructions.height*1.5,challengeString2,mediumGreen); 
        var challenge3=game.add.text(game.world.centerX,game.world.centerY-instructions.height*1.5,challengeString2,mediumGreen);     
        instructions.anchor.set(.5);
        challenge.anchor.set(.5);
        challenge2.anchor.set(0.5)
        challenge3.anchor.set(0.5)
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