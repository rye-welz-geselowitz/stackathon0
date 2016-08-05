    var instructionsState={
         create: function(){
            game.add.sprite(0,0,'mountains');
            var challengeString1=subjectName+' uses '+subjectPGP+' pronouns.'
            var challengeString2=controlName+' uses '+controlPGP+' pronouns.'
            var instructions=game.add.text(game.world.centerX,game.world.centerY,'Fill in the sentences with the correct pronouns.',mediumGray); 
            var readyButton=game.add.text(game.world.centerX,game.world.centerY+instructions.height*1.5,'Play',mediumWhite); 
            var challenge=game.add.text(game.world.centerX,game.world.centerY-instructions.height*3,challengeString1,mediumGray); 
            var challenge2=game.add.text(game.world.centerX,game.world.centerY-instructions.height*1.5,challengeString2,mediumGray); 
            var challenge3=game.add.text(game.world.centerX,game.world.centerY-instructions.height*1.5,challengeString2,mediumGray);     
            instructions.anchor.set(.5);
            challenge.anchor.set(.5);
            challenge2.anchor.set(0.5)
            challenge3.anchor.set(0.5)
            readyButton.anchor.set(.5);
            readyButton.inputEnabled=true;
            readyButton.events.onInputOver.add(overReady,this);
            readyButton.events.onInputOut.add(overReadyLeave,this);
            readyButton.events.onInputDown.add(clickReady,this);
       }
    }