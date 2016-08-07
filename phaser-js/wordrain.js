var crate;
var meWords;
var notMeWords;
var wrScore;
var scoreText;
var rainBegun=false;


var wordrainState={
    create: function(){
        initiateRoundWordRain();

        //background
        game.add.sprite(0,0,'water_mountains');
        //score
        scoreText = game.add.text(16, 16, 'score: 0', { fontSize: '32px', fill: '#000' });

        //words
        meWords=game.add.group();
        meWords.enableBody=true;
        var word;
        for(var i=0;i<gameData.currentGame.meWords.length;i++){
            var yCoord=0-(Math.random()*game.world.height);
            var velocityX=100*Math.random();
            word=textWithBody(gameData.currentGame.meWords[i],0,velocityX,Math.random()*game.world.width,yCoord,mediumGreen,false)
            if(['she','her','him','he','they','them'].indexOf(gameData.currentGame.meWords[i])!==-1){
                word.children[0].setStyle(largeGreen);
            }
            
            word.body.collideWorldBounds = false;
            word.body.gravity.y=6;
            word.body.bounce.y=0.7 + Math.random() * 0.2;
            meWords.add(word);
        }
        notMeWords=game.add.group();
        var numToAdd;
        for(var i=0;i<gameData.currentGame.notMeWords.length;i++){
            numToAdd=1+Math.floor(Math.random()*5);
            //TOO MANY WORDS!!!
            for(var j=0;j<numToAdd;j++){
                var yCoord=0-(Math.random()*game.world.height*j);
                var velocityX=100*Math.random();
                word=textWithBody(gameData.currentGame.notMeWords[i],0,velocityX,Math.random()*game.world.width,yCoord,mediumRed,false)
                if(['she','her','him','he','they','them'].indexOf(gameData.currentGame.notMeWords[i])!==-1){
                    word.children[0].setStyle(largeRed);
                }
                word.body.collideWorldBounds = false;
                word.body.gravity.y=6;
                word.body.bounce.y=0.7 + Math.random() * 0.2;
                notMeWords.add(word);
            }
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
            if(word.alive&&word.inWorld){
                mustStop=false;
                rainBegun=true;
            }
        })
        if(mustStop||!rainBegun){
            notMeWords.forEach(function(word){
                if(word.alive&&word.inWorld){ 
                    rainBegun=true;
                    mustStop=false;
                }
            })
        }
        if(mustStop&&rainBegun){
            game.state.start('wordrain-end');
        }
        

    }
}

function reward(crate,word){
    console.log('PRE KILL',word);
    word.kill();
    console.log('POST KILL',word)
    gameData.currentGame.score++;
    scoreText.text = 'Score: ' + gameData.currentGame.score;
}
function punish(crate,word){ 
    word.kill();
    gameData.currentGame.score--;
    scoreText.text = 'Score: ' + gameData.currentGame.score;
}