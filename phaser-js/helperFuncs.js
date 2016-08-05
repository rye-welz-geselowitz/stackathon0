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
    function onDown(sprite, pointer) {
        var roundTime=game.time.elapsedSince(playStart);
        var clickedText=sprite.children[0];
        var clickedString=clickedText.text;
        clickedText.setStyle(largeDarkGray);
        if(clickedString===gameInput[0].correctAnswer){
            clickedText.setStyle(largeWhite);
            words.forEach(function(word){word.body.velocity=0})
            sentence.children[0].text=gameInput[0].sentencePost;
            if(gameInput[0].isSubject){
                subjectTimes.push(roundTime);
            }
            else{
                controlTimes.push(roundTime);
            }
            gameInput.shift();
            if(gameInput.length){
                setTimeout(function(){
                    game.state.start('play');
                 }, 1500);
                
            }
            else{
                setTimeout(function(){
                    game.state.start('end');
                 }, 1500);
            }
        }
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
    function calculateScores(){
        controlTimes.avg=parseFloat(controlTimes.reduce(function(sum, a) { return sum + a },0)/(controlTimes.length||1)/1000).toFixed(2);
        subjectTimes.avg=parseFloat(subjectTimes.reduce(function(sum, a) { return sum + a },0)/(subjectTimes.length||1)/1000).toFixed(2);
        if(controlTimes.avg>subjectTimes.avg){
            var percentFaster=parseFloat((controlTimes.avg-subjectTimes.avg)/subjectTimes.avg).toFixed(1);
            return ({percent: percentFaster, result:'faster'})
        }
        if(controlTimes.avg<subjectTimes.avg){
            var percentSlower=parseFloat((subjectTimes.avg-controlTimes.avg)/subjectTimes.avg).toFixed(1);
            return ({percent: percentSlower, result: 'slower'})
        }
        else{
            return ({result: 'equal'})
        }
    }
    function fillGameInput(){
        gameInput=[];
        for(var i=0;i<immutableInput.length;i++){
            if(Math.random()<.5){
                gameInput.push(immutableInput[i]);
            }
            else{
                gameInput.unshift(immutableInput[i]);
            }
        }
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
    var mediumGreen= { font: 'bold 20pt Arial', fill: 'green'};
