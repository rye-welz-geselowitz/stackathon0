    //HELPER FUNCS
    var textWithBody=function(words,velocityX,velocityY,locationX,locationY,style,immovable){
        var text = game.add.text(0,0, words,style);
        text.anchor.setTo(.5);
        var textSprite = game.add.sprite(locationX,locationY,null);
        textSprite.anchor.setTo(.5);
        textSprite.addChild(text);
        textSprite.enableBody=true;
        game.physics.enable(textSprite, Phaser.Physics.ARCADE);
        textSprite.body.setSize(text.width,text.height)
        textSprite.body.bounce.y = 1;
        textSprite.body.bounce.x = 1;
        textSprite.body.gravity.y = 0;
        textSprite.body.velocity.x=velocityX;
        textSprite.body.velocity.y=velocityY;
        textSprite.body.collideWorldBounds = true;
        if(immovable){
            textSprite.body.immovable = true;
        }
        return textSprite;    
    }

    function getPronounString(PGP){
        var spDict=gameData.pronouns[PGP];
        return spDict['S']+'/'+spDict['O'];
    }

    function overReady(item) {
        item.setStyle(mediumGray);
    }
    function overReadyLeave(item) {
        item.setStyle(mediumWhite);
    }
    function clickReady(item){
        game.state.start('play'); //CHANGE ME BACK!!!
    }
    function toMenu(item){
        game.state.start('menu');
    }

    initiateRoundClicker=function(){
        gameData.currentGame={};
        gameData.currentGame.control=gameData.controls[Math.floor(Math.random()*gameData.controls.length)];
        gameData.currentGame.gameInput=createGameInput();
        gameData.currentGame.controlTimes=[];
        gameData.currentGame.subjectTimes=[];
    }
    initiateRoundWordRain=function(){
        gameData.currentGame={};
        gameData.currentGame.meWords=gameData.subject.associatedWords;
        gameData.currentGame.notMeWords=gameData.subject.unAssociatedWords;
        var pronounKeys=Object.keys(gameData.pronouns);
        for(var i=0; i<pronounKeys.length; i++){
            if(pronounKeys[i]===gameData.subject.PGP){
                var toAdd=gameData.pronouns[pronounKeys[i]]['S'];
                Math.random()>.5? gameData.currentGame.meWords.push(toAdd) : gameData.currentGame.meWords.unshift(toAdd);
                toAdd=gameData.pronouns[pronounKeys[i]]['O'];
                Math.random()>.5? gameData.currentGame.meWords.push(toAdd) : gameData.currentGame.meWords.unshift(toAdd);

            }
            else{
                var toAdd=gameData.pronouns[pronounKeys[i]]['S'];
                Math.random()>.5? gameData.currentGame.notMeWords.push(toAdd) : gameData.currentGame.notMeWords.unshift(toAdd);
                toAdd=gameData.pronouns[pronounKeys[i]]['O'];
                Math.random()>.5? gameData.currentGame.notMeWords.push(toAdd) : gameData.currentGame.notMeWords.unshift(toAdd);          
            }
        }
        gameData.currentGame.score=0; 
    }



    //GAME VARIABLES
    var playStart;
    var controlTimes=[];
    var subjectTimes=[];

    //styling variables
    //TODO: Update names to generic!!
    var mediumWhite={ font: 'bold 20pt Arial', fill: 'black'};
    var mediumGray={ font: 'bold 20pt Arial', fill: 'gray'};
    var largeGray={ font: 'bold 30pt Arial', fill: 'gray'};
    var largeWhite={ font: 'bold 30pt Arial', fill: 'black'};
    var largeDarkGray={ font: 'bold 30pt Arial', fill: 'white'};
    var mediumRed= { font: 'bold 20pt Arial', fill: 'red'};
    var largeRed= { font: 'bold 30pt Arial', fill: 'red'};
    var largeGreen={ font: 'bold 30pt Arial', fill: 'green'};
    var mediumGreen= { font: 'bold 20pt Arial', fill: 'green'};
