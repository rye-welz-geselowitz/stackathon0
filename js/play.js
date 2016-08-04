    var playState={
        create: function(){
            playStart=game.time.now;
            sentence=textWithBody(gameInput[0].sentencePre,0,0,game.world.centerX,game.world.centerY,mediumWhite,true);
            //create words group
            words=game.add.group();
            words.enableBody=true;
            for(var i=0;i<gameInput[0].subjectPronouns.length;i++){
                var word=textWithBody(gameInput[0].subjectPronouns[i],100,100,game.world.randomX,game.world.randomY,largeGray,false);
                words.add(word);
                word.inputEnabled=true;
                word.events.onInputDown.add(onDown, this);
            }
        },
        update: function(){
            game.physics.arcade.collide(sentence,words);
        }
    }