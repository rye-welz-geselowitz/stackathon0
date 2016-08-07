var instructionsState={
     create: function(){
        initiateRoundClicker();  

        // game.add.sprite(0,0,'mountains');
        //Get pronoun strings
        var subjectPronouns=getPronounString(gameData.subject.PGP);
        var controlPronouns=getPronounString(gameData.currentGame.control.PGP)

        //Print those instructions            
        var challengeString1=gameData.subject.name+' uses '+subjectPronouns+ ' pronouns.';
        var challengeString2=gameData.currentGame.control.name+' uses '+controlPronouns+' pronouns.'
        var instructions=game.add.text(game.world.centerX,game.world.centerY+40,'Fill in the sentences as fast as you can.',mediumGray); 
        var readyButton=game.add.text(game.world.centerX,game.world.centerY+80,'Play',mediumWhite); 
        var challenge=game.add.text(game.world.centerX,game.world.centerY,challengeString1,mediumGrayPlus); 
        var challenge2=game.add.text(game.world.centerX,game.world.centerY-40,challengeString2,mediumGray); 
        // var challenge3=game.add.text(game.world.centerX,game.world.centerY-40,challengeString2,mediumGray);     
        instructions.anchor.set(.5);
        challenge.anchor.set(.5);
        challenge2.anchor.set(0.5)
        // challenge3.anchor.set(0.5)
        readyButton.anchor.set(.5);
        //Enable buttons
        readyButton.inputEnabled=true;
        readyButton.events.onInputOver.add(overReady,this);
        readyButton.events.onInputOut.add(overReadyLeave,this);
        readyButton.events.onInputDown.add(clickReady,this);
   }
}

function createGameInput(){
        var gameInput=[];
        //check for nonbinary mode
        if((gameData.subject.PGP!=='male'&&gameData.subject.PGP!=='female')||(gameData.currentGame.control.PGP!=='male'&&gameData.currentGame.control.PGP!=='female')){
            gameInput.nonbinary=true;
        } else{
            gameInput.nonbinary=false;
        }

        //populate with subject sentences
        for(var i=0; i<gameData.subject.sentences.length; i++){
            populateObj(gameInput,gameData.subject.sentences[i],true)
        }
        //populate with control sentences
        for(var i=0; i<gameData.currentGame.control.sentences.length; i++){
            populateObj(gameInput,gameData.currentGame.control.sentences[i],false)
        }


        return gameInput;
    }

function populateObj(gameInput,thisChallenge,isSubject){
    var obj={};
    obj.options=[gameData.pronouns.male[thisChallenge.POS],gameData.pronouns.female[thisChallenge.POS],gameData.pronouns.neutral[thisChallenge.POS]];
    if(isSubject){ 
        obj.correctAnswer=gameData.pronouns[gameData.subject.PGP][thisChallenge.POS];
        obj.name=gameData.subject.name;
    }
    else{
        obj.correctAnswer=gameData.pronouns[gameData.currentGame.control.PGP][thisChallenge.POS];
        obj.name=gameData.currentGame.control.name;

    }
    var preArray=thisChallenge.array.map(function(elt){
        if(!elt){
            var toReturn;
            if(gameInput.nonbinary){
                console.log('nonbinary!!')
                return '________'
            }
            if(isSubject){
                toReturn='('+gameData.subject.name+')'
            } else{
                toReturn='('+gameData.currentGame.control.name+')'
            }
            if(thisChallenge.POS==='P1'||thisChallenge.POS==='P2'){
                toReturn=toReturn+"'s";
            }
            return toReturn;
        }
        return elt;
    })
    var postArray=thisChallenge.array.map(function(elt){
        if(!elt){
            return obj.correctAnswer;
        }
        return elt;
    })
    obj.sentencePre=preArray.join(' ').toUpperCase();
    obj.sentencePost=postArray.join(' ').toUpperCase();
    isSubject? obj.isSubject=true : obj.isSubject=false;
    Math.random()>.5? gameInput.push(obj) : gameInput.unshift(obj);

}

//TODO: prevent "they is"!!!!!!!!!