var crate;
var meWords;
var notMeWords;
var wrScore;
var scoreText;
var rainBegun=false;
var beginTime;
var timeText;

var wordrainState={
    create: function(){
        initiateRoundWordRain();

        //background
        // game.add.sprite(0,0,'water_mountains');
        //score
        scoreText = game.add.text(16, 16, 'Score: 0', mediumWhite);
        timeText = game.add.text(16, 46, 'Time: 30', mediumWhite);

        //words
        meWords=game.add.group();
        meWords.enableBody=true;
        game.time.events.repeat(Phaser.Timer.SECOND*2, Infinity, generateWords, this);

        notMeWords=game.add.group();
        notMeWords.enableBody=true;

        //crate
        crate = game.add.sprite(game.world.centerX,game.world.height-100, 'crate');
        game.physics.arcade.enable(crate);
        crate.collideWorldBounds=true;
        //crate.scale.setTo(.2,.2)
        crate.enableBody=true;

        //date
        beginTime=Date.now();


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
        var timeElapsed=Date.now()-beginTime;
        timeText.text='Time: '+(30-parseFloat(timeElapsed/1000).toFixed(0));
        if(timeElapsed>30000){
            game.state.start('wordrain-end');
        }
        

    }
}

function reward(crate,word){
    registerCatch(1,crate,word)
}
function punish(crate,word){ 
    registerCatch(-1,crate,word)
}

function registerCatch(base,crate,word){
    word.kill();
    if(word.provideBonus){
        gameData.currentGame.score+=(3*base);
    }
    else{
        gameData.currentGame.score+=(base);
    }
    scoreText.text = 'Score: ' + gameData.currentGame.score;    
}

function generateWords(){
    generateWordHelper(meWords,gameData.currentGame.meWords,mediumGreen,largeGreen);
    generateWordHelper(notMeWords,gameData.currentGame.notMeWords,mediumRed,largeRed);
}

function generateWordHelper(group,wordArr,styleLittle,styleBig){
    var i=Math.floor(Math.random()*wordArr.length);
    var yCoord=0
    var xCoord=Math.random()*game.world.width;
    if(xCoord<50){
        xCoord+=50;
    }
    if(xCoord>(game.world.width-50)){
        xCoord-=50;
    }
    var velocityX=100*Math.random();
    word=textWithBody(wordArr[i],0,velocityX,xCoord,yCoord,styleLittle,false)
    if(['she','her','him','he','they','them'].indexOf(wordArr[i])!==-1){
        word.children[0].setStyle(styleBig);
        word.provideBonus=true;
    }
    word.body.collideWorldBounds = false;
    word.body.gravity.y=6;
    group.add(word);    
}