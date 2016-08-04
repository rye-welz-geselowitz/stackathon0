    var game=new Phaser.Game(800,600,Phaser.AUTO,'');
    game.state.add('boot',bootState);
    game.state.add('load',loadState);
    game.state.add('instructions',instructionsState);
    game.state.add('play',playState);
    game.state.add('end',endState);

    game.state.start('boot');