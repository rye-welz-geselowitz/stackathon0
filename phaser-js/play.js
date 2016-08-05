var playState={
    create: function(){
        game.add.sprite(0,0,'mountains');
        playStart=game.time.now;
        sentence=textWithBody(gameData.currentGame.gameInput[0].sentencePre,0,0,game.world.centerX,game.world.centerY,mediumWhite,true);
        //create words group
        words=game.add.group();
        words.enableBody=true;
        for(var i=0;i<gameData.currentGame.gameInput[0].options.length;i++){
            var word=textWithBody(gameData.currentGame.gameInput[0].options[i],100,100,game.world.randomX,game.world.randomY,largeGray,false);
            words.add(word);
            word.inputEnabled=true;
            word.events.onInputDown.add(onDown, this);
        }
    },
    update: function(){
        game.physics.arcade.collide(sentence,words);
    }
}

    function onDown(sprite, pointer) {
        var controlTimes=gameData.currentGame.controlTimes;
        var subjectTimes=gameData.currentGame.subjectTimes;
        var roundTime=game.time.elapsedSince(playStart);
        var clickedText=sprite.children[0];
        var clickedString=clickedText.text;
        clickedText.setStyle(largeDarkGray);
        if(clickedString===gameData.currentGame.gameInput[0].correctAnswer){
            clickedText.setStyle(largeWhite);
            words.forEach(function(word){word.body.velocity=0})
            sentence.children[0].text=gameData.currentGame.gameInput[0].sentencePost;
            if(gameData.currentGame.gameInput[0].isSubject){
                subjectTimes.push(roundTime);
            }
            else{
                controlTimes.push(roundTime);
            }
            gameData.currentGame.gameInput.shift();
            if(gameData.currentGame.gameInput.length){
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

