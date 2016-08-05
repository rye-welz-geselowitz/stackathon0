var crate;
var meWords;
var notMeWords;
var wrScore;
var scoreText;


var wordrainState={
    create: function(){
        wrScore=0;
        //background
        game.add.sprite(0,0,'water_mountains');
        //score
        scoreText = game.add.text(16, 16, 'score: 0', { fontSize: '32px', fill: '#000' });

        //words
        meWords=game.add.group();
        meWords.enableBody=true;
        var word;
        for(var i=0;i<wordDropData.me.length;i++){
            var yCoord=0-(Math.random()*game.world.height);
            var velocityX=100*Math.random();
            word=textWithBody(wordDropData.me[i],0,velocityX,Math.random()*game.world.width,yCoord,mediumGreen,false)
            console.log(word.children[0].text);
            if(['she','her','him','he','they','them'].indexOf(wordDropData.me[i])!==-1){
                word.children[0].setStyle(largeGreen);
            }
            
            word.body.collideWorldBounds = false;
            word.body.gravity.y=6;
            word.body.bounce.y=0.7 + Math.random() * 0.2;
            meWords.add(word);
        }
        notMeWords=game.add.group();
        for(var i=0;i<wordDropData.notMe.length;i++){
            var yCoord=0-(Math.random()*game.world.height);
            var velocityX=100*Math.random();
            word=textWithBody(wordDropData.notMe[i],0,velocityX,Math.random()*game.world.width,yCoord,mediumRed,false)
            if(['she','her','him','he','they','them'].indexOf(wordDropData.notMe[i])!==-1){
                console.log(word);
                word.children[0].setStyle(largeRed);
            }
            word.body.collideWorldBounds = false;
            word.body.gravity.y=6;
            word.body.bounce.y=0.7 + Math.random() * 0.2;
            notMeWords.add(word);
        }
        //crate
        crate = game.add.sprite(game.world.centerX,game.world.height-100, 'crate');
        game.physics.arcade.enable(crate);
        crate.collideWorldBounds=true;
        crate.scale.setTo(.2,.2)
        crate.enableBody=true;


    },
    update: function(){
        game.physics.arcade.overlap(crate,meWords,reward, null, this);
        game.physics.arcade.overlap(crate,notMeWords,punish, null, this);
        cursors = game.input.keyboard.createCursorKeys();
        if(cursors.left.isDown){
            crate.body.velocity.x=-150;
        }
        else if(cursors.right.isDown){
            crate.body.velocity.x=150;
        }
        else{
            crate.body.velocity.x=0;
        }
        var mustStop=true;
        meWords.forEach(function(word){
            if(word.position.y<400){
                mustStop=false;
            }
        })
        if(mustStop){
            notMeWords.forEach(function(word){
                if(word.position.y<400){ //hacky!!
                    mustStop=false;
                }
            })
        }
        if(mustStop){
            game.state.start('wordrain-end');
        }

    }
}

function reward(crate,word){
    word.kill();
    wrScore++;
    scoreText.text = 'Score: ' + wrScore;
}
function punish(crate,word){
    word.kill();
    wrScore--;
    scoreText.text = 'Score: ' + wrScore;
}